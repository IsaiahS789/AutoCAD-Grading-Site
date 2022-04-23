# Project Overview

This site is intended to be a replacement for the AutoCAD email grading system which is currently in place for CBU's AutoCAD-related classes.

## Setup

We currently have an assortment of prototypes for the individual pages for the AutoCAD grading site.
The HTML, CSS, and JavaScript files for this site are organized into their own folders.
For now, we run the prototype for the site through the LiveServer extension in Visual Studio Code.
To run live server, simply right click an HTML document with the extension installed and it will open in a browser window.
This is how we currently debug and test the page flow.

Since we didn't have access to a server, we decided to create a mock-server which accepts files in the .dxf format and sends back the string location 
of a jpeg to be displayed on the results page (for demonstration purposes).
In order to get the image that the user submits to display on the results page, you will have to run the `start.js` file in the `/node-stuff` folder which should
spin-up the mock server we used.

## Disclaimer

We do not currently know how the files submitted to the site (in .dwg format) are taken and turned into .png files to be displayed on the site.
As we understand it, LabView is used in some capacity for the current AutoCAD email grading solution, though we are not sure exactly how that works.

We have simply setup a prototype/baseline for the site but have not figured out the moving parts behind the functionality of the underlying systems.
(We're leaving that part up to our successors)

We recommend that you reach out to the client for further details and wish you the best of luck.
