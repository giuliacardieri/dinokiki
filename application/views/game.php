    <main class="text">    
    <section class="not-game big-photo">
        <img src="<?php echo asset_url('images/game-bg.png'); ?>" alt="dinokiki game header" />
    </section>
    <section class="not-game">
        <div class="icon-wrapper">
            <img class="icon" src="<?php echo asset_url('images/game.png'); ?>" alt="game control icon"/>
        </div>
        <h2>CAN YOU GUESS THE CORRECT KIKI?</h2>
        <p>Each Kiki has a name, each name has an illustration. Can you listen to a Kiki and choose the correct name for it? Let's see how good you are :D</p>
        <p>You need to click on the correct image representing each one of the 10 Kikis that will be played to you one at a time.</p>
        <p>Good Luck! \o\</p>
        <div class="btn-wrapper">
            <button class="btn play-btn">Play</button>
        </div>
    </section>
    <section class="game-wrapper playing hidden">
        <h2>Which image represents the playing Kiki? - <span class="gameNum">1</span>/10</h2>
        <div class="img-wrapper">
        </div>
    </section>
    <section class="game-wrapper ended hidden">
        <h2>You got <span class="rightAnswers">1</span> of 10</h2>
        <div class="center-align-ended-content">
            <img src="" alt="dinokiki saying what he thinks about your game strategy" />
            <div class="text-container-ended"></div>
        </div>
        <div class="btn-wrapper">
            <button class="btn replay-btn">Play Again</button>
        </div>
    </section>
</main>