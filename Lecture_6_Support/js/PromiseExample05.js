// https://www.javascripttutorial.net/es6/javascript-promises/
let completed = false;

//To see the pending state of the promise, we wrap the code of the executor in the setTimeout() function:
let learnJS = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (completed) {
            resolve("I have completed learning JS.");
        } else {
            reject("I haven't completed learning JS yet.");
        }
    }, 3 * 1000);
});

learnJS
  .then(success => console.log(success), reason => console.log(reason))
  .catch(reason => console.log(reason))
  .finally(console.log("Finally"));