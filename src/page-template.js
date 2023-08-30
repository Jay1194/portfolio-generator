
// function that receives the command-line arguments and inserts them in a HTML template literal. (Using template literals to wrap the string in backticks and interpolate the variables with the ${<variable>} syntax.)
const generatePage = (name, github) => {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Jayden's Portfolio</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
      </body>
      </html>
     `;
   };

   // receive those exported functions, use functions from one module inside another
   module.exports = generatePage;