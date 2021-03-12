const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")


const path = require('path')



const questions = [
    {
        type: "input",
        name: "title",
        message: "Name the title of your project",
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project.",
    },
    {
        type: "input",
        name: "install",
        message: "What's the installation process?",
        default: "npm i",
    },
    {
        type: "input",
        name: "use",
        message: "What is the use purpose of your application?",
    },
    {
        type: "list",
        name: "license",
        message: "Are there licenses that your project should have?",
        choices: ["NPM", "inquirer 6.3.1", "Node.js", "None"],
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "name",
        message: "What's your name?",
    },
    {
        type: "input",
        name: "link",
        message: "What's the link to your GitHub profile?"
    },
    {
        type: "imput",
        name: "phone",
        message: "What is your contact number?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


// function call to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}

init();
