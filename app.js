const inquirer = require('inquirer');

// object in the module.exports assignment will be reassigned to the generatePage variable
const generatePage = require('./src/page-template');

// will import the exported object from generate-site.js, allowing us to use generateSite.writeFile() and generateSite.copyFile().
const { writeFile, copyFile } = require('./utils/generate-site');

//add a parameter that will store the project data
const promptUser = () => {
  
  return inquirer.prompt([
    {
     //properties of the question object
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      // from the docs  we can deduce that this method is a function that returns a Boolean value
      validate: nameInput => {
       //If the condition evaluates to true, the validation has passed successfully
       if (nameInput) {
         return true;
         //if the condition evaluates to false, the user receives a message and is prompted with the same question until an answer is received
       } else {
         console.log('Please enter your name!');
         return false;
       }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your Github Username:',
      validate: githubUsername => {
       if (githubUsername) {
         return true;
       } else {
         console.log('Please enter your github username!');
         return false;
       }
      }
    },
    {
     //ask the user if they'd like to add an About section (only after they confirm yes)
     type: 'confirm',
     name: 'confirmAbout',
     message: 'Would you like to enter some information about yourself for an "About" section?',
     default: true
    },
    {
     type: 'input',
     name: 'about',
     message: 'Provide some information about yourself:',
     //method allows you to make conditional questions
     when: ({ confirmAbout }) => {
       if (confirmAbout) {
         return true;
       } else {
         return false;
       }
     }
    }
  ]);
 };

  
  // add a parameter that will store the project data
  const promptProject = portfolioData => {
   
  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
  portfolioData.projects = [];

 }
   console.log(`
   =================
   Add a New Project
   =================
   `);
     return inquirer.prompt([
       {  // text answer
         type: 'input',
         name: 'name',
         message: 'What is the name of your project?',
         validate: projectName => {
           if (projectName) {
             return true;
           } else {
             console.log('Please enter your project name!');
             return false;
           }
         }
       },
       {
         type: 'input',
         name: 'description',
         message: 'Provide a description of the project (Required)',
         validate: projectDescription => {
           if (projectDescription) {
             return true;
           } else {
             console.log('Please enter your project description!');
             return false;
           }
         }
       },
       { // checkbox answer
         type: 'checkbox',
         name: 'languages',
         message: 'What did you build this project with? (check all that apply)',
         choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'BootStrap', 'Node']
       },
       {
         type: 'input',
         name: 'link',
         message: 'Enter the Github link in your project. (Required)',
         validate: projectGithubLink => {
           if (projectGithubLink) {
             return true;
           }else {
             console.log('Please enter your projects Github Link!');
             return false;
           }
         }
       },
       { // boolean answer
         type: 'confirm',
         name: 'feature',
         message: 'Would you like to feature this project?',
         default: false
       },
       {
         type: 'confirm',
         name: 'confirmAddProject',
         message: 'Would you like to enter anouther project?',
         default: false
       }
     ])
        //add the project data to the projects array
       .then(projectData => {
        //we use the array method push() to place the projectData from inquirer into the new projects array we just created.
        portfolioData.projects.push(projectData);
        // condition that will call the promptProject(portfolioData) function when confirmAddProject evaluates to true
        if (projectData.confirmAddProject) {
          // We have to return the portfolioData in the else statement explicitly so that the object is returned ( critical step to retrieving the user's answer and building an HTML template.)
          return promptProject(portfolioData);
          //If the user decides not to add more projects, then the condition will evaluate to false and trigger
        } else{ 
          return portfolioData
        }
  });
}

   //Using Promises, we can chain the functions together using the then() method (promise chain!)
   promptUser()
   .then(promptProject)
   .then(portfolioData => {
    return generatePage(portfolioData);
   })
   .then(pageHTML => {
    return writeFile(pageHTML);
   })
    .then(writeFileResponse => {
      console.log(writeFileResponse);
      return copyFile();
    })
    .then(copyFileResponse => {
      console.log(copyFileResponse);
    })
    //only need to write one .catch() method to handle any error that may occur with any of the Promise-based functions
    .catch(err => {
      console.log(err);
    });




