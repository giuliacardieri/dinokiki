var dinoOpen = null
, dinoClosed = null
, base_assets = base_url + 'assets/'
, audioKiki = new Audio(base_assets + 'audio/Kiki.mp3')  // Giulia's Kiki
, audioKikiB = new Audio(base_assets + 'audio/KikiB.mp3')  // Bruno's Kiki
, audioKikiG = new Audio(base_assets + 'audio/KikiG.mp3')  // Guilherme's Kiki
, audioKikiM = new Audio(base_assets + 'audio/KikiM.mp3')  // Michelangelo's Kiki
, audioKikiR = new Audio(base_assets + 'audio/KikiR.mp3')  // Raianne's Kiki
, audioKikiI = new Audio(base_assets + 'audio/KikiI.mp3')  // Raquel's Kiki
, audioKikiC = new Audio(base_assets + 'audio/KikiC.mp3')  // Caio Mahin's Kiki
, audioKikiF = new Audio(base_assets + 'audio/KikiF.mp3')  // Felipe's Kiki
, audioKikiSA = new Audio(base_assets + 'audio/KikiSA.mp3')  // Kiki Staying Alive feat Raquel, Sara, Nicole and Guilherme 
, audioKikiJ = new Audio(base_assets + 'audio/KikiJ.mp3')  // Jerome's Kiki
, audioKikiLK = new Audio(base_assets + 'audio/KikiLK.mp3')  // Giovani's and Raquel's Kiki
, audioKikiCH = new Audio(base_assets + 'audio/KikiCH.mp3')  // Caio Hideki's Kiki
, audioKikiCB = new Audio(base_assets + 'audio/KikiCB.mp3')  // Carlos' Kiki
, audioKikiL = new Audio(base_assets + 'audio/KikiL.mp3')  // Luiz's Kiki
, audioKikiE = new Audio(base_assets + 'audio/KikiE.mp3')  // Elisa's Kiki
, audioKikiGA = new Audio(base_assets + 'audio/KikiGA.mp3')  // Giovana's Kiki
, audioKikiN = new Audio(base_assets + 'audio/KikiN.mp3')  // Nicole's Kiki
//, audioKikiAJ = new Audio(base_assets + 'audio/KikiAJ.mp3')  // Jessica's Friend Kiki
//, audioKikiJD = new Audio(base_assets + 'audio/KikiJD.mp3')  // Jessica's Kiki
, audioKikiJC = new Audio(base_assets + 'audio/KikiJC.mp3')  // Jessica's Little Cousin 1 Kiki
, audioKikiJC1 = new Audio(base_assets + 'audio/KikiJC1.mp3')  // Jessica's Little Cousin 2 Kiki
, audioKikiT = new Audio(base_assets + 'audio/KikiT.mp3')  // Tamires' Kiki 
, audioKikiV = new Audio(base_assets + 'audio/KikiV.mp3')  // Vitória's Kiki
, audioKikiY = new Audio(base_assets + 'audio/KikiY.mp3')  // Yumi's Kiki
, audioKikiG2 = new Audio(base_assets + 'audio/KikiG2.mp3')  // Guilherme's Birthday Kiki
, audioKiki2 = new Audio(base_assets + 'audio/Kiki2.mp3')  // Giulia's Weird Kiki
, audioKikiK = new Audio(base_assets + 'audio/KikiK.mp3')  // Keiko's Kiki
, audioKikiK2 = new Audio(base_assets + 'audio/KikiK2.mp3')  // Keiko's Second Kiki
, audioKikiAC = new Audio(base_assets + 'audio/KikiAC.mp3')  // Carol's Kiki
, audioKikiMI = new Audio(base_assets + 'audio/KikiMI.mp3')  // Kiki Mission Impossible feat Carol and Keiko
, audioKikiHM = new Audio(base_assets + 'audio/KikiHM.mp3')  // Kiki Hakuna Matata feat Keiko
, audioKikiH = new Audio(base_assets + 'audio/KikiH.mp3')  // Henrique's Kiki
, audioKikiD = new Audio(base_assets + 'audio/KikiD.mp3')  // Deivison's Kiki
, audioKikiGOT = new Audio(base_assets + 'audio/KikiGOT.mp3')  // Kimiko's Kiki
, audioKikiMC = new Audio(base_assets + 'audio/KikiMC.mp3') // Marelos's Kiki
, audioKikiVR = new Audio(base_assets + 'audio/KikiVR.mp3');  // Vinicius's Kiki


