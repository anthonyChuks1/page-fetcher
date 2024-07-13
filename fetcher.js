const fs = require('fs');
const needle = require('needle');

//Get the data from console
const argument = [].concat(process.argv.splice(2));

//Assign url and path from console
const URLLink =  {
  url : argument[0],
  path: argument[1],
}


/**
 * Writes content to a file.
 * @param {string} path - The path of the file to write to.
 * @param {string} content - The content to write to the file.
 */
const writetoFile = (path, content) => {
  fs.writeFile(path, content, err => {
    if (err) {
      console.log(`Cannot get data from the URL or invalid file path.`);
    }
    else {
      console.log(`Downloaded and saved ${content.length} to ${path}`);
    }
  })
};

/**Now get the file */
needle.get(URLLink.url, (error, response, body) => {
  writetoFile(URLLink.path, body);
});