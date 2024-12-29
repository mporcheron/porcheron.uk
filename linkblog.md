---
title: Linkblog

menu:
  main:
    label: Linkblog
    title: What I'm currently reading and watching
    weight: 0
---

<ol>
{% for post in site.posts %}
  <li>
    <a href="{{ post.canoncial_link }}" title="Read '{{ post.title | escape }}'">
      {{ post.title }}
    </a>
    <p>{{ post.output }}</p>
  </li>
{% endfor %}
</ol>