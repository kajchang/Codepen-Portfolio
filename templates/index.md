# Codepen Portfolio

A repository storing my codepens from [codepen.io](https://codepen.io).

## Codepens

{% for codepen in codepens %}
- [{{codepen}}]({{github_pages_link + '/' + codepen}})
{% endfor %}