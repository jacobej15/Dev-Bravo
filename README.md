# Dev-Bravo
Author: Jacobe Johnson
Course/Project: dev|bravo
Version: 0.2
Date: September 21, 2026
## Project Overview
UNA Sign In is a small, front-end website themed around the University
of North Alabama (UNA). Visitors begin on a welcome page, open the
student sign-in page, and enter a username and password. When the
entered credentials match the values in the JavaScript code, the page
displays a success message and redirects the visitor to a
welcome/success page.

The project demonstrates basic HTML page structure, CSS styling,
JavaScript DOM selection, form submission handling, conditional logic,
and delayed page navigation.
## Features
- UNA-themed welcome page with a lion image.
- Student sign-in form with username and password fields.
- JavaScript validation against the credentials currently written in
  the script.
- A success message followed by a short delay before redirecting to
  lions.html.
- An error message when the credentials do not match.
- Shared styling with a black, purple, and yellow color scheme.
- Links to return home and visit the author's GitHub profile and
  project repository.
## Technologies Used
- HTML5 --- builds the welcome, login, and success pages.
- CSS3 --- controls layout, colors, spacing, form styling, and
  hover effects.
- JavaScript --- handles the form submission, checks the entered
  values, updates the page, and redirects after a successful sign-in.
## Project Pages
  File                                                         Purpose
  index.html                                                 Welcome page for the University of
North Alabama.

  login.html                                                 Student sign-in form.

  lions.html                                                 Displays the successful sign-in
message and a link back to the home
page.

  ../scripts/app.js                                          Handles the sign-in form behavior.

  ../asserts/styles.css                                      Provides the shared website
styling.
img/WH-7-2025-Lion_Abuto_CaitlinG_7.24.25-7A-400x600.jpg   Lion image displayed on the welcome
page.
Note: The paths above follow the paths referenced in the supplied
HTML. Keep the folders and filenames in the locations expected by
those relative paths. The stylesheet folder is spelled asserts in
the supplied links; if your actual folder is named assets, update
the HTML paths to match.

## How the Sign-In Works
1. The JavaScript looks for the form with the ID signin-form.
2. If that form exists on the current page, it adds a submit event
   listener.
3. When the form is submitted, event.preventDefault() stops the
   browser from performing the form's normal submission.
4. JavaScript reads the values from the username field (hello-box)
   and password field (password).
5. The code compares those values with the credentials written in the
   JavaScript.
6. If both values match, the page displays a success message and
   redirects to lions.html after 1.5 seconds.
7. If either value does not match, the page displays an
   incorrect-credentials message.
## Running the Project
1. Download or clone the project repository.
2. Make sure the HTML files, JavaScript file, stylesheet, and image are
   in the folder locations expected by the relative paths in the HTML.
3. Open index.html in a web browser.
4. Select Click for Login Page.
5. Enter the username and password configured in app.js.
6. Submit the form to test the success and error messages.
You can also open the project folder in Visual Studio Code and use the
Live Server extension to preview the pages locally.
## Important Security Note
This project uses a simple demonstration-only credential check in
browser-side JavaScript. Anyone can inspect the page's source code or
JavaScript file and discover the credentials. This is not secure
authentication and should not be used to protect real accounts or
private information.

A real sign-in system should verify credentials on a server, store
password hashes securely, and use an appropriate authentication and
session-management process. Do not use real passwords in this
demonstration project.
## Possible Future Improvements
- Add required-field validation and clearer feedback for empty inputs.
- Improve the layout for smaller screens.
- Add accessible status messaging for sign-in results.
- Move authentication to a secure server-side system before using real
  accounts.
- Review and standardize folder names such as asserts or assets.
