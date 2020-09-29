const yargs = require("yargs");

yargs.version("1.1.0");

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
    // destructuring
    const { title, description } = args;
    // const title = args.title;
    // const description = args.description;

    console.log("Adding a new note");
    console.log("Title:", title);
    console.log("Description:", description);
  },
}).argv;
