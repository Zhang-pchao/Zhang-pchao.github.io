# Pengchao Zhang — Personal Academic Website

An English-language academic website for presenting research themes, publications, downloadable article PDFs, reproducibility resources, academic experience, and professional profiles.

## Site structure

- `/` — concise home page and current appointment
- `/research` — research themes and computational archives
- `/publications` — selected publications with DOI, PDF, code/data, and verified preprint links
- `/cv` — education, appointments, visiting research, patents, academic exchange, and honors
- `/contact` — affiliation, office, email, and scholarly profiles

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build copies `index.html` to `404.html` so client-side routes work when served by GitHub Pages.

## Publishing

The included GitHub Actions workflow deploys the `dist` directory to GitHub Pages. For the GitHub account `Zhang-pchao`, the root personal website repository should be named:

```text
Zhang-pchao.github.io
```

## Source provenance

See [CONTENT_SOURCES.md](./CONTENT_SOURCES.md).
