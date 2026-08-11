# Manthan Bhala — Developer Profile

The source for [manthanbhala.github.io](https://manthanbhala.github.io/): a concise public profile for software-development and machine-learning engineering opportunities.

## Highlights

- Applied ML for search, ranking, and recommendations
- Experience and measurable product impact
- Links to LinkedIn, GitHub, email, and (when supplied) a downloadable resume
- Static export deployed through GitHub Pages

## Update profile content

Personal details, experience, skills, impact, and patents live in [`app/data/content.ts`](app/data/content.ts). Keep claims concise and use only information you are comfortable publishing publicly.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev
```

To verify the deployable version:

```bash
npm run build
```

The GitHub Actions workflow exports the site and deploys the `out/` directory to GitHub Pages whenever `main` is updated.
