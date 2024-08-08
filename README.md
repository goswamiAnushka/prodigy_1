Scroll-Based Navbar Color Change
This project implements a dynamic navbar that changes its background color when the user scrolls down the page. The purpose of this enhancement is to provide a more engaging and visually appealing navigation experience.

Task Overview
The task involved adding a scroll-based background color change to the navbar. As the user scrolls down the page, the navbar’s background color changes to improve readability and provide a smooth user experience.

How I Did It
JavaScript:

A scroll event listener was added to the window object to monitor the user's scrolling activity.
When the scroll position exceeds a set threshold (e.g., 100 pixels), a new class is applied to the navbar, triggering a change in the background color.
The class is removed when the user scrolls back to the top, restoring the original background color.
CSS:

The .scrolled class was defined to change the navbar’s background color and adjust the link colors if necessary.
A smooth transition effect was added to enhance the visual appeal when the background color changes.
Technologies Used
HTML5
CSS3
JavaScript (ES6)
How to Use
Clone the repository to your local machine.
Open the index.html file in your preferred browser.
Scroll down the page to see the navbar's background color change.
Acknowledgments
This enhancement improves user experience by providing a responsive and visually appealing navbar that adapts to scrolling behavior.