# Govt. UHS Bhaisahi school website

A responsive static website for Government Upgraded Higher Secondary School, Bhaisahi, Bagaha-I, West Champaran, Bihar. Built with HTML, CSS, and a small vanilla JavaScript file. No framework, build service, paid hosting, or backend is required.

## Contents

- School profile and administrative details for academic year 2026–27
- Class 9–12 enrolment (123 + 157 + 114 + 97 = 491)
- Principal Md. Nasir Jamal and a 15-person teaching directory
- Supplied 2026 Matric and Intermediate achievement posters
- Six school photographs with filters and an accessible keyboard-operated viewer
- School email and map link

Mobile numbers and teacher identifiers are intentionally excluded at the owner's request. The original administrative screenshots are not published. Teacher categories and names follow the supplied directory. Result scores are described as scores featured in the supplied posters, not independently verified results. No invented admission dates, office hours, notices, staff quotations, or school facilities are included.

## Preview

Open `index.html` in a browser, or serve this folder with a local static server. All photos are provided as compressed WebP files. Fonts use Google Fonts with local fallback families.

## Cloudflare Pages

In Cloudflare, create a Pages project and connect this GitHub repository.

- Production branch: `main`
- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/` (repository root)

Cloudflare Pages will publish every pushed commit on `main`. `_headers` supplies basic security headers. No credentials or environment variables are needed.

## Editing

Edit the content in `index.html`, the appearance in `styles.css`, and gallery/navigation behavior in `script.js`. Replace images in `assets/` using the same filenames, or update their HTML paths. The asset preparation script is a local maintenance helper requiring Pillow; it is not needed to serve or deploy the website.
