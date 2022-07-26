// Packages needed for this app
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const createReadme = require('./utils/createReadme.js');

// Array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github'
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email'
    },
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title'
    },
    {
      type: 'input',
      message: 'Provide a brief description that explains your project to the user.',
      name: 'description'
    },
    {
      type: 'input',
      message: 'How will the user install your project and get the development environment running?',
      name: 'install'
    },
    {
      type: 'input',
      message: 'Provide instructions for the user to implement your project.',
      name: 'usage'
    },
    {
      type: 'list',
      message: 'What type of license should this project have?',
      choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'MIT_License', 'Boost_Software_License_1.0', 'None'],
      name: 'license'
    },
    {
      type: 'confirm',
      message: 'Would you like to give users the opportunity to contribute to this project?',
      name: 'contribute'
    },
    {
      type: 'input',
      message: 'Provide instructions for the user to run tests on this application.',
      name: 'test'
    }
];

// Function to write README file
function writeReadme(fileName, userInput) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), userInput);
}

// Function to start the app
function start() {
  inquirer.prompt(questions).then((responses) => {
    console.log('Your quality README file is being generated...');
    writeReadme('README.md', createReadme({ ...responses }));
  });
}

// Call function to start the app
start();
