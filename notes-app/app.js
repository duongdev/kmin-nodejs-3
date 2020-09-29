const yargs = require("yargs");
const fs = require("fs");

yargs.version("1.1.0");

const fileName = "notes.json";

// notes.json

// Loads existing notes from notes.json
const loadNotes = function () {
  try {
    const notesJson = fs.readFileSync(fileName, { encoding: "utf-8" });

    const notesArr = JSON.parse(notesJson);
    return notesArr;
  } catch (error) {
    return [];
  }
};

// Writes note list to notes.json
const saveNotes = function (notes) {
  const notesJson = JSON.stringify(notes);

  fs.writeFileSync(fileName, notesJson);
};

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (args) {
    /** destructuring
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
     * Same to:
     * const title = args.title;
     * const body = args.body;
     */
    const { title, body } = args;

    /** Same to:
     * const note = { title: title, body: body }
     */
    const note = { title, body };

    // Loads existing notes from notes.json
    const notes = loadNotes();

    // Adds the new note to the existing list.
    // numbers = [1,2]
    // numbers.push(3) => [1,2,3]
    notes.push(note);

    // Saves the new list to notes.json
    saveNotes(notes);
  },
}).argv;
