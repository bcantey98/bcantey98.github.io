// https://www.geeksforgeeks.org/javascript-promises/
/*

Promises are used to handle asynchronous operations in JavaScript. 
They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell 
leading to unmanageable code.

Prior to promises events and callback functions were used but they had limited functionalities and created 
unmanageable code.

*/
var promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks1"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occured');
    }); 