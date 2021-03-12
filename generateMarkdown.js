// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project: ${data.title}

  ## Description:

  ${data.description}

  ## Installation:

  Installation is as follows

  ${data.install}

  ## Use:
  
  ${data.use}

  ## License:

  ${data.license}

  ## Contact:

  Name: ${data.name}
  Phone: ${data.phone}
  Email: ${data.email}
  Profile: ${data.link}
  
`;
}

module.exports = generateMarkdown;
