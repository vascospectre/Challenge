# GoContact

# CHALLENGE:
Create automated tests for the following scenarios using the FNAC webpage as e-commerce site.

1 - Search for George in the Fnac page and verify that the "Fascism and Democracy" book appears in the results and that the book as "world" in the description
2 - Search for 1984 book and verify is characteristics like is author, the ISBN, the number of pages and that the book dimensions are "13 x 21" cm
3 - Search for 1984 book and verify that the first comment in the website is from "22/08/2018" and there isn't no classifications with one star
4 - Search for 1984 book and verify the author biography, checkoing that the book "Animal Farm" is from George Well 
5 - Search for Fascism and Democracy book and add it to the cart and verify it's price
6 - Search for a FNAC shop in Lisbon, choose Almada store and verify the store information


# Framework
The framework of testing the user interface is the webdriverio (http://www.webdriver.io)

# Language of Tests
The language for the description of the tests uses Gherkin syntax

# Query language for locating Element at the DOM
XPath

# Browsers used
Chrome

# Folder structure
Challenge(Root directory)
├── Features (Location for feature Files)
│     ├── pageActions (Methods for actions in mapped objects at each page)
│     ├── pageObjects (Different classes with all mapped objects at each page)
│     ├── step-definitions (Tests for the different features)
│     └── pageValidations (Methods for test assertions at each page)
├── allure-results (Location of the files generated by the tests execution)
├── allure_report (Location of the report of the execution of the tests) 
├── package.json (file with scripts npm to run tests and project dependencies)
├── README.md (file with the Exercise notes and installation guide)
└── wdio.config.js (file with configurations of webdriver io to run tests locally)

## Software Depedencies
* NodeJs >= 12.16.1 - (https://nodejs.org/en/download/)
* Chrome 96.0.4664.93 - (https://www.google.com/chrome/)

## Help pages that can be useful
Java - https://www.java.com/en/
Reporting - Allure - https://docs.qameta.io/allure/#_reporting


## How to install dependencies:
npm install

## How to run the tests:
npm run test

## How to generate Allure reports:
npm run allure:generate \n
OR \n
allure generate 

## How to view Allure reports:
npm run allure:open \n
OR \n
allure open