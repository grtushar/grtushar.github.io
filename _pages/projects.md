---
layout: page
title: "All Projects"
permalink: /projects/
description: Every project I've built — at work, in research and at university.
lead: Everything I've built — at work, for research and at university.
---

<div class="table-wrap">
  <table class="archive-table">
    <thead>
      <tr>
        <th scope="col">Project</th>
        <th scope="col">Made at</th>
        <th scope="col">Built with</th>
        <th scope="col">Link</th>
      </tr>
    </thead>
    <tbody>
      {%- for project in site.data.projects %}
      <tr>
        <td>
          <div class="archive-table__project">{{ project.title }}</div>
          <div>{{ project.description }}</div>
        </td>
        <td>{{ project.made_at }}</td>
        <td>
          <ul class="pill-list">
            {%- for tag in project.tags %}
            <li class="pill">{{ tag }}</li>
            {%- endfor %}
          </ul>
        </td>
        <td>
          {%- if project.url %}
          <a href="{{ project.url }}">{{ project.link_label | default: "View" }} {% include site/icon.html name="arrow-up-right" %}</a>
          {%- else %}
          <span aria-label="No public link">—</span>
          {%- endif %}
        </td>
      </tr>
      {%- endfor %}
    </tbody>
  </table>
</div>
