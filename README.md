# Pengchao Zhang — Personal Academic Website

An English-language personal academic website with a compact, information-first layout.

## Site structure

- `/` — concise biography, research interests, and selected publications
- `/research` — research themes and computational archives
- `/publications` — selected publications with DOI, PDF, code/data, and verified preprint links
- `/cv` — education, appointments, visiting research, patents, academic exchange, and honors
- `/resources` — tutorials, recommended learning resources, and future technical notes
- `/contact` — affiliation, email, academic profiles, and social links

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
