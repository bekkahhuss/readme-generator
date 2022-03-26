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


  ## Badges 

  ## Features 


  ## How to contribute 
  

  ## Tests 




  `;
};

module.exports = { generateTitle };

