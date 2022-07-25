// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description

  ${data.description}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Additional Information

  Thank you for checking out my project. You can contact me directly at ${data.email} with any questions or comments regarding this application. You can also find other projects I have created at ${data.github}.
`;
}

module.exports = generateMarkdown;