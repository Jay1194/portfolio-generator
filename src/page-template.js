
// receive those exported functions, use functions from one module inside another (updated it to accept one parameter: the big object of portfolio data) parameter has been renamed templateData to reflect that it now accepts the promise object returned by inquirer.
   module.exports = templateData => {
    //see that the data makes it to the function when we run it
    console.log(templateData);

    // destructuring projects and about data from templateData based on their property key names (header is used to be more organized then we take data keys from remaining data)
    const { projects, about, ...header } = templateData;
   
    // create about section  (exicuting a function from a template literal)
    const generateAbout = aboutText => {
      // return empty string if user dosin't want about section
      if (!aboutText) {
        return '';
      
    } // Interploate data only if it exists
    return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
        <p>${aboutText}</p>
      </section>
        `;
      };
  
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Jayden's Portfolio</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
            <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
              header.github
            }">GitHub</a>
          </nav>
        </div>
      </header>

      <main class="container my-5">
        ${generateAbout(about)}
      </main>

      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
  };
  
   