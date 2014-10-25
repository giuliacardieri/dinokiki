var dinoOpen = null;
var dinoClosed = null;
var audioKiki= new Audio('audio/Kiki.mp3'); 
var audioKikiB= new Audio('audio/KikiB.mp3');
var audioKikiG= new Audio('audio/KikiG.mp3'); 
var audioKikiM= new Audio('audio/KikiM.mp3'); 
var audioKikiR= new Audio('audio/KikiR.mp3'); 
var audioKikiI= new Audio('audio/KikiI.mp3'); 
var audioKikiC= new Audio('audio/KikiC.mp3');
var audioKikiF= new Audio('audio/KikiF.mp3');
var audioKikiSA= new Audio('audio/KikiSA.mp3'); 
var audioKikiJ= new Audio('audio/KikiJ.mp3');
var audioKikiLK= new Audio('audio/KikiLK.mp3');

function loadDino() {
    dinoOpen = new Image();
    dinoClosed = new Image();
    dinoOpen.src = "images/dinoa3.png";
    dinoClosed.src = "images/dinof3.png";
}

var imgsrc = "images/dinof3.png";
var kikiSays = new Array('ki', 'kiki', 'ki kiki', 'kikiki', 'kikikiki', 'kiki ki', 'happy spring!');
var sizes = new Array('16px', '18px', '24px', '36px', '42px', '54px');
var randomSize = 0;
var xPos = 0;
var yPos = 0;
var audioArray = new Array(audioKiki, audioKikiB, audioKikiG, audioKikiM, audioKikiR, audioKikiI, audioKikiC, audioKikiF, audioKikiSA, audioKikiJ, audioKikiLK); 
var interval;
var num = 0;
var num2 = 0;
var dinoOpen = null;
var dinoClosed = null;
var loaded = false;


// this function changes the dinossaur image when you click on it
function changeImage() { 
  if ( imgsrc == dinoOpen.src) {
    document.images["pic"].src = dinoClosed.src;
    document.images["pic"].alt = "dinokiki is not talking right now!";
    imgsrc  = dinoClosed.src;
  }
  else {
    document.images["pic"].src = dinoOpen.src;
    document.images["pic"].alt = "dinokiki is talking!";
    imgsrc  = dinoOpen.src;
  }
}

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
    randomSays = "<img style='opacity: 0.6;' src='images/kikiflower2.png' alt='happy spring!'>"+ kikiSays[Math.floor(kikiSays.length*Math.random())]+"<img style='opacity: 0.6;' src='images/kikiflower2.png' alt='happy spring!'>";
	randomSize = sizes[Math.floor(7*Math.random())];
	xPos = Math.floor(Math.random()*($(window).width()-100));
	yPos = Math.floor(Math.random()*($(window).height()-100));
	num = parseInt(Math.random()*100,10);
	// the random text will be added dynamically to a p tag. 
   $("<p>").addClass("kiki dino" + num).html(randomSays).appendTo($("body")).css({top: yPos + "px",left: xPos + "px",fontSize: randomSize}).delay(5000).queue(function() { $(this).remove(); });		
}

function showMenu(){  
    $("aside nav").animate({width: "toggle"});
    if ($("aside nav").hasClass("mobile-hidden")) {
        $(".menu-mobile").animate({"padding-right": "200px"}); 
        $("aside nav").removeClass("mobile-hidden");
   }
   else {
       $(".menu-mobile").animate({"padding-right": "10px"}, "slow"); 
       $("aside nav").addClass("mobile-hidden");
   }
}

$(function(){
    if ($(window).width() < 1024){
        $("body").swipeleft(function() { 
            if ($("aside nav").hasClass("hidden"))
            showMenu(); 
        });
        $("body").swiperight(function() { 
            if (!$("aside nav").hasClass("hidden"))
            showMenu(); 
        });
    }
});