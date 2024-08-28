---
title: My publications
description: |
  A list of my publications, including archival (conference/journal) papers,
  demos, and magazine articles. I've also organised workshops co-located at
  international conferences. 

lastmod:
  type: data
  files:
    - pubs_categories.yml

menu:
  main:
    label: Publications
    title: A list and links to download publications (co)authored by Martin Porcheron
    weight: 3
---

Below is a list of my publications, including preprint copies of each publication as a PDF, where publishing rights permit.

Jump to a category of publication:

{%- for category in site.data.pubs_categories %}
* [{{ category[1] }}](#{{ category[1] | slugify }})
{% endfor -%}

{%- for category in site.data.pubs_categories -%}

{% unless foreach.last %}
<!-- section -->
{% endunless %}

<h2 id="{{ category[1] | slugify }}">{{ category[1] }}</h2>

{% capture bib_category %}{{ category[0] }}{% endcapture %}
{% capture bib %}{% bibliography --file {{ bib_category }} %}{% endcapture %}
{{ bib | replace: "&amp;", "&" | replace: "&lt;", "<" | replace: "&gt;", ">" | replace: "Martin Porcheron", "<u>Martin Porcheron</u>" | markdownify }}

{%- endfor -%}
