---
label: Videos and Talks
title: My Videos and Talks
description: A summary of Martin Porcheron's talks and videos, including courses taught in academia.

redirect_from:
  /teaching/

lastmod:
  type: data
  files:
    - videos.yml
    - talks.yml

menu:
  main:
    label: Videos & Talks
    title: A summary of Martin Porcheron's videos and talks, including courses taught in academia 
    weight: 2
---

Below is a selection of videos and recorded talks I have given, including my teaching while I worked in academia. While I have given many more talks than below, unfortunately many have not been made public (e.g., due to rights) or were not even recorded in the first place.

I am open to giving guest lectures in academia, focusing on the design and use of conversational technologies, and the application of user experience and human computer interaction in industry, from a practitioner's perspective. Please [contact me](/contact/) me for more information.

<!-- section -->

## Videos

{%- for video in site.data.videos %}

### {{ video.title }}

{{ video.introduction }}

{% include figure_video.html video=video.url caption=video.caption %}

{% unless forloop.last %}

---

{% endunless %}

{%- endfor %}

<!-- section -->

## Past Talks

{%- for talk in site.data.talks %}

* **{{ talk.title }}**<br>
  {{ talk.location }}<br>
  <small class="d-inline-block {% unless forloop.last %}mb-2{% endunless %} text-muted">[{%- include date.html date=talk.date -%}; ~{{ talk.attendance }}]</small>

{%- endfor %}

<!-- section -->

## Teaching in Academia

While as a Senior Lecturer at [Swansea University](https://www.swansea.ac.uk/compsci/ "Computer Science at Swansea University"), I co-ordinated and lectured on the module *CSC371 Advanced Object-Oriented Programming* (C and C++ for third-year Computer Science students) in the 2020/21 and 2021/22 academic years. I also taught on the *CS-210 Concurrency* module in the 2021/22 academic year, along with [Dr Alma Rahat](https://www.swansea.ac.uk/staff/a.a.m.rahat/ "Alma Rahat on the Swansea University website").

While a Research Fellow at the [University of Nottingham](https://www.nottingham.ac.uk/computerscience/index.aspx "Computer Science at the University of Nottingham"), I assisted with the teaching of a number of modules including ethnography and design, binary arithmetic and logic, *Java* (advanced), *C/C++* (advanced), *Python* (introductory), and *Android* (advanced).
