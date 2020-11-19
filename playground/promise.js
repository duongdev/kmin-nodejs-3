const getRandomNumber = ([from, to]) => {
  return new Promise((resolve, reject) => {
    if (to < from) {
      reject("invalid input");
      return;
    }
    const randomNumber = Math.floor(Math.random() * (to - from) + from);

    resolve(randomNumber);
  });
};

const checkOddNumber = (number) => {
  return new Promise((resolve) => {
    const isOdd = !!(number % 2);
    resolve([number, isOdd]);
  });
};

getRandomNumber([1, 100])
  .then(checkOddNumber)
  .then(([theNumber, isOdd]) => {
    if (isOdd) {
      console.log(`${theNumber} is an odd number`);
    } else {
      console.log(`${theNumber} is an even number`);
    }
  })
  .catch((error) => {
    console.error(error);
  });
