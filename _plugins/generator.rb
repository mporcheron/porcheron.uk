require 'jekyll'

module JekyllLastCommit
  class Generator < Jekyll::Generator

    def generate(site)
      @site = site

      @repo_man = JekyllLastCommit::RepoMan.new(site.source)
      @repo_man.discover_repo()

      data_file_extensions = ['.yml', '.yaml', '.json', '.tsv', '.csv']
      data_files = []
      site.data.keys.each do |data_file|
        data_file_extensions.each do |data_file_extension|
          data_file_name = data_file + data_file_extension
          if File.file?('./_data/' + data_file_name)
            data_files.append(data_file_name)
            break
          end
        end
      end     

      @repo_man.discover_commits(site.documents.map {|d| d.relative_path })
      @repo_man.discover_commits(site.pages.map {|p| p.relative_path })
      @repo_man.discover_commits(data_files.map {|df| './_data/' + df })

      @date_format = site.config.dig('jekyll-last-commit', 'date_format')
      @date_format ||= '%B %d, %Y'

      @should_fall_back_to_mtime = site.config.dig('jekyll-last-commit', 'should_fall_back_to_mtime')
      @should_fall_back_to_mtime ||= true

      data_files_key = site.config.dig('jekyll-last-commit', 'data_files_key')
      data_files_key ||= 'meta'

      populate_jekyll(site.documents)
      populate_jekyll(site.pages)
      populate_jekyll(site.static_files)

      site.data[data_files_key] = {}
      populate_data(data_files, site.data[data_files_key], './_data/')
    end

    def populate_jekyll(files)
      files.each do |file|
        commit = @repo_man.find_commit(file.relative_path)

        if commit.nil?
          if @should_fall_back_to_mtime
            path_file = Jekyll.sanitized_path(@site.source, file.relative_path)

            if File.file?(path_file)
              raw_time = Time.at(File.mtime(path_file).to_i)
              file.data['last_modified_at'] = raw_time
              file.data['last_modified_at_formatted'] = raw_time.strftime(@date_format)
            end
          end

        else
          raw_time = Time.at(commit["time"].to_i)
          file.data['last_commit'] = commit
          file.data['last_modified_at'] = raw_time
          file.data['last_modified_at_formatted'] = raw_time.strftime(@date_format)
        end
      end

      return files
    end

    def populate_data(source, output = {}, prepend_path = '')
      source.each do |file|
        output[file] ||= {}

        relative_path = prepend_path + file
        commit = @repo_man.find_commit(relative_path)

        if commit.nil?
          if @should_fall_back_to_mtime
            path_file = Jekyll.sanitized_path(@site.source, relative_path)

            if File.file?(file)
              raw_time = Time.at(File.mtime(path_file).to_i)
              output[file]['last_modified_at'] = raw_time
              output[file]['last_modified_at_formatted'] = raw_time.strftime(@date_format)
            end
          end
        else
          raw_time = Time.at(commit['time'].to_i)
          output[file]['last_commit'] = commit
          output[file]['last_modified_at'] = raw_time
          output[file]['last_modified_at_formatted'] = raw_time.strftime(@date_format)
        end
      end
    end
  end
end