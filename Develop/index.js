// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { generateTitle } = require('./utils/generateMarkdown');
const { writeFile } = require('./utils/generateReadme');
let userData = [
    {question: "What is the project title?"},
    {question: "How would you describe the project?"}
];

let names = [];

const readmeSetupQ = names => {
    if (!names) {
        names = [];
    }
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name_0',
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
            name: 'name_1',
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
    .then(readmeData_x => {
        names.push(readmeData_x);
        if (readmeData_x.confirmAddProject) {
            return readmeSetupQ(names);
        } else {
            return names;
        }
    });
};

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
readmeSetupQ()
    .then (readmeData => {
        console.log(readmeData);
        writeFile(generateTitle(readmeData));
    });






    