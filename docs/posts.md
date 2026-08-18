---
title: Wpisy | Patromierz
layout: default
permalink: /posts/
---

# Wpisy

{% if site.posts.size > 0 %}
{% for post in site.posts %}
## [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%Y-%m-%d" }}

{{ post.excerpt }}

[Czytaj dalej]({{ post.url | relative_url }})
{% endfor %}
{% else %}
Nie ma jeszcze żadnych wpisów.
{% endif %}
