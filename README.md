# SVG Logo Generator

A Command line application that allows user to create a simple svg logo.

![Static Badge](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#testing)
  - [License](#license)
  - [Questions](#questions)


## Description

This command line application is created to allow users to generate an svg logo based on criteria that matches their prompted selections to include: the shape, shape color, text, and text color of their logo. Typically, web developers would have to find another source for logo creation such as hiring a graphic web designer to fulfill their clients needs. This cli allows web developers to bypass this step and simply generate a logo for their clients on their own and hopefully save some of their hard earned money.



## Installation

- To begin, a user will need VS Code for code editing and to be able to install other necessary software. https://code.visualstudio.com/ .
- Secondly, the user will need to clone this repository in their computers command line by clinking on the green code button up above in this GitHub repo and choosing how to clone this repository. Then a simple copy and paste to your command line after typing git clone will copy this repo allowing the user to open in it VS Code. Type in 'code .' to automatically open the repo in VS Code.
- Once in VS Code, user can use the integrated terminal to install Node.js given they already have homebrew already installed as well. If not, feel free to head over to their webpage to download on to your lcoal computer. https://brew.sh/ .
- User can then use the terminal to install Node.js or directly install the application through their webpage. at https://nodejs.org/en .
- After Node.js is installed, the user will need to install the required dependencies. This includes npm inquirer(type: npm i inquirer in integrated terminal via VS Code) and jest.js (type in npm i jest for the most recent version of the app). Then user will need to type in npm init -y to install package-json and initialize the app.
- Finally user will type node index.js to run the command line app(svg-logo-maker) to enerate their own logo.


## Technologies Used

- Node.js
- node package manager(npm)
- npm inquirer
- jest.js (for tests)

## Contributing

This repository is open for developers to contribute. Please feel free to create your own branch in your local terminal and push you work and wait for approval of merging.

## Testing

This command line app requires three tests to run in the shapes.test.js file to make sure that the correct shape is being generated.
Simply type: npm run test to initiate a response from jest that the determines the correct shape is indeed being generated.

## License

This project is licensed under https://opensource.org/licenses/MIT 


## Questions
Feel free to check out more of my work on GitHub (https://github.com/SaikouB),
or to contact me with any questions about this project, send me an email at bsaikou1990@gmail.com