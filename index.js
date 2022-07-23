const inquirer = require('inquirer');

inquirer
  .prompt([
    // Pass the questions in...
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'XXXXX',  // Type of prompt (written as a string) i.e. → input, number, confirm, list, rawlist, expand, checkbox, password, editor
      message: 'XXXXX',  // The prompt to be displayed (written as a string)
      name: 'XXXXX',  // The name to use when storing the answer (written as a string)
    },
    {
      type: 'XXXXX',  // Type of prompt (written as a string) i.e. → input, number, confirm, list, rawlist, expand, checkbox, password, editor
      message: 'XXXXX',  // The prompt to be displayed (written as a string)
      name: 'XXXXX',  // The name to use when storing the answer (written as a string)
    },
    {
      type: 'XXXXX',  // Type of prompt (written as a string) i.e. → input, number, confirm, list, rawlist, expand, checkbox, password, editor
      message: 'XXXXX',  // The prompt to be displayed (written as a string)
      name: 'XXXXX',  // The name to use when storing the answer (written as a string)
    },
    {
      type: 'XXXXX',  // Type of prompt (written as a string) i.e. → input, number, confirm, list, rawlist, expand, checkbox, password, editor
      message: 'XXXXX',  // The prompt to be displayed (written as a string)
      name: 'XXXXX',  // The name to use when storing the answer (written as a string)
    },
    {
      type: 'XXXXX',  // Type of prompt (written as a string) i.e. → input, number, confirm, list, rawlist, expand, checkbox, password, editor
      message: 'XXXXX',  // The prompt to be displayed (written as a string)
      name: 'XXXXX',  // The name to use when storing the answer (written as a string)
    },
    {
      type: 'XXXXX',  // Type of prompt (written as a string) i.e. → input, number, confirm, list, rawlist, expand, checkbox, password, editor
      message: 'XXXXX',  // The prompt to be displayed (written as a string)
      name: 'XXXXX',  // The name to use when storing the answer (written as a string)
    },
    {
      type: 'XXXXX',  // Type of prompt (written as a string) i.e. → input, number, confirm, list, rawlist, expand, checkbox, password, editor
      message: 'XXXXX',  // The prompt to be displayed (written as a string)
      name: 'XXXXX',  // The name to use when storing the answer (written as a string)
    },
  ])
  .then((answers) => {
    // Use user feedback for...
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });