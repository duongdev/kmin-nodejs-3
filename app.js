// Node modules
const fs = require("fs");
const utils = require("./utils");

function writeContent(outputDir, fileName, content) {
  const filePath = `${outputDir}/${fileName}`;

  utils.checkExistsAndCreate(outputDir);

  fs.writeFileSync(filePath, content);

  console.log(`Written "${content}" to "${filePath}"`);
}

writeContent("output", "text.txt", "this is a text");
utils.deleteFile("output/text.txt");
