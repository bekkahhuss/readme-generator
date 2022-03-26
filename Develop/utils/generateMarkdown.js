const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateTitle = titleText => {
  if (!titleText) {
    return '';
  }
  console.log(titleText[0] + ', ' + titleText[1]);
  return `
  # ${titleText[0]}
  
  ## Description 
  ${titleText[1]}
  
  - ${titleText[2]}
  - ${titleText[3]}
  - ${titleText[4]}
  - ${titleText[5]}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation 
  - ${titleText[6]}
  - ${titleText[7]}
  - ${titleText[8]} 

  ## Usage 
  
  - ${titleText[9]}
  - ${titleText[10]}

  ## Credits 

  - Collaborator - GitHub Link 
  -              - 
  -              -
  -              - 

  ## License

  MIT License

  Copyright (c) [year] [fullname]

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


  ## Badges 

  ## Features 


  ## How to contribute 
  

  ## Tests 




  `;
};

module.exports = { generateTitle };

