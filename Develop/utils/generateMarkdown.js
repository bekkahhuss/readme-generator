const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "mit") {
    const licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    return licenseBadge;

  } else if (license == "apache") {
    const licenseBadge= "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](http://www.apache.org/licenses/)"
    return licenseBadge;

  } else if (license == "gnu") {
    const licenseBadge= "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    return licenseBadge;

  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "mit") {
    const licenseLink = "https://opensource.org/licenses/MIT"
    return licenseLink;

  } else if (license == "apache") {
    const licenseLink = "http://www.apache.org/licenses/"
    return licenseLink;

  } else if (license == "gnu") {
    const licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html/"
    return licenseLink;

  } else {
    return '';
  }
}

function renderLicenseText(license) {
  if (license == "mit") {
    const licenseText = "This project is secured by an MIT License";
    return licenseText;

  } else if (license == "apache") {
    const licenseText = "This project is secured by an Apache License"
    return licenseText;

  } else if (license == "gnu") {
    const licenseText = "This project is secured by a GNU v3 License"
    return licenseText;

  } else {
    return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return(`${renderLicenseBadge(license)} <br> <a href="${renderLicenseLink(license)}">${renderLicenseText(license)}</a>`);
}


// TODO: Create a function to generate markdown for README
const generateTitle = titleText => {
  if (!titleText) {
    return '';
  }
  
  const license =renderLicenseSection(titleText[7]);
  return `
  # ${titleText[0]}
  
  ${license}

  ## Description 
  ${titleText[1]}
  
  - ${titleText[2]}
  - ${titleText[3]}


  ## Table of Contents 
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## Installation 
  - ${titleText[4]}
  - ${titleText[5]} 

  ## Usage 
  - ${titleText[6]}
 
  ## Contributing
  - ${titleText[8]} [Github Link](${titleText[9]})


  ## Questions 
  - To Checkout more of my projects visit my Github page ${titleText[10]}
  - If you have any questions please send me an email at ${titleText[11]} 




  `;
};

module.exports = { generateTitle };