var image_names = {
    0: {
        img: 'first.png',
        audio: audioKiki
    },
    1: {
        img: 'engineer.png',
        audio: audioKikiB
    },
    2: {
        img: 'pebble.png',
        audio: audioKikiG
    },
    3: {
        img: 'multifaced.png',
        audio: audioKikiM
    },
    4: {
        img: 'fastforward.png',
        audio: audioKikiR
    },
    5: {
        img: 'singer.png',
        audio: audioKikiI
    },
    6: {
        img: 'badbitch.png',
        audio: audioKikiC
    },
    7: {
        img: 'caveman.png',
        audio: audioKikiF
    },
    8: {
        img: 'stayingalive.png',
        audio: audioKikiSA
    },
    9: {
        img: 'kikikiki.png',
        audio: audioKikiJ
    },
    10: {
        img: 'lionking.png',
        audio: audioKikiLK
    },
    11: {
        img: 'classical.png',
        audio: audioKikiCH
    },
    12: {
        img: 'classical.png',
        audio: audioKikiCB
    },
    13: {
        img: 'classical.png',
        audio: audioKikiL
    },
    14: {
        img: 'gaucha.png',
        audio: audioKikiE
    },
    15: {
        img: 'cute.png',
        audio: audioKikiGA
    },
    16: {
        img: 'broadway.png',
        audio: audioKikiN
    },
    17: {
        img: 'kids.png',
        audio: audioKikiJC
    },
    18: {
        img: 'kids.png',
        audio: audioKikiJC1
    },
    19: {
        img: 'psycho.png',
        audio: audioKikiT
    },
    20: {
        img: 'warning.png',
        audio: audioKikiV
    },
    21: {
        img: 'indikikijones.png',
        audio: audioKikiAC
    },
    22: {
        img: 'pixel.png',
        audio: audioKikiY
    },
    23: {
        img: 'birthday.png',
        audio: audioKikiG2
    },
    24: {
        img: 'british.png',
        audio: audioKiki2
    },
    25: {
        img: 'clock.png',
        audio: audioKikiK
    },
    26: {
        img: 'monster.png',
        audio: audioKikiK2
    },
    27: {
        img: 'hakunamakiki.png',
        audio: audioKikiHM
    },
    28: {
        img: 'missionimpokikible.png',
        audio: audioKikiMI
    },
    29: {
        img: 'antipattern.png',
        audio: audioKikiH
    },
    30: {
        img: 'reporter.png',
        audio: audioKikiD
    },
    31: {
        img: 'got.png',
        audio: audioKikiGOT
    },
    32: {
        img: 'canadian.png',
        audio: audioKikiMC
    },
    33: {
        img: 'lost.png',
        audio: audioKikiVR
    },
};

var ended = {
    'bad': "<h3>You're such a Kikisaster!</h3><h4>Time to learn some kiki eh?</h4>",
    'ok': "<h3>You're ok.</h3><h4>Which doesn't mean I like you.</h4>",
    'great': "<h3>You're Kikiawesome!</h3><h4>Let's be super friends!</h4>",
}

var share;

var dinoAberto = false 
, kikiSays = new Array('ki', 'kiki', 'ki kiki', 'kikiki', 'kikikiki', 'kiki ki')
, sizes = new Array('16px', '18px', '24px', '36px', '42px', '54px')
, randomSize = 0
, xPos = 0
, yPos = 0
, interval
, num = 0
, num2 = 0
, testKiki = new Audio()
, dinoOpen = null
, dinoClosed = null
, audioAbout = null
, audioGame = null
, rightAnswers = 0
, gameNum = 1
, audioArray = new Array(audioKiki, audioKikiB, audioKikiG, audioKikiM, audioKikiR, audioKikiI, audioKikiC, audioKikiF, audioKikiSA, audioKikiJ, audioKikiLK, audioKikiCH, audioKikiCB, audioKikiL, audioKikiE, audioKikiGA, audioKikiN, audioKikiJC, audioKikiJC1, audioKikiT, audioKikiV, audioKikiAC, audioKikiY, audioKikiG2, audioKiki2, audioKikiK, audioKikiK2, audioKikiHM, audioKikiMI, audioKikiH, audioKikiD, audioKikiGOT, audioKikiMC, audioKikiVR);








// this function changes the dinossaur image when you click on it
var changeImage = function changeImage() {
    if (dinoAberto) {
        $('.dino-aberto').addClass('hidden');
        $('.dino-fechado').removeClass('hidden');
        dinoAberto = false;
    } else {
        $('.dino-fechado').addClass('hidden');
        $('.dino-aberto').removeClass('hidden');
        dinoAberto = true;
    }
}

