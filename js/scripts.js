window.addEventListener('load', function(){
let startTime = 15;

	let t2 = new TimerWithBar('.timer2', startTime, '.progressBar2');


	let t3 = new TimerWithBar('.timer3', startTime, 'img');

let t4 = new TimerWithBar('.timer4', startTime, '.t4-bar');
let t5 = new TimerWithBar('.timer5', startTime, '.progressBar5');

	
	
});

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
		this.step = +(this.barElement.clientWidth / initialTime).toFixed(4);
		this.widthReducedOnce = this.barElement.clientWidth;
	}
 showBar = () => {
	console.log(this.barElement);
	console.log(this.barElement.offsetWidth);
 }

 reduceBar = () => {
	let reducingBar = 0;
	let barWidth = this.barElement.offsetWidth;

 }
tick = () => {
	super.tick();
	
	this.widthReducedOnce = +(this.widthReducedOnce - this.step).toFixed(4);
	if (this.widthReducedOnce < 0) {
		this.widthReducedOnce = 0;
	}
	let currentHeight = this.barElement.offsetHeight;
	
	console.log(this.widthReducedOnce, this.step);
	this.barElement.style.width = `${this.widthReducedOnce}px`
	this.barElement.style.height = `${currentHeight}px`
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

