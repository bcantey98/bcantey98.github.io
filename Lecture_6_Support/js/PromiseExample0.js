// https://www.javascripttutorial.net/es6/javascript-promises/
let completed = false;

let learnJS = new Promise(function (resolve, reject) {
    if (completed) {
        resolve("I have completed learning JS.");
    } else {
        reject("I haven't completed learning JS yet.");
    }
});

console.log(learnJS);