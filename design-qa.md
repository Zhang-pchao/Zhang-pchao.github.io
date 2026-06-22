# Design QA

## Comparison target

- Source visual truth:
  - `qa/reference-desktop.png`
  - `qa/reference-mobile.png`
- Implementation:
  - `qa/home-desktop.png`
  - `qa/home-mobile.png`
  - `qa/publications-desktop.png`
  - `qa/resources-mobile.png`
- Viewports:
  - Desktop: 1280 × 720 browser viewport
  - Mobile: 390 × 844 emulated browser viewport
- States:
- Home page with active Home navigation
- Publications page with active Publications navigation
- Mobile home page with menu closed
  - Mobile Resources page

## Comparison evidence

- Desktop side-by-side comparison: `qa/comparison-desktop.png`
- Mobile side-by-side comparison: `qa/comparison-mobile.png`

The references include a laboratory group website and a compact personal academic website. The comparison evaluates the requested relationship: restrained typography, a narrow reading width, plain academic lists, concise page hierarchy, and responsive navigation. Group-specific content and assets were intentionally excluded.

## Findings

No actionable P0, P1, or P2 findings remain.

- Information architecture: Home, Research, Publications, CV, Resources, and Contact are separate routes. The home page is concise and detailed content is moved to dedicated pages.
- Fonts and typography: moderate Georgia headings and system sans-serif text create a traditional academic hierarchy with readable mobile wrapping.
- Spacing and layout rhythm: desktop and mobile pages use a 960 px reading width, compact section spacing, thin rules, and list rhythm. No decorative cards are used.
- Colors and visual tokens: a light gray header, restrained blue links, neutral borders, and white content surfaces keep attention on the information.
- Image quality and asset fidelity: the user-provided portrait was converted to a 267 KB JPEG and displays without stretching or cropping defects.
- Copy and content: the website is English-first and integrates the supplied education, appointment, visiting research, patent, talk, honor, and publication details.
- Publications and PDFs: eight author-provided PDFs are exposed as same-origin downloads. DOI and code/data links remain available. Two arXiv links were added only after verification in repository README files.
- Interaction and responsiveness: active navigation states work, the mobile menu opens into a six-link grid, route changes scroll to the top, and direct production URLs are supported. At 390 px, document and body widths remain 390 px with no horizontal overflow.
- Deployment behavior: the production build generates `dist/index.html` and `dist/404.html`, then synchronizes the deployable entry files and hashed assets to the repository root. Both GitHub Actions and `main/root` Pages configurations are supported.

## Patches made during QA

- Corrected the portrait sizing to prevent the HTML height attribute from stretching the image.
- Added per-route document titles.
- Added explicit PDF download attributes.
- Verified all six production routes and representative PDF responses.
- Confirmed mobile navigation closes after route selection.

## Follow-up polish

- P3: add a downloadable full CV only when a final public CV PDF is supplied.
- P3: add publication figures only when permission-safe figure files and captions are selected.

final result: passed
