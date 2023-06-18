---
label: Contact me
description: >-
  A number of ways to contact Martin Porcheron, as well as a list containing of verified social media profiles.
position: 7

menu:
  main:
    label: Contact
    title: Contact and social media details for Martin Porcheron
    weight: 4
---

# Contact me

<div class="link-palette grid mt-5 text-center rounded-4"  style="--bs-gap: 1rem;">
{%- for contact in site.data.contacts -%}
<div class="link g-col-xxl-3  g-col-xl-4 g-col-lg-6 g-col-12 rounded-4">
	<a href="{{ contact.url }}" title="{{ contact.title }}" class="d-block py-5 rounded-4" style="background-color: {{ contact.colour }}; border-color: {{ contact.colour }};">
		{{ contact.svg }}<br>
		<span>{{ contact.name }}</span>
	</a>
</div>
{%- endfor -%}
</div>