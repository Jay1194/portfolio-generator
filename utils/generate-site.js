// access fs module
const fs = require('fs');

// functionality for creating the HTML file handled as a Promise
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }

        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
            ok: true,
            message: 'File created'
          });
       });
    });
;}

// copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', err => {

            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Stylesheet copied'
            });
        });
    });
};

// export functions from generate-site.js and import it into app.js to include in the Promise chain at the bottom!
module.exports = { writeFile, copyFile };









/*
// If we were to execute it, it would look like the following: (demo HTML code) It's a good way to test the .catch() functionality, though!
const sampleHtml = '<h1>This will be written to the file!</h1>';

writeFile(sampleHtml)
  .then(successfulResponse => {
    // this will run when we use `resolve()`
    console.log(successfulResponse);
  })
  .catch(errorResponse => {
    // this will run when we use `reject()`
    console.log(errorResponse);
  });

  */