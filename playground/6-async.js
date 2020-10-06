// console.log("Starting");

const print = (number) => {
  if (number > 10) {
    return;
  }

  // console.log(number);

  const nextNumber = () => {
    console.log(number);
    print(number + 1);
  };

  let ms = 1000;

  if (number % 2 === 0) {
    ms = 2000;
  }

  setTimeout(nextNumber, ms);
};

// print(1);

const wait = (ms, callback) => {
  console.log("[wait] Starting...");

  const done = () =>
    setTimeout(() => {
      console.log("[wait] Done!");
    }, 1000);

  if (ms < 0) {
    callback(true, false);
    done();
    return;
  }

  setTimeout(() => {
    callback(false, true);
    done();
  }, ms);
};

wait(-1, (error, done) => {
  // error: true <=> ms < 0
  // done: true <=> ms passed

  if (error) {
    console.log(`Error: ms must be a positive number`);
  } else if (done) {
    console.log("yeah!");
  }
});

console.log("object");

// [wait] Starting...
// waited too long!
// [wait] Done!
