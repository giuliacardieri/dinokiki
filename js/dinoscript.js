var dinoOpen = null;
var dinoClosed = null;
var audioKiki = new Audio('audio/Kiki.mp3'); // Giulia's Kiki
var audioKikiB = new Audio('audio/KikiB.mp3'); // Bruno's Kiki
var audioKikiG = new Audio('audio/KikiG.mp3'); // Guilherme's Kiki
var audioKikiM = new Audio('audio/KikiM.mp3'); // Michelangelo's Kiki
var audioKikiR = new Audio('audio/KikiR.mp3'); // Raianne's Kiki
var audioKikiI = new Audio('audio/KikiI.mp3'); // Raquel's Kiki
var audioKikiC = new Audio('audio/KikiC.mp3'); // Caio Mahin's Kiki
var audioKikiF = new Audio('audio/KikiF.mp3'); // Felipe's Kiki
var audioKikiSA = new Audio('audio/KikiSA.mp3'); // Kiki Staying Alive feat Raquel, Sara, Nicole and Guilherme 
var audioKikiJ = new Audio('audio/KikiJ.mp3'); // Jerome's Kiki
var audioKikiLK = new Audio('audio/KikiLK.mp3'); // Giovani's and Raquel's Kiki
var audioKikiCH = new Audio('audio/KikiCH.mp3'); // Caio Hideki's Kiki
var audioKikiCB = new Audio('audio/KikiCB.mp3'); // Carlos' Kiki
var audioKikiL = new Audio('audio/KikiL.mp3'); // Luiz's Kiki
var audioKikiE = new Audio('audio/KikiE.mp3'); // Elisa's Kiki
var audioKikiGA = new Audio('audio/KikiGA.mp3'); // Giovana's Kiki
var audioKikiN = new Audio('audio/KikiN.mp3'); // Nicole's Kiki
var audioKikiAJ = new Audio('audio/KikiAJ.mp3'); // Jessica's Friend Kiki
var audioKikiJD = new Audio('audio/KikiJD.mp3'); // Jessica's Kiki
var audioKikiJC = new Audio('audio/KikiJC.mp3'); // Jessica's Little Cousin 1 Kiki
var audioKikiJC1 = new Audio('audio/KikiJC1.mp3'); // Jessica's Little Cousin 2 Kiki
var audioKikiT = new Audio('audio/KikiT.mp3'); // Tamires' Kiki 
var audioKikiV = new Audio('audio/KikiV.mp3'); // Vitória's Kiki

function loadDino() {
    dinoOpen = new Image();
    dinoClosed = new Image();
    dinoOpen.src = "images/dinoa3.png";
    dinoClosed.src = "images/dinof3.png";
}

var imgsrc = "images/dinof-bday.png";
var kikiSays = new Array('ki', 'kiki', 'ki kiki', 'kikiki', 'kikikiki', 'kiki ki');
var sizes = new Array('16px', '18px', '24px', '36px', '42px', '54px');
var randomSize = 0;
var xPos = 0;
var yPos = 0;
var audioArray = new Array(audioKiki, audioKikiB, audioKikiG, audioKikiM, audioKikiR, audioKikiI, audioKikiC, audioKikiF, audioKikiSA, audioKikiJ, audioKikiLK, audioKikiCH, audioKikiCB, audioKikiL, audioKikiE, audioKikiGA, audioKikiN, audioKikiAJ, audioKikiJD, audioKikiJC, audioKikiJC1, audioKikiT, audioKikiV);
var interval;
var num = 0;
var num2 = 0;
var dinoOpen = null;
var dinoClosed = null;
var loaded = false;


// this function changes the dinossaur image when you click on it
function changeImage() {
    if (imgsrc == dinoOpen.src) {
        document.images["pic"].src = dinoClosed.src;
        document.images["pic"].alt = "dinokiki is not talking right now!";
        imgsrc = dinoClosed.src;
    } else {
        document.images["pic"].src = dinoOpen.src;
        document.images["pic"].alt = "dinokiki is talking!";
        imgsrc = dinoOpen.src;
    }
}

function sayKiki() {
    if (imgsrc == dinoOpen.src) {
        num2 = parseInt(Math.random() * audioArray.length);
        audioArray[num2].addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        audioArray[num2].play();
    } else {
        audioArray[num2].pause();
    }
}

//this function defines the interval for write kiki on the screen.
function callWrite() {
    if (imgsrc == dinoOpen.src) {
        interval = setInterval(function() {
            writeKiki()
        }, 500);
    } else {
        clearInterval(interval);
    }
}

// this function will write kiki on the screen
function writeKiki() {
    // functions to find random positions, text and font sizes.
    randomSays = kikiSays[Math.floor(kikiSays.length * Math.random())];
    randomSize = sizes[Math.floor(7 * Math.random())];
    xPos = Math.floor(Math.random() * ($(window).width() - 100));
    yPos = Math.floor(Math.random() * ($(window).height() - 100));
    num = parseInt(Math.random() * 100, 10);
    // the random text will be added dynamically to a p tag. 
    $("<p>").addClass("kiki dino" + num).html(randomSays).appendTo($("body")).css({
        top: yPos + "px",
        left: xPos + "px",
        fontSize: randomSize
    }).delay(5000).queue(function() {
        $(this).remove();
    });
}


$(function() {
    $("#pic").click(function() {
        changeImage();
        sayKiki();
        callWrite();
    });
    
    $('.kiki-form').on('submit', function (e) {
        //e.preventDefault(); 
        var user_name = $('#cName').val();
        var user_kikiName = $('#cKikiName').val();
        var user_email = $('#cEmail').val();
        var user_twitter = $('#cTwitter').val();
        var user_message = $('#cMessage').val();
        var regex = /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/igm;
        
        var file_ext = $('#cKiki').val().split('.').pop().toLowerCase();

        var proceed = true;
        if (user_name.length < 3) {
            $('#cName').css('background-color', '#A62929');
            proceed = false;
            $('.nameError').html('You need to write your name!');
        }
        else {
            $('#cName').css('background-color', '#282828');
            $('.nameError').html('');
        }
        if (user_email == "" || !regex.test(user_email)) {
            $('#cEmail').css('background-color', '#A62929');
            proceed = false;
            $('.emailError').html('The correct email format is abc@def.ghi!');
        }
        else {
            $('#cEmail').css('background-color', '#282828');
            $('.emailError').html('');
        }
       if ((file_ext != "mp3") && (file_ext != "m4a") && (file_ext != "wav")){
            $('#cKiki').css('background-color', '#A62929');
            proceed = false;
            $('.kikiError').html('Your kiki needs to be an .mp3, .m4a or .wav!');
       }
        else {
            $('#cKiki').css('background-color', '#282828');
            $('.kikiError').html('');
        }
    
        if (!proceed) { 
          e.preventDefault();
        }
    });
});