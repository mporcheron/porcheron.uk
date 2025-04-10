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

sections:
  collapsible: true

containsVideo: true

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
<div class="video-outer-container d-flex {% unless forloop.last %}border-bottom{% endunless %} {% unless forloop.first %}mt-3{% endunless %}">
  <div class="flex-grow-1 {% unless forloop.last %}mb-3{% endunless %}">
    <h3 class="mb-1">
      {{- video.title -}}
    </h3>
    {{- video.introduction | markdownify -}}
  </div>
  <div class="flex-shrink-0 video-container w-25 ms-3 {% unless forloop.last %}mb-3{% endunless %}">
    <figure class="video px-0 border rounded-3">
      <div class="w-100 video-unactivated" data-video="{{ video.url }}" id="video{{ forloop.index }}">
        <div class="bg-dark text-white p-lg-4 p-md-3 py-2 rounded-3 cta-link text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"></path>
          </svg>  
        </div>
      </div>
    </figure>
  </div>
</div>
{%- endfor %}

<!-- section -->

## Past Talks, Workshops, and Conferences

<ul class="list-unstyled d-flex flex-wrap">
  {%- for talk in site.data.talks %}
    <li class="d-flex flex-fill w-xl-50 w-100 p-lg-1 py-2 ">
      <div class="d-flex flex-grow-1 talk rounded-2 p-3">
        <div class="d-flex flex-row flex-wrap justify-content-start align-items-start w-100">
          <div class="w-100 flex-grow-1">
            <h6 class="d-block mb-1 fw-semibold">{{ talk.title }}</h6>
            {{ talk.venue }}
          </div>
          <div class="w-100 d-flex align-self-end p-0">
            <div class="d-inline-flex flex-column flex-wrap w-50 mt-2">
              <div class="d-flex flex-row align-items-center me-3">
                <span class="icon-cal flex-shrink-0 me-2"></span>
                <small class="text-muted">
                  {%- if talk.dates -%}
                    {%- include daterange.html startdate=talk.dates.from enddate=talk.dates.to -%}
                  {%- else -%}
                    {%- include date.html date=talk.date -%}
                  {%- endif -%}
                </small>
              </div>
              <div class="d-flex flex-row align-items-center mt-2 me-3">
                <span class="icon-map flex-shrink-0 me-2"></span>
                <small class="text-muted">{{ talk.location }}</small>
              </div>
            </div>
            <div class="d-inline-flex flex-column flex-wrap flex-grow-1 mt-2">
              <div class="d-flex flex-row align-items-center me-3">
                <span class="icon-type flex-shrink-0 me-2"></span>
                <small class="text-muted">{{ talk.type | capitalize }}</small>
              </div>
              <div class="d-flex flex-row align-items-center mt-2">
                <span class="icon-people flex-shrink-0 me-2"></span>
                <small class="text-muted">~{{ talk.attendance }} people</small>
              </div>
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
