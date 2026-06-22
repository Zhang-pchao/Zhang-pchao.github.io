# Design QA

## Comparison target

- Source visual truth:
  - `qa/reference-desktop.png`
  - `qa/reference-mobile.png`
- Implementation:
  - `qa/home-desktop.png`
  - `qa/home-mobile.png`
  - `qa/publications-desktop.png`
  - `qa/cv-mobile.png`
- Viewports:
  - Desktop: 1280 × 720 browser viewport, 1265 px captured content width
  - Mobile: 390 × 844 browser viewport, 375 px captured content width
- States:
  - Home page with active Home navigation
  - Publications page with active Publications navigation
  - Mobile home page with menu closed
  - Mobile CV page after menu navigation

## Comparison evidence

- Desktop side-by-side comparison: `qa/comparison-desktop.png`
- Mobile side-by-side comparison: `qa/comparison-mobile.png`

The reference is a laboratory group website, while the implementation is a personal academic website. The comparison evaluates the requested relationship: restrained academic presentation, a light identity header, blue horizontal navigation, orange active state, concise page hierarchy, and responsive mobile navigation. Group-specific content and assets were intentionally excluded.

## Findings

No actionable P0, P1, or P2 findings remain.

- Information architecture: Home, Research, Publications, CV, and Contact are separate routes. The home page is concise and detailed content is moved to dedicated pages.
- Fonts and typography: Georgia display typography and system sans-serif text create a formal academic hierarchy with readable mobile wrapping.
- Spacing and layout rhythm: desktop and mobile pages use consistent shell widths, section spacing, rules, and card/list rhythm. No horizontal overflow was detected.
- Colors and visual tokens: the reference structure is reflected through a light gray identity header, restrained blue navigation, orange active accent, neutral borders, and white content surfaces.
- Image quality and asset fidelity: the user-provided portrait was converted to a 267 KB JPEG and displays without stretching or cropping defects.
- Copy and content: the website is English-first and integrates the supplied education, appointment, visiting research, patent, talk, honor, and publication details.
- Publications and PDFs: eight author-provided PDFs are exposed as same-origin downloads. DOI and code/data links remain available. Two arXiv links were added only after verification in repository README files.
- Interaction and responsiveness: active navigation states work, the mobile menu opens and closes, route changes scroll to the top, direct production URLs load, and browser console checks returned no warnings or errors.
- Deployment behavior: the production build generates both `index.html` and `404.html` so GitHub Pages can serve direct client-side routes.

## Patches made during QA

- Corrected the portrait sizing to prevent the HTML height attribute from stretching the image.
- Added per-route document titles.
- Added explicit PDF download attributes.
- Verified all five production routes and representative PDF responses.
- Confirmed mobile navigation closes after route selection.

## Follow-up polish

- P3: add a downloadable full CV only when a final public CV PDF is supplied.
- P3: add publication figures only when permission-safe figure files and captions are selected.

final result: passed
