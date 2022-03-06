// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = userData => {
    if (!userData) {
        userData = [];
      }
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'project-title',
            message: 'What is your project title? (Required)',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter a project title!')
                    return false;
                }
            }
        }
    ])
    .then(userResponse => {
        userData.push(userResponse);
        if (userResponse.confirmAddProject) {
          return promptUser(userData);
        } else {
          console.log(userData)
          return userData;
        }
      });
}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
promptUser()
    .then(userData => {
        return console.log(userData[0]);
    });

