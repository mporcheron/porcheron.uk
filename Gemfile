source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

gem "jekyll", "~> 4.3.4"

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem 'jekyll-email-protect'
  gem "jekyll-last-commit", :git => "https://github.com/mporcheron/jekyll-last-commit.git"
  gem "jekyll-menus", :git => "https://github.com/forestryio/jekyll-menus.git"
  gem 'jekyll-optional-front-matter'
  gem 'jekyll-redirect-from'
  gem "jekyll-seo-tag"
  gem 'jekyll-scholar'
  gem 'jekyll-sitemap'
  gem 'jekyll-target-blank'
  gem 'jekyll-titles-from-headings'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
