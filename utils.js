const fs = require("fs");

function checkExistsAndCreate(dirName) {
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
  }
}

function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted file "${filePath}"`);
  } else {
    console.log(`File "${filePath}" doesn't exist`);
  }

  // If the folder is empty, delete the folder too. / \ / .
  const dirPath = filePath.replace(/\/.*?$/, "");
  if (fs.readdirSync(dirPath).length === 0) {
    fs.rmdirSync(dirPath);
    console.log(`"${dirPath}" is empty. Deleted.`);
  }
}

module.exports = {
  // checkExistsAndCreate: checkExistsAndCreate,
  checkExistsAndCreate,
  // deleteFile: deleteFile,
  deleteFile,
};
