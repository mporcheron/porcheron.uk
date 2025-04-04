---
title: My Publications
description: |
  A list of my publications, including archival (conference/journal) papers,
  demos, and magazine articles. I've also organised workshops co-located at
  international conferences. 

lastmod:
  type: static
  files:
    - /bibliography/acm.csl
    - /bibliography/archival.bib
    - /bibliography/chapter.bib
    - /bibliography/demo.bib
    - /bibliography/magazine.bib
    - /bibliography/position.bib
    - /bibliography/report.bib
    - /bibliography/thesis.bib
    - /bibliography/workshop.bib

sections:
  collapsible: true

menu:
  main:
    label: Publications
    title: A list and links to download publications (co)authored by Martin Porcheron
    weight: 3
---

Below is a list of my publications, including preprint copies of each publication as a PDF, where publishing rights permit. A BibTeX reference can be accessed for each publication using the `[bib]` link.

{%- for category in site.data.pubs_categories -%}

{% unless foreach.last %}
<!-- section -->
{% endunless %}

<h2 id="{{ category[1] | slugify }}">{{ category[1] }}</h2>

{% capture bib_category %}{{ category[0] }}{% endcapture %}
{% capture bib %}{% bibliography --file {{ bib_category }} %}{% endcapture %}
{{ bib | replace: "&amp;", "&" | replace: "&lt;", "<" | replace: "&gt;", ">" | replace: "Martin Porcheron", "<u>Martin Porcheron</u>" | markdownify }}

{%- endfor -%}
