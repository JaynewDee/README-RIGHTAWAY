const inquirer = require('inquirer');
const fs = require('fs');

const prompts = ({
    title,
    description,
    installation,
    usage,
    license,
    credits,
    email,
    github
  }) =>
  `
# ${title}
### Description: 
> ${description}
### Table of Contents: 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Questions](#contribution-questions)
- [My GitHub](#my-github-profile)
### Installation:
> ${installation}
### Usage:
> ${usage}
### License:
> ${license}
### Credits:
> ${credits}
### Contribution Questions
> Reach out to me at this email with any questions regarding the project:
>> ${email}
### My GitHub Profile:
> [GitHub](https://github.com/${github})
`;

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
    type: 'input',
    name: 'installation',
    message: 'Describe the steps required to install your application:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Explain how your application is meant to be used:'
  },
  {
    type: 'list',
    name: 'license',
    message: "Which type of license would you like to include?",
    choices: [
      "Creative Commons",
      "Eclipse",
      "GNU General Public License",
      "MIT",
      "Do Whatever You Want"
    ],
    filter(value) {
      switch (value) {
        case 'Creative Commons':
          value = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
          return value;
        case 'Eclipse':
          value = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
          return value;
        case 'GNU General Public License':
          value = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
          return value;
        case 'MIT':
          value = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
          return value;
        case 'Do Whatever You want':
          value = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
          return value;
      }
    }
  },
  {
    type: 'input',
    name: 'credits',
    message: "Give credit here to any developers or technologies that assisted in the creation of this project:"
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your email address:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Provide your github username:',
    filter(value) {
      newVal = value.replace(/\s/g,'');
      return newVal;
    }
  }
];
inquirer.prompt(questions)
  .then((answers) =>
    transferTemplate(answers))
  .catch((error) => console.log(error));


function transferTemplate(answersObj) {
  const readmeTemplate = prompts(answersObj);
  fs.writeFile('README.md', readmeTemplate, (err) => err ? console.log(err) : console.log('Creation of README successful!'))
}