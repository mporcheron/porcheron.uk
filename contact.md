---
title: Contact Me
description: >-
  A number of ways to contact Martin Porcheron, as well as a list containing of verified social media profiles.

lastmod:
  type: data
  files:
    - contacts.yml

menu:
  main:
    label: Contact
    title: Contact and social media details for Martin Porcheron
    weight: 4
---

<div class="link-palette grid mt-md-5 pt-md-0 mt-4 pt-2 text-center rounded-4"  style="--bs-gap: 1rem;">
{%- for contact in site.data.contacts -%}
<div class="link g-col-xl-4 g-col-lg-6 g-col-md-12 g-col-sm-6 g-col-12 shadow rounded-4">
	<a href="{%- if contact.is_email -%}mailto:{{- contact.url | replace: "mailto:", "" | encode_email -}}{%- else -%}{{- contact.url -}}{%- endif -%}" title="{{ contact.title }}" class="d-flex flex-row align-items-stretch rounded-4" style="border: 4px solid {{ contact.background }};">
    <div class="flex-shrink-0 py-3 icon" style="background-color: {{ contact.background }};">
      {{ contact.svg }}
    </div>
    <div class="flex-grow-1 align-self-center">
      {{ contact.name }}
    </div>
	</a>
</div>
{%- endfor -%}
</div>