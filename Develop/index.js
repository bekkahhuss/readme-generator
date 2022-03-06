// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

let userData = [
    {question: "What is the project title?"},
    {question: "How would you describe the project?"}
];

function readmeSetupQ() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'projectTitle',
            message: userData[0].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter a project title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectSubTitle',
            message: userData[1].question,
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
    .then(function(answer) {
        writeFile('### ' + answer.projectTitle);
        console.log(answer.projectTitle);
    })
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
readmeSetupQ();