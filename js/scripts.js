window.addEventListener('load', function(){
let startTime = 10;

	let t2 = new TimerFormatted('.timer2', startTime);
	progress();
	
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


function progress()
    {
        
        let width= document.getElementById('progressBar').parentNode.clientWidth;
		let i=width;
		let step = width / startTime;
        let id = setInterval(reduce, 1000);
        
        function reduce()
        {
            if(i>0)
            {
                i -= step;
                if(!document.getElementById('progressBar').setAttribute("style","width: "+i+"px;"))
                   { document.getElementById('progressBar').style.width = i;}
                
            }
            else
            {
                clearInterval(id);
				document.getElementById('progressBar').style.width = 0;
            }
        }
    }