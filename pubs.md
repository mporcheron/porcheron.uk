---
label: Publications
title: My publications
description: A list of my publications, including archival (conference/journal) papers, demos, and magazine articles. I've also organised workshops co-located at international conferences. 

menu:
  main:
    label: Publications
    title: Archival and non-archival publications by Martin Porcheron
    weight: 3
---
Below is a list of my publications, including preprint copies of each publication as a PDF where rights permit.

Jump to a category of publication:

{%- for category in site.data.pubs_categories %}
* [{{ category[1] }}](#{{ category[1] | slugify }})
{% endfor -%}


{%- for category in site.data.pubs_categories -%}
    
{% unless foreach.last -%}
<hr>
{%- endunless -%}

<h2 id="{{ category[1] | slugify }}" class="mb-2 fw-bold">{{ category[1] }}</h2>
{% capture bib_category %}{{ category[0] }}{% endcapture %}
{% capture bib %}{% bibliography --file {{ bib_category }} %}{% endcapture %}
{{ bib | replace: "&amp;", "&" | replace: "&lt;", "<" | replace: "&gt;", ">" | replace: "Martin Porcheron", "<u>Martin Porcheron</u>" | markdownify }}

{%- endfor -%}