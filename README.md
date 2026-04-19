# Grammino Web

A static website for Grammino — a lightweight grammar & writing assistant.

## Structure

```
Grammino Web/
├── index.html              # Landing page (hero, features, live editor, pricing)
├── pages/
│   ├── about.html
│   └── contact.html
├── assets/
│   ├── css/styles.css
│   └── js/main.js          # Live editor: word count, reading time, rule-based checks
└── README.md
```

## Run

No build step. Open `index.html` directly, or serve locally:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit http://localhost:8000.

## Editor rules

`assets/js/main.js` uses simple regex rules for demo purposes
(common misspellings, spacing, its/it's, your/you're, to/too). Extend the
`RULES` array to add more checks.
