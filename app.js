const inquirer = require('inquirer');

// inquirer's prompt method can receive an array of objects in its argument, known as the question object
inquirer 
   .prompt([
     {
      //properties of the question object
       type: 'input',
       name: 'name',
       message: 'What is your name?'
     }
   ])
   //The answer object is returned as a Promise (asynchronous function that will return the answer object in the then function.)
   .then(answers => console.log(answers));




/*
// access fs module
const fs = require('fs');

// object in the module.exports assignment will be reassigned to the generatePage variable
const generatePage = require('./src/page-template.js');



// extract arguments and store them into distinct variables using the array index (destructuring assignment)
const pageHTML = generatePage(name, github);

 //The first argument is the file name that will be created, or the output file. The second argument is the data that's being written: the HTML string template. 
fs.writeFile('index.html', generatePage(name, github), err => {

  // The third argument is the callback function that will handle any errors as well as the success message.
  if (err) throw err;


  console.log('Portfolio complete! check out index.html to see the output!');
});
*/


