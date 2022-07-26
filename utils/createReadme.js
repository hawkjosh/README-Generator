// Function to create license badge based on user input
function createBadge(licenseType) {
  if (licenseType !== 'None') {
    return `![GitHub License](https://img.shields.io/badge/license-${licenseType}-success.svg)`;
  } else {
      return ''
    };
}

// Function to render display results of license section based on user input
function licenseSection(licenseType) {
  if (licenseType !== 'None') {
    return `This project is licensed under ${licenseType}.`;
  } else {
      return 'This project is not licensed.'
    };
}

// Function to render display results of contributions section based on user input
function contributeSection(contribute) {
  if (contribute === true) {
    return `Please contact me for additional information about contributing to this project. You can find my email address below in the "Questions" section.`
  } else {
      return `This project is not open to contributions at this time.`
    };
}

// TODO: Create a function to generate markdown for README
function createReadme(input) {
  return `# ${input.title}
  ${createBadge(input.license)}
  
  ## Description
  
  ${input.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install the dependencies required to run the app, use the following command in the terminal:
  
  \`\`\`
  ${input.install}
  \`\`\`
  
  ## Usage
  
  ${input.usage}

  ## License
  
  ${licenseSection(input.license)}

  ## Contributing

  ${contributeSection(input.contribute)}
    
  ## Tests
  
  To run tests on the app, use the following command in the terminal:
  
  \`\`\`
  ${input.test}
  \`\`\`
  
  ## Questions
  
  Thank you for checking out my project. You can contact me directly at ${input.email} with any questions or comments regarding this application. You can also find other projects I have created at [${input.github}](https://github.com/${input.github}/).`;
}

module.exports = createReadme;