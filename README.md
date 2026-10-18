# BAOBAO — website redesign

A redesign concept for [BaoBao](https://www.baobaolondon.co.uk/), a Taiwanese street food restaurant at Boxpark Croydon. Built as plain HTML, CSS and JavaScript from a Figma design.

**Pages:** Home · Menu · About · Contact · Book a table

## Run locally

```bash
python3 .claude/serve.py
```

Then open http://localhost:5178. (Any static file server works; this one just disables caching.)

## Structure

```
index.html, menu.html, about.html, contact.html, reservation.html
assets/css/style.css     all styles
assets/js/main.js        nav overlay, menu accordion, opening hours, reservation form
assets/js/menu-data.js   menu items and prices
assets/img/              photos
```

## Notes

- This is a design concept, not the restaurant's official site. The reservation form has no backend.
- Photos belong to BaoBao (from baobaolondon.co.uk and their Instagram).
- Fonts: Libre Caslon Text and Inter, both under the SIL Open Font License.
- Map © OpenStreetMap contributors.
