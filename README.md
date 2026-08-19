# Silver Academy — Next.js Landing Page

Production-oriented recreation of the supplied Silver Academy reference design.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

## Theme / Colors

All page colors are centralized in `app/globals.css` under `:root`.
Component CSS files intentionally use CSS variables instead of hard-coded color values.

## Demo Assets

All remote demo image/logo URLs are centralized in:

`app/academy/data/academyData.js`

Replace those values later with local files in `public/assets/academy/...` or your final CDN URLs.

The same local logo is used in the Navbar, Footer and browser tab icon through `metadata.icons` in `app/layout.js`.

## Notes

- The hero portrait and classroom photo are temporary Unsplash images.
- Skill and social brand icons are temporary Simple Icons CDN SVGs.
- The Cambridge badge is an intentionally generic local placeholder and should be replaced with the authorized final asset.
- The statistic values are placeholders until real figures are confirmed.
