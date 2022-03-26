// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { generateTitle } = require('./utils/generateMarkdown');
const { writeFile } = require('./utils/generateReadme');
let userData = [
    {question: "What is the project title?"},
    {question: "How would you describe the project?"},
    {question: "What was your motivation?"},
    {question: "Why did you build this project?"},
    {question: "What problem does it solve?"},
    {question: "What did you learn?"},
    {question: "Provide installation instructions in three steps. What is step 1?"},
    {question: "What is step 2?"},
    {question: "What is step 3?"},
    {question: "How do you use this application?"},
    {question: "Please provide a usage example"}
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
        },
        {
            type: 'input',
            name: 'name_2',
            message: userData[2].question,
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
            name: 'name_3',
            message: userData[3].question,
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
            name: 'name_4',
            message: userData[4].question,
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
            name: 'name_5',
            message: userData[5].question,
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
            name: 'name_6',
            message: userData[6].question,
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
            name: 'name_7',
            message: userData[7].question,
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
            name: 'name_8',
            message: userData[8].question,
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
            name: 'name_9',
            message: userData[9].question,
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
            name: 'name_10',
            message: userData[10].question,
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
        const foo = [
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
            readmeData[0].name_10
            
        ];
        console.log(foo);
        writeFile(generateTitle(foo));
    });






    