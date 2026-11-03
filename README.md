# DOM Time

> Welcome to UNA — a simple University of North Alabama sign-in and campus information front-end.

**Author:** Jacobe Johnson  
**Course/project:** dev|bravo  
**Version:** 0.3  
**Date:** 2026-11-03

## User story

- **As a** University of North Alabama student,
- **I want** to open the UNA welcome page, use the sign-in demonstration, and browse a small campus information board,
- **So that** I can see how a future UNA-focused app could organize student information in one place.

## Project narrative

DOM Time keeps the original UNA welcome page and sign-in flow. The dev|bravo additions provide a sample campus board with hardcoded cards, search/filter/sort controls, a visitor account area, a form for adding a sample resource, and a Bootstrap toast status message. The current version is a front-end prototype; the form only adds a card during the current page session and sign-in is not real authentication. Future versions could connect to real data and secure account services.

## Pages and features

- `index.html` — original Welcome to UNA home page, original lion image path, navigation, sample resource cards, search/filter/sort controls, visitor account area, add-resource form, and Bootstrap toast.
- `pages/login.html` — original UNA sign-in page and form hooks (`#signin-form`, `#hello-box`, `#password`, `#user-greeting`).
- `pages/lions.html` — sign-in success page with a sign-out control.
- `assets/css/styles.css` — shared external styling and required CSS library imports.
- `assets/js/app.js` — jQuery event handlers for the sample controls, toast, sign-in demonstration, and sign-out.

## Simple test

- [ ] **TEST:** Can a visitor open the home page and find the UNA sign-in page?
- [ ] **PASS:** The login link opens `pages/login.html`, and the form accepts the original demo credentials: username `Jacobe` and password `Johnson`.
- [ ] **FAIL:** The login link is broken or the form cannot proceed with non-empty values.
- [ ] **TEST:** Can a visitor search or filter the campus board and add a sample resource?
- [ ] **PASS:** Matching cards remain visible and a submitted resource appears on the board with a toast message.
- [ ] **FAIL:** The controls do not update the board or the form does not show the submitted item.

## Technology stack

HTML5 · CSS3 · JavaScript · jQuery 3.7.1 · Bootstrap 5.3.8 · Bootstrap Icons 1.13.1 · Normalize.css 8.0.1 · Google Fonts · Git · GitHub · GitHub Pages.

## Project structure

```text
DOM-Time/
├── index.html
├── pages/
│   ├── login.html
│   └── lions.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── README.md
└── .gitignore
```

**Original image asset:** `index.html` retains the original image reference at `pages/img/WH-7-2025-Lion_Abuto_CaitlinG_7.24.25-7A-400x600.jpg`. Keep that image file in the same location in the GitHub repository. It was not included among the source files available for this update.

## Validation and accessibility

- [x] External CSS and JavaScript files are used.
- [x] Form controls have labels and required fields.
- [x] Main content has a skip link and status updates use live regions.
- [x] External GitHub links open in a new tab with `rel="noopener noreferrer"`.
- [ ] Run the HTML files through the W3C HTML Validator.
- [ ] Test keyboard navigation and color contrast.
- [ ] Run Lighthouse and test the deployed GitHub Pages site.

## Attribution

The original UNA welcome/sign-in identity and page flow were retained from the supplied project code. ChatGPT assistance was used to repair and organize the HTML, CSS, and JavaScript; add the dev|bravo interface requirements; and update this README. Bootstrap, Bootstrap Icons, jQuery, Normalize.css, and Google Fonts are loaded from their public CDNs.

## GitHub planning checklist

- [ ] Create a GitHub Issue to track the remaining validation and deployment work.
- [ ] Add a Wiki page with a simple wireframe and rubric checklist.
- [ ] Add the deployed GitHub Pages URL to the repository description or README after deployment.
- [ ] Submit the GitHub repository URL, not the Pages URL.

## Important note

This project is a front-end demonstration only. The sign-in checks the original hardcoded demo credentials (`Jacobe` / `Johnson`) and stores the demo username in `sessionStorage`; it is not secure authentication and must never be used for real accounts. Resource submissions are temporary and are not stored on a server.
