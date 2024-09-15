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

I am open to giving guest lectures and workshops focusing on the design and use of conversational technologies, and the application of user experience and human computer interaction in industry, from a practitioner's perspective. Please [contact me](/contact/) for more information.

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

<ul class="list-unstyled d-flex flex-wrap">
  {%- for talk in site.data.talks %}
    <li class="d-flex flex-fill w-xl-50 w-100 p-lg-1 py-2 ">
      <div class="d-flex flex-grow-1 align-items-center talk rounded-2 p-3">
        <div>
          <b class="d-block">{{ talk.title }}</b>
          <span class="d-block mt-1">{{ talk.location }}</span>
          <div class="d-flex flex-sm-row flex-column flex-wrap mt-1">
            <div class="d-flex flex-row align-items-center me-3">
              <span class="icon-cal me-1"></span>
              <small class="text-muted">{%- include date.html date=talk.date -%}</small>
            </div>
            <div class="d-flex flex-row align-items-center me-3">
              <span class="icon-type me-1"></span>
              <small class="text-muted">{{ talk.type | capitalize }}</small>
            </div>
            <div class="d-flex flex-row align-items-center">
              <span class="icon-people me-1"></span>
              <small class="text-muted">~{{ talk.attendance }} people</small>
            </div>
          </div>
        </div>
      </div>
    </li>
  {%- endfor %}
</ul>

<!-- section -->

## Teaching in Academia

While I was a Senior Lecturer at [Swansea University](https://www.swansea.ac.uk/compsci/ "Computer Science at Swansea University"), I co-ordinated and lectured on the module *CSC371 Advanced Object-Oriented Programming* (C and C++ for third-year Computer Science students) in the 2020/21 and 2021/22 academic years. I also taught on the *CS-210 Concurrency* module in the 2021/22 academic year, along with [Dr Alma Rahat](https://www.swansea.ac.uk/staff/a.a.m.rahat/ "Alma Rahat on the Swansea University website").

While I was a Research Fellow at the [University of Nottingham](https://www.nottingham.ac.uk/computerscience/index.aspx "Computer Science at the University of Nottingham"), I assisted with the teaching of a number of modules including ethnography and design, binary arithmetic and logic, *Java* (advanced), *C/C++* (advanced), *Python* (introductory), and *Android* (advanced).
