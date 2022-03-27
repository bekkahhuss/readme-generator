// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { generateTitle } = require('./utils/generateMarkdown');
const { writeFile } = require('./utils/generateReadme');
let userData = [
    {question: "What is the project title?"},
    {question: "How would you describe the project?"},
    {question: "What problem does this project solve?"},
    {question: "How does it work?"},
    {question: "Provide a project download link."},
    {question: "Provide installation instructions."},
    {question: "Provide instructions to use this project."},
    {question: "What type of License do you want to use?"},
    {question: "Who contributed to this project?"},
    {question: "Provide a link to their github."},
    {question: "Provide a link to your Github page."},
    {question: "Provide an email address for users to ask questions."}
];

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
                    console.log('You must enter a response!')
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
                    console.log('You must enter a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name_2',
            message: userData[2].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('You must enter a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name_3',
            message: userData[3].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('You must enter a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name_4',
            message: userData[4].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('You must enter a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name_5',
            message: userData[5].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('You must enter a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name_6',
            message: userData[6].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('You must enter a response!')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'name_7',
            message: userData[7].question,
            choices: ['MIT', 'GNU', 'Apache', 'None'],
            filter(val) {
                return val.toLowerCase();
            },
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('You must enter a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name_8',
            message: userData[8].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('You must enter a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name_9',
            message: userData[9].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('You must enter a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name_10',
            message: userData[10].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('You must enter a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name_11',
            message: userData[11].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('You must enter a response!')
                    return false;
                }
            }
        },       

    ])
    .then(answers => {
        names.push(answers);
        if (answers.confirmAddProject) {
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
        const data = [
            readmeData[0].name_0,
            readmeData[0].name_1,
            readmeData[0].name_2,
            readmeData[0].name_3,
            readmeData[0].name_4,
            readmeData[0].name_5,
            readmeData[0].name_6,
            readmeData[0].name_7,
            readmeData[0].name_8,
            readmeData[0].name_9,
            readmeData[0].name_10,
            readmeData[0].name_11
            
        ];
        writeFile(generateTitle(data));
    });






    