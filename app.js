// access fs module
const fs = require('fs');

// object in the module.exports assignment will be reassigned to the generatePage variable
const generatePage = require('./src/page-template.js');

// skips over to second index on the (0 index) - third array item [holds the user command-line arguments]
const profileDataArgs = process.argv.slice(2, process.argv.length);

// extract arguments and store them into distinct variables using the array index (destructuring assignment)
const [name, github] = profileDataArgs;

 //The first argument is the file name that will be created, or the output file. The second argument is the data that's being written: the HTML string template. 
fs.writeFile('index.html', generatePage(name, github), err => {

  // The third argument is the callback function that will handle any errors as well as the success message.
  if (err) throw err;


  console.log('Portfolio complete! check out index.html to see the output!');
});



