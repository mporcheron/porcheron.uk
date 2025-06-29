---
label: My talks and events
title: My talks and events
description: A list of the talks, workshops, and conferences organised by Martin Porcheron, including a number of recorded videos.

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
    label: Talks and events
    title: A summary of talks and events given and organised by Martin Porhceron, as well as courses taught in academia.
    weight: 2
---

Below is a selection of videos and recorded talks I have given, including examples from my teaching during my time in academia. While I have delivered many more talks than are listed here, unfortunately, many were either not recorded or are not publicly available due to rights restrictions.

I am open to giving guest lectures and workshops on the design and use of conversational technologies, as well as the application of user experience and human-computer interaction in industry from a practitioner’s perspective. Please [contact me](mailto:{{ site.contact.email }}) for more information.

<!-- begin collapsible section -->

### Videos

{%- for video in site.data.videos %}
<div class="video-outer-container d-flex {% unless forloop.last %}border-bottom{% endunless %} {% unless forloop.first %}mt-3{% endunless %}">
  <div class="flex-grow-1 {% unless forloop.last %}mb-3{% endunless %}">
    <h4 class="mb-1">
      {{- video.title -}}
    </h4>
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

<!-- end collapsible section -->
<!-- begin collapsible section -->

### Talks, workshops, and conferences

<ul class="list-unstyled d-flex flex-wrap">
  {%- for talk in site.data.talks %}
    <li class="d-flex flex-fill w-lg-50 w-100 p-lg-1 py-2 ">
      <div class="d-flex flex-grow-1 talk rounded-2 p-3">
        <div class="d-flex flex-row flex-wrap justify-content-start align-items-start w-100">
          <div class="w-100 flex-grow-1">
            <h6 class="d-block mb-1 fw-semibold">{{ talk.title }}</h6>
            <span class="small">{{ talk.venue }}</span>
          </div>
          <div class="w-100 d-flex align-self-end p-0">
            <div class="d-inline-flex flex-column flex-wrap w-50 mt-2">
              <div class="d-flex flex-row align-items-center me-3">
                <span class="text-muted flex-shrink-0 me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-range-fill" viewBox="0 0 16 16">
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2z"/>
                  </svg>
                </span>
                <small class="text-muted mt-1">
                  {%- if talk.dates -%}
                    {%- include daterange.html startdate=talk.dates.from enddate=talk.dates.to -%}
                  {%- else -%}
                    {%- include date.html date=talk.date -%}
                  {%- endif -%}
                </small>
              </div>
              <div class="d-flex flex-row align-items-center mt-2 me-3">
                <span class="text-muted flex-shrink-0 me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                  </svg>
                </span>
                <small class="text-muted mt-1">{{ talk.location }}</small>
              </div>
            </div>
            <div class="d-inline-flex flex-column flex-wrap flex-grow-1 mt-2">
              <div class="d-flex flex-row align-items-center me-3">
                <span class="text-muted flex-shrink-0 me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-easel2-fill" viewBox="0 0 16 16">
                    <path d="M8.447.276a.5.5 0 0 0-.894 0L7.19 1H2.5A1.5 1.5 0 0 0 1 2.5V10h14V2.5A1.5 1.5 0 0 0 13.5 1H8.809z"/>
                    <path fill-rule="evenodd" d="M.5 11a.5.5 0 0 0 0 1h2.86l-.845 3.379a.5.5 0 0 0 .97.242L3.89 14h8.22l.405 1.621a.5.5 0 0 0 .97-.242L12.64 12h2.86a.5.5 0 0 0 0-1zm3.64 2 .25-1h7.22l.25 1z"/>
                  </svg>
                </span>
                <small class="text-muted mt-1">{{ talk.type | capitalize }}</small>
              </div>
              <div class="d-flex flex-row align-items-center mt-2">
                <span class="text-muted flex-shrink-0 me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                  </svg>
                </span>
                <small class="text-muted mt-1">~{{ talk.attendance }} people</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  {%- endfor %}
</ul>

<!-- end collapsible section -->
<!-- begin collapsible section -->

### Teaching in academia

While I was a Senior Lecturer at [Swansea University](https://www.swansea.ac.uk/compsci/ "Computer Science at Swansea University"), I co-ordinated and lectured on the module *CSC371 Advanced Object-Oriented Programming* (C and C++ for third-year Computer Science students) in the 2020/21 and 2021/22 academic years. I also taught on the *CS-210 Concurrency* module in the 2021/22 academic year, along with [Dr Alma Rahat](https://www.swansea.ac.uk/staff/a.a.m.rahat/ "Alma Rahat on the Swansea University website").

While I was a Research Fellow at the [University of Nottingham](https://www.nottingham.ac.uk/computerscience/index.aspx "Computer Science at the University of Nottingham"), I assisted with the teaching of a number of modules including ethnography and design, binary arithmetic and logic, *Java* (advanced), *C/C++* (advanced), *Python* (introductory), and *Android* (advanced).

<!-- end collapsible section -->