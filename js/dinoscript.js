// DINOSCRIPT! 

// pre-loads the dinokiki images.
var dinoOpen = null;
var dinoClosed = null;
var audioKiki= new Audio('audio/Kiki.mp3'); 	//Giulia
var audioKikiB= new Audio('audio/KikiB.mp3');	//Bruno
var audioKikiG= new Audio('audio/KikiG.mp3'); 	//Guilherme
var audioKikiM= new Audio('audio/KikiM.mp3'); 	//Michelangelo
var audioKikiR= new Audio('audio/KikiR.mp3'); 	//Raianne
var audioKikiI= new Audio('audio/KikiI.mp3'); 	//Raquel/aka Irina
var audioKikiC= new Audio('audio/KikiC.mp3'); 	//Caio/aka Bad Bitch
var audioKikiF= new Audio('audio/KikiF.mp3'); 	//Felipe
var audioKikiSA= new Audio('audio/KikiSA.mp3'); //Staying Alive Kiki feat Sara, Raquel & Nicole.
var audioKikiJ= new Audio('audio/KikiJ.mp3');   //Jerome Jarre

function loadDino() {
    dinoOpen = new Image();
    dinoClosed = new Image();
    dinoOpen.src = "images/dinoa3.png";
    dinoClosed.src = "images/dinof3.png";
    var dinoLoader = new html5Preloader('audio/Kiki.mp3', 'audio/KikiB.mp3', 'audio/KikiG.mp3', 'audio/KikiM.mp3', 'audio/KikiR.mp3', 'audio/KikiI.mp3', 'audio/KikiC.mp3', 'audio/KikiF.mp3', 'audio/KikiSA.mp3', 'audio/KikiJ.mp3');
    console.log("loaded!!! ");
    document.getElementById('loading').innerHTML = "";
}

var imgsrc = null; //closed mouth dinokiki
var kikiSays = new Array('ki', 'kiki', 'ki kiki', 'kikiki', 'kikikiki', 'kiki ki');
var sizes = new Array('16px', '18px', '24px', '36px', '42px', '54px');
var randomSays = 0;
var randomSize = 0;
var xPos = 0;
var yPos = 0;
var audioArray = new Array(audioKiki, audioKikiB, audioKikiG, audioKikiM, audioKikiR, audioKikiI, audioKikiC, audioKikiF, audioKikiSA, audioKikiJ); 

var interval;
var num = 0;
var num2 = 0;

// this function changes the dinossaur image when you click on it
function changeImage() {
  if ( imgsrc == dinoClosed.src) {
	document.images["pic"].src = dinoOpen.src;
    document.images["pic"].alt = "dinokiki is talking!";
    imgsrc  = dinoOpen.src;
  }
  else {
    document.images["pic"].src = dinoClosed.src;
    document.images["pic"].alt = "dinokiki is not talking right now!";
    imgsrc  = dinoClosed.src;
  }
}

// this function adds audio to the dinossaur
function sayKiki() {
	if ( imgsrc  == dinoOpen.src ) {
	   num2 = parseInt(Math.random()*audioArray.length);
	   audioArray[num2].addEventListener('ended', function() {
       this.currentTime = 0;
       this.play();
	   }, false);
       audioArray[num2].play();
  }
  else {
	audioArray[num2].pause();
  }
}

//this function defines the interval for write kiki on the screen.
function callWrite(){
	if( imgsrc == dinoOpen.src ) { 
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
	xPos = Math.floor(Math.random()*($(window).width()-100));
	yPos = Math.floor(Math.random()*($(window).height()-100));
	num = parseInt(Math.random()*100,10);
	// the random text will be added dynamically to a p tag. 
   $("<p>").addClass("dino" + num).html(randomSays).appendTo($("body")).css({top: yPos + "px",left: xPos + "px",fontSize: randomSize}).delay(5000).queue(function() { $(this).remove(); });		
}

// Did you know that Dinokiki likes to eat brownies? Yeah, that's surprising. He's a vegetarian, or should I say brownievore?


