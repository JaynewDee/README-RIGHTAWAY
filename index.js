// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

;


// TODO: Create an array of questions for user input
const prompts = ({
    title,
    description,
    contents
  }) =>
  `
# ${title}
### Description: 
> ${description}
### Table of Contents: 
-
-
-
- 
- 
`;

const proCess = process.argv;
console.log(proCess);

  const questions = [{
      type: 'input',
      name: 'title',
      message: "What is the the title of your project?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a succinct but detailed description of the project:',
    },
    {
      type: 'comfirm',
      name: 'contents',
      message: 'Do you want to include a Table of Contents section?',
      default: 'y/N',
    },
    // {
    //   type: 'input',
    //   name: 'installation',
    //   message: 'Explain the steps required to install your project:',
    // },
    // {
    //   type: 'input',
    //   name: 'usage',
    //   message: 'Describe how the application is to be used:',
    // },
    // {
    //   type: 'input',
    //   name: 'contribution',
    //   message: 'Tell your fellow developers how to contribute to the project:',
    // },
  ];
inquirer.prompt(questions).then(function transferTemplate(answers) {
    //  if (answers[2] == false){
    //       answers[2] = ''}
    const readmeTemplate = prompts(answers);
    fs.writeFile('readme.md', readmeTemplate, (err) =>
      err ? console.log(err) : console.log('Creation of README successful!'))
  }).catch((error) => 
    console.log(error));

//   Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();