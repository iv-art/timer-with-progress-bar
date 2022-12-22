window.addEventListener('load', function () {
	let buttonSqueeze = document.getElementById('startSqueeze');

	document.querySelector('.start-time').addEventListener('input', filterDigits);
	
	function filterDigits () {
		let regexPattern = /\d/;
		let enteredString = this.value;
		let newString = ''
	  for (let i of enteredString) {
		if (regexPattern.test(i)) {
	newString += i
		}
	  }
	  this.value = newString;
	}

	buttonSqueeze.addEventListener('click', function(){
		let seconds = document.querySelector('.start-time').value;
		if (seconds == 0 || seconds == '') {
			document.querySelector('.out-1').innerHTML = 'Вы не ввели число!'
		}
		else {
			let startTime = +seconds;
	
			let t2 = new TimerWithBar('.timer2', startTime, '.progressBar2');
		
		
			let t3 = new TimerWithBar('.timer3', startTime, 'img');
		
		let t4 = new TimerWithBar('.timer4', startTime, '.t4-bar');
		let t5 = new TimerWithBar('.timer5', startTime, '.progressBar5');
		}
	
		
	});
})





class Timer{
	constructor(boxSelector, initialTime){
		this.box = document.querySelector(boxSelector);
		this.time = initialTime;
		this.interval = null;
		this.render();
		this.start();
	}

	render(){
		this.box.innerHTML = this.time;
	}

	tick(){
		this.time--;
		this.render();

		if(this.time < 1){
			this.stop();
		}
	}

	start(){
		this.interval = setInterval(() => this.tick(), 1000);
	}

	stop(){
		clearInterval(this.interval);

	}
}

class TimerFormatted extends Timer{
	render(){
		let h = parseInt(this.time / 3600);
		let hs = this.time % 3600;
		let m = parseInt(hs / 60);
		let s = hs % 60;
		let secWithZero = s < 10 ? '0' + s.toString() : s.toString()
		

		this.box.innerHTML = `${m}:${secWithZero}`;
	}


	/* tick(){
		super.tick();
		console.log(this.time);
	} */
}

class TimerWithBar extends TimerFormatted {
	constructor(boxSelector, initialTime, barSelector) {
		super(boxSelector, initialTime);
		this.barElement = document.querySelector(barSelector);
		this.barElementInitialWidth = this.barElement.clientWidth;
		this.step = +(this.barElement.clientWidth / initialTime).toFixed(4);
		this.widthReducedOnce = this.barElement.clientWidth;
	}

tick = () => {
	super.tick();
	
	this.widthReducedOnce = +(this.widthReducedOnce - this.step).toFixed(4);
	if (this.widthReducedOnce < 0) {
		this.widthReducedOnce = 0;
	}
	let currentHeight = this.barElement.offsetHeight;
	this.barElement.style.width = `${this.widthReducedOnce}px`
	this.barElement.style.height = `${currentHeight}px`
}
stop = () => {
	super.stop();
	this.barElement.style.width = `${this.barElementInitialWidth}px`;
	console.log(this.barElement.style.width);
console.log(this.barElement);
	}
 
}


// class User {
// 	constructor(name, surn) {
// 		this.name = name;
// 		this.surn = surn;
// 	}
	
// 	getName() {
// 		return this.name;
// 	}
// 	getSurn() {
// 		return this.surn;
// 	}
// }

// class Student extends User {
// 	constructor(name, surn, year) {
// 		super(name, surn);
// 		this.year = year;
// 	}
// }

