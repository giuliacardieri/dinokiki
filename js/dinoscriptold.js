// JavaScript Document
var imgsrc = 'images/dinofechado2.png'; //closed mouth dinokiki
var kikiSays = new Array('ki', 'kiki', 'ki kiki', 'kikiki', 'kikikiki', 'kiki ki');
var sizes = new Array('12px', '18px', '24px', '36px', '42px', '54px');
var randomSays = 0;
var randomSize = 0;
var xPos = 0;
var yPos = 0;
var audioKiki= new Audio('audio/kiktest.wav');
var newP;
var interval;
var px = 'px;';

// this function changes the dinossaur image when you click on it
function changeImage() {
  if ( imgsrc == "images/dinofechado2.png" ) {
    document.images["pic"].src = "images/dinofechado2.png";
    document.images["pic"].alt = "dino1";
    imgsrc  = "images/dinoaberto2.png";
  }
  else {
    document.images["pic"].src = "images/dinoaberto2.png";
    document.images["pic"].alt = "dino2";
    imgsrc  = "images/dinofechado2.png";
  }
}

// this function adds audio to the dinossaur
function sayKiki() {
	if ( imgsrc == "images/dinofechado2.png" ) {
	   audioKiki.addEventListener('ended', function() {
       this.currentTime = 0;
       this.play();
	   }, false);
       audioKiki.play();
  }
  else {
	audioKiki.pause();
  }
}

function callWrite(){
	if( imgsrc == "images/dinofechado2.png" ) {
	   interval = setInterval(function(){writeKiki()},500);
	}
	else {
	   clearInterval(interval);
	}
}

// this function will write kiki on the screen
function writeKiki(){
	// functions to find random positions, text and font sizes.
    randomSays = kikiSays[Math.floor(6*Math.random())];
	randomSize = sizes[Math.floor(7*Math.random())];
	xPos = Math.floor(Math.random()*getWidth());
	yPos = Math.floor(Math.random()*getHeight());
	
	// the random text will be added dinamically to a p tag on the sayit id div.
	newP = document.createElement('p');
	newP.innerHTML = randomSays;
	newP.style.position = 'absolute';
	newP.style.right= xPos.toString() + px;
	newP.style.bottom = yPos.toString() + px;
	newP.style.fontSize = randomSize;
	document.getElementById("sayit").appendChild(newP);
	document.getElementById("sayit2").appendChild(newP);
}

function getWidth() {
    if (self.innerWidth) {
       return self.innerWidth;
    }
    else if (document.documentElement && document.documentElement.clientHeight){
        return document.documentElement.clientWidth;
    }
    else if (document.body) {
        return document.body.clientWidth;
    }
    return 0;
}

function getHeight() {
    if (self.innerHeight) {
       return self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientWidth){
        return document.documentElement.clientHeight;
    }
    else if (document.body) {
        return document.body.clientHeight;
    }
    return 0;
}
