# Pengchao Zhang — Personal Academic Website

An English-language personal academic website with a compact, information-first layout.

## Site structure

- `/` — concise biography, research interests, and selected publications
- `/research` — research themes and computational archives
- `/publications` — publications with DOI, PDF, code/data, preprint links, and available graphical abstracts
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

The source application lives in `site/`. The build writes the deployable site to
`dist/` and synchronizes the generated entry files and assets to the repository
root. This supports both GitHub Actions deployment and repositories configured
to publish from `main` at `/`.

## Publishing

The included GitHub Actions workflow deploys the `dist` directory to GitHub Pages. For the GitHub account `Zhang-pchao`, the root personal website repository should be named:

```text
Zhang-pchao.github.io
```
