// DINOSCRIPT! 
// My first JavaScript program, so be kind!
var imgsrc = 'images/dinof3.png'; //closed mouth dinokiki
var kikiSays = new Array('ki', 'kiki', 'ki kiki', 'kikiki', 'kikikiki', 'kiki ki');
var sizes = new Array('16px', '18px', '24px', '36px', '42px', '54px');
var randomSays = 0;
var randomSize = 0;
var xPos = 0;
var yPos = 0;
var audioKiki= new Audio('audio/Kiki.wav'); 	//Giulia
var audioKikiB= new Audio('audio/KikiB.wav');	//Bruno
var audioKikiG= new Audio('audio/KikiG.wav'); 	//Guilherme
var audioKikiM= new Audio('audio/KikiM.wav'); 	//Michelangelo
var audioKikiR= new Audio('audio/KikiR.wav'); 	//Raianne
var audioKikiI= new Audio('audio/KikiI.wav'); 	//Raquel/aka Irina
var audioKikiC= new Audio('audio/KikiC.wav'); 	//Caio/aka Bad Bitch
var audioKikiF= new Audio('audio/KikiF.wav'); 	//Felipe
var audioKikiSA= new Audio('audio/KikiSA.wav'); //Staying Alive Kiki feat Sara, Raquel & Nicole.
var audioArray = new Array(audioKiki, audioKikiB, audioKikiG, audioKikiM, audioKikiR, audioKikiI, audioKikiC, audioKikiF, audioKikiSA); 
var interval;
var num = 0;
var num2 = 0;

// this function changes the dinossaur image when you click on it
function changeImage() {
  if ( imgsrc == "images/dinof3.png" ) {
	document.images["pic"].src = "images/dinoa3.png";
    document.images["pic"].alt = "dino1";
    imgsrc  = "images/dinoa3.png";
  }
  else {
    document.images["pic"].src = "images/dinof3.png";
    document.images["pic"].alt = "dino2";
    imgsrc  = "images/dinof3.png";
  }
}

// this function adds audio to the dinossaur
function sayKiki() {
	if ( imgsrc  == "images/dinoa3.png" ) {
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
	if( imgsrc == "images/dinoa3.png" ) { 
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
		    console.log(num);
	// the random text will be added dinamically to a p tag. 
   $("<p>").addClass("dino" + num).html(randomSays).appendTo($("body")).css({top: yPos + "px",left: xPos + "px",fontSize: randomSize}).delay(5000).queue(function() { $(this).remove(); });		
}

// Did you know that Dinokiki likes to eat brownies? Yeah, that's surprising. He's a vegetarian, or should I say brownievore?


