---
title: Extended portfolio
description: |
  An extended list of my user experience design and research projects.

permalink: /portfolio/all/

sections:
  collapsible: true
---

Throughout my career, I’ have  led UX research across a wide range of projects; from early exploratory work to applied studies—spanning conversational interfaces, AI, medical devices, and more. Below is the extended list of my past research and design projects, however, I recommend you start with my [shortened portfolio](/portfolio).

{%- assign recentCutoff =  site.time | date: "%Y" | minus: 4 -%}
{%- assign shownOlderTitle = false -%}

{%- for year in site.data.portfolio -%}

{%- unless shownOlderTitle %}
{%- if year[0] < recentCutoff -%}
<h2 class="mt-md-5 mt-3 mt-2 fw-medium">Older projects</h2>
{%- assign shownOlderTitle = true -%}
{%- endif -%}
{%- endunless -%}

{%- for project in year[1] -%}

{% unless foreach.last %}
<!-- begin section -->
{% endunless %}

<h3 id="{{ project.slug }}">
  <span class="d-flex flex-row align-items-center me-2 fw-400">
    {%- if project.star -%}
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-star-fill me-3 section-star" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
    {%- endif -%}
    <span class="graded-title">
      {{ project.title | replace: "*/", "<b>" | replace: "/*", "</b>" }}
    </span>
  </span>
</h3>

<div class="d-flex flex-xl-row flex-column mb-4">
  <div class="d-flex flex-row align-items-center">
    <span class="text-muted flex-shrink-0 me-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-range-fill" viewBox="0 0 16 16">
        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2z"/>
      </svg>
    </span>
    <small class="text-muted mt-1">{{ project.dates }}</small>
  </div>
  {% if project.industries %}
  <div class="d-flex flex-row align-items-center ms-xl-3">
    <span class="text-muted flex-shrink-0 me-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings-fill" viewBox="0 0 16 16">
        <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
      </svg>
    </span>
    <small class="text-muted mt-1">
      {% for industry in project.industries %}
        {%- if forloop.length > 2 %}{%- unless forloop.first %}, {% endunless -%}{% endif -%}
        {%- if forloop.last %} and {% endif -%}
        <b>{{- industry -}}</b>
      {%- endfor %}
    </small>
  </div>
  {% endif %}
  {% if project.client %}
  <div class="d-flex flex-row align-items-center ms-xl-3">
    <span class="text-muted flex-shrink-0 me-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
    </span>
    <small class="text-muted mt-1">Completed for <b>{{ project.client }}</b></small>
  </div>
  {% endif -%}
</div>

{{ project.description }}

{% unless foreach.last %}
<!-- end section -->
{% endunless %}

{%- endfor -%}

{%- endfor -%}