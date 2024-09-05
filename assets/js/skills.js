---

---
const skills =
[
{%- for c in site.skills -%}
{%- for item in c.items -%}

  {
      "Category": "{{ c.title }}",
      "SkillID": "{{ c.ID }}_{{ item.ID }}",
      "Name": "{{ item.name }}"
  }
  {%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
  ]
