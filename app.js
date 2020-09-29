// Node modules
const fs = require("fs");
const chalk = require("chalk");
const utils = require("./utils");

console.log(chalk.green("Hello Kmin"), chalk.yellowBright.bgBlue("2020"));

function writeContent(outputDir, fileName, content) {
  const filePath = `${outputDir}/${fileName}`;

  utils.checkExistsAndCreate(outputDir);

  fs.writeFileSync(filePath, content);

  console.log(`Written "${content}" to "${filePath}"`);
}

// writeContent("output", "text.txt", "this is a text");
// utils.deleteFile("output/text.txt");