var sayKiki = function sayKiki(test) {
    var audio = '';
    if (dinoAberto) {
        if (test)
            audio = testKiki;
        else {
            num2 = parseInt(Math.random() * audioArray.length);
            audio = audioArray[num2];
        }
        audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        audio.play();
    } else {
        if (!test)
            audioArray[num2].pause();
        else
            testKiki.pause();
    }
}

//this function defines the interval for write kiki on the screen.
var callWrite = function callWrite() {
    if (dinoAberto) {
        interval = setInterval(function() {
            writeKiki()
        }, 500);
    } else {
        clearInterval(interval);
    }
}

// this function will write kiki on the screen
var writeKiki = function writeKiki() {
    // functions to find random positions, text and font sizes.
    randomSays = kikiSays[Math.floor(kikiSays.length * Math.random())];
    randomSize = sizes[Math.floor(7 * Math.random())];
    xPos = Math.floor(Math.random() * ($(window).width() - 100));
    yPos = Math.floor(Math.random() * ($(window).height() - 100));
    num = parseInt(Math.random() * 100, 10);
    // the random text will be added dynamically to a p tag. 
    $("<p>").addClass("kiki dino" + num).html(randomSays).appendTo($(".kiki-wrapper")).css({
        top: yPos + "px",
        left: xPos + "px",
        fontSize: randomSize
    }).delay(5000).queue(function() {
        $(this).remove();
    });
}

var readyToTest = function readyToTest(arg) {
    if (arg === false) {
        $('.dino-test-wrapper, .btn-wrapper').addClass('hidden');
    } else if (arg === true) {
        $('.dino-test-wrapper, .btn-wrapper').removeClass('hidden');
        $('.kiki-testError').addClass('hidden');
        $('#kiki-test').removeClass('error-input');
    }
}

var messageError = function messageError(error) {
    if (error === 'test') {
        $('.kiki-testError').removeClass('hidden');
        $('.kiki-testSucess').addClass('hidden');
        readyToTest(false);
    }

}

var validateForm = function validateForm(isTest) {
    var name = $('#cName').val()
    , kikiName = $('#cKikiName').val() || null
    , email = $('#cEmail').val()
    , twitter = $('#cTwitter').val() || null
    , kiki = $('#cKiki')[0].files[0]
    , regex = /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/igm
    , file_ext
    , proceed = true
    , data;

    file_ext = kiki ? (kiki.name).split('.') : 'null'; 

    if (!kiki || (file_ext[1].toLowerCase() !== "mp3" && file_ext[1].toLowerCase() !== "m4a" && file_ext[1].toLowerCase() !== "wav")) {
        proceed = false;
        $('.kikiError').removeClass('hidden');
    }
    else 
        $('.nameError').addClass('hidden');

    if (name.length < 3) {
        proceed = false;
        $('.nameError').removeClass('hidden');
    } else
        $('.nameError').addClass('hidden');

    if (email == "" || !regex.test(email)) {
        $('.emailError').removeClass('hidden');
        proceed = false;
    } else
        $('.emailError').addClass('hidden');
    
    data = {
        'name' : name,
        'email' : email,
        'kiki' : kiki,
        'twitter' : twitter,
    };
    
    if (proceed)
        return data; 
    return false;
};

var playGame = function startGame() {
    var randomAudio
    , randomImg;

    if (audioGame)
        audioGame.pause();

    $('.img-wrapper').empty();
    $('.gameNum').html(gameNum);
    gameNum++;

    randomNum = parseInt(Math.random() * Object.keys(image_names).length);
    randomAudio = audioArray[randomNum];
    insertImages(randomNum);
    audioGame = randomAudio;
    audioGame.currentTime = 0;   
    audioGame.play();
};

var insertImages = function insertImages(chosen_img) {
    var randomImgs = []
    , img
    , add_class
    , num;

    while(randomImgs.length < 3){
        num = parseInt(Math.random() * Object.keys(image_names).length);
        var found = false;
        for (var i=0; i <= randomImgs.length; i++)
            if (randomImgs[i] === num || chosen_img === num) {
                found = true;
                break;
            }
        if (!found) 
            randomImgs[randomImgs.length] = num;
    }
    randomImgs[3] = chosen_img;

    // shuffling array
    randomImgs.sort(function() { return 0.5 - Math.random() });

    for (var i = 0; i<= 3; i++) { 
        add_class = '';
        img = image_names[randomImgs[i]]['img'];
        if (randomImgs[i] == chosen_img)
            add_class = " class='correct'";
        $('.img-wrapper').append("<img" + add_class + " src='" + base_assets + "images/" + img + "' alt='kiki img' />"); 
    }
};

