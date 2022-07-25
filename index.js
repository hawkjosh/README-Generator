// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

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
      type: 'rawlist',
      message: 'What type of license should this project have?',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'None'],
      name: 'license'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
