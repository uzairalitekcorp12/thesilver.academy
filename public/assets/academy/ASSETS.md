# Asset replacement guide

## Central configuration

Edit `app/academy/data/academyData.js`.

### Replace these first

- `heroTeacher`: final teacher/faculty cut-out PNG or WebP.
- `classroom`: final Silver Academy classroom photograph.
- `cambridge`: authorized Cambridge badge artwork, if applicable.
- `skillLogos`: local logo files if you do not want CDN-hosted placeholders.
- `socialLogos`: local social SVGs if preferred.

## Suggested local structure

```text
public/assets/academy/
├── shared/
│   └── logo.svg
├── hero/
│   ├── teacher.webp
│   └── cambridge.webp
├── why/
│   └── classroom.webp
└── skills/
    ├── amazon.svg
    ├── ebay.svg
    ├── shopify.svg
    ├── wordpress.svg
    ├── google-ads.svg
    └── etsy.svg
```
