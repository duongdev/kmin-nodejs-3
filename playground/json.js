const fs = require("fs");

const book = {
  title: "Toi thay hoa vang tren co xanh",
  author: "Nguyen Nhat Anh",
};

// Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book);
console.log(bookJSON, typeof bookJSON);

// Covert JSON string into object
const bookObject = JSON.parse(bookJSON);
console.log(bookObject, typeof bookObject);
console.log(book);

console.log(
  JSON.stringify(5),
  typeof JSON.stringify(5), // string
  JSON.stringify(5) === 5, // false
  JSON.parse(JSON.stringify(5)) === 5 // true
);

fs.writeFileSync("book.json", JSON.stringify(book));

const bookJsonContent = fs.readFileSync("book.json", { encoding: "utf-8" });
console.log(bookJsonContent); // type: string
const bookJsonObject = JSON.parse(bookJsonContent); // type: object
console.log(bookJsonObject.title);
