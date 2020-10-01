const yargs = require("yargs");
const { loadNotes, saveNotes, findNoteByTitle } = require("./notes");

yargs.version("1.1.0");

yargs
  .command({
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
    handler: (args) => {
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

      const isNoteExisting = findNoteByTitle(title, notes);

      if (isNoteExisting) {
        console.warn(`Note "${title}" is existing. Exit.`);
        return;
      }

      // Adds the new note to the existing list.
      // numbers = [1,2]
      // numbers.push(3) => [1,2,3]
      notes.push(note);

      // Saves the new list to notes.json
      saveNotes(notes);

      console.log(`✅ Note "${title}" added.`);
    },
  })
  .command({
    command: "remove",
    builder: {
      title: {
        type: "string",
        demandOption: true,
        describe: "Title of the note you would like to remove",
      },
    },
    handler: ({ title }) => {
      const notes = loadNotes();
      const isNoteExisting = findNoteByTitle(title, notes);

      if (!isNoteExisting) {
        console.warn(`❌ Note doesn't exist.`);
        return;
      }

      saveNotes(notes.filter((note) => note.title !== title));

      console.log(`✅ Note removed.`);
    },
  }).argv;
