const fs = require("fs");

const fileName = "notes.json";

// Loads existing notes from notes.json
// Arrow function
const loadNotes = () => {
  try {
    const notesJson = fs.readFileSync(fileName, { encoding: "utf-8" });

    const notesArr = JSON.parse(notesJson);
    return notesArr;
  } catch (error) {
    return [];
  }
};

// Writes note list to notes.json
const saveNotes = (notes) => {
  const notesJson = JSON.stringify(notes);

  fs.writeFileSync(fileName, notesJson);
};

const findNoteByTitle = (noteTitle, notes) =>
  notes.find((note) => note.title === noteTitle);

module.exports = { loadNotes, saveNotes, findNoteByTitle };