var endGame = function endGame() {
    audioGame.pause();
    $('.ended').removeClass('hidden');
    $('.playing').addClass('hidden');
    $('.rightAnswers').html(rightAnswers);

    if (rightAnswers < 5) {
        $('.ended img').attr('src', base_assets + 'images/bad.png');
        $('.text-container-ended').append(ended['bad']);
    } else if (rightAnswers < 8) {
        $('.ended img').attr('src', base_assets + 'images/ok.png');
        $('.text-container-ended').append(ended['ok']);
    } else {
        $('.ended img').attr('src', base_assets + 'images/great.png');
        $('.text-container-ended').append(ended['great']);
    }

    makeShare();
};

var makeShare = function makeShare() {
    share = {
        'bad': "Help me! I chose only " + rightAnswers + "/10 correct kikis on the Kiki Game!",
        'ok': "Nice! I chose " + rightAnswers + "/10 correct kikis on the Kiki Game!",
        'great': "Yeah! I chose " + rightAnswers + "/10 correct kikis on the Kiki Game!",
    }
};

$(function() {

    //close dino-modals (from about and  others ) hitting ESC button
    $(document).keyup(function(e) {
        if ($('.dino-modal').css("display") == 'table' && e.keyCode == 27 ) {
            if (audioAbout) {
                audioAbout.pause();
            }
            $('.dino-modal').addClass('hidden');
        }
    });



    $('.share-btn').click(function() {
        if (rightAnswers < 5)
            frase = share['bad'];
        else if (rightAnswers <8)
            frase = share['ok'];
        else 
            frase = share['great'];
        FB.ui({
          method: 'share',
          display: 'popup',
          hashtag: '#playthekikigame #dinokiki',
          quote: frase,
          href: 'http://dinokiki.com/index.php/game'
        }, function(response){});
    });


     $('svg').on('click', function() {
        changeImage();
        if ($('.dino-fechado').hasClass("test"))
            sayKiki(true);
        else
            sayKiki(false);
        callWrite();
    });
    
    $('.form-test').on('submit', function(e){
        e.preventDefault();
        var formData = new FormData()
        , kiki = $('#kiki-test')[0].files[0]
        , type;

        type = (kiki.name).split('.');
        formData.append('kiki-test', kiki);
        if (kiki && (type[1] === 'mp3' || type[1] === 'm4a' || type[1] === 'wav')) {
            $.ajax({
                type: "POST",
                url: $(this).data('href'),
                data: formData,
                contentType: false,
                processData: false,
            }).done(function(o) {
                    testKiki.src = o;
                    $('#kiki').attr('value', o);
                    readyToTest(true);
                });
        } else {
            messageError('test');
        }
    });
    
     $("input").focus(function() {
        var id = $(this).attr("id");
        $("." + id + "-label").css('display','block').css('opacity', 1).animate({
            top: "0",
        }, 750);
        $(this).attr("placeholder", "");
    });

     $('.kiki-form').on('submit', function(e){
        e.preventDefault();
        var formData = new FormData($('.kiki-form')[0])
        , kiki = $('#cKiki')[0].files[0]
        , type;

        $('.messageSucess').addClass('hidden');
        formData.append('kiki', kiki);
        if (validateForm()) {
            $.ajax({
                type: "POST",
                url: $(this).data('href'),
                data: formData,
                contentType: false,
                processData: false,
            }).done(function() {
                $('.kiki-form')[0].reset();
                $('.messageSucess').removeClass('hidden');
            });
        }
     });      

    $('.dino-friend').on('click', 'img', function() {
        $.get($(this).data("href"), function(data) {
            $(".dino-modal").html(data);
        });
        $('.dino-modal').removeClass('hidden');
    });


    $('.dino-modal').on('click', '.audio', function() {
        audioAbout = eval($(this).data("href"));
        audioAbout.play();
    });

     $('.dino-modal').on('click', '.close-icon', function() {
        if (audioAbout)
            audioAbout.pause();
        $(this).parent().addClass('hidden');
     });

     $('.play-btn').on('click', function() {
        $('.not-game').addClass('hidden');
        $('.playing').removeClass('hidden');
        playGame();
     });

     $('.replay-btn').on('click', function() {
        $('.ended').addClass('hidden');
        $('.playing').removeClass('hidden');
        $('.text-container-ended').empty();
        rightAnswers = 0;
        gameNum = 1;
        playGame();
     });

     $('.img-wrapper').on('click', 'img', function (){
        if ($(this).hasClass('correct'))
            rightAnswers++;
        if (gameNum <= 10)
            playGame();
        else 
            endGame();
     });

});