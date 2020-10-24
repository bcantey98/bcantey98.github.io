// https://medium.com/front-end-weekly/javascript-promises-explained-e464985274e7
const myPromise = new Promise( (resolve, reject)=> {  
	setTimeout(()=>{
		let myValue = Math.random();
		if(myValue > 0.5){
			let myMessage = 'Successful ' + myValue;
			resolve({ message: myMessage }) // Task successfully completed
		}
		else{
			let myMessage = 'Failure ' + myValue;
			reject({ message: myMessage }) // Task failure
		}
	},1000)
} )

myPromise.then(result => {
	console.log(result.message);
}).catch( reason => {
	console.log(reason.message);
})