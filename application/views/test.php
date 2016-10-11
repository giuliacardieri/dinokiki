<main class="text"> 
    <section class="big-photo">
        <img src="<?php echo asset_url('images/test-bg.png'); ?>" alt="Dinokiki kiking" />
    </section>
    <section>
        <div class="icon-wrapper">
            <img class="icon" src="<?php echo asset_url('images/test.png'); ?>" alt="test icon"/>
        </div>
        <h2>TEST YOUR KIKI</h2>
        <p>Would you like to see how Dinokiki would speak your Kiki? This is your chance! Load your mp3/wav/m4a Kiki file and have fun testing it with Dinokiki! If you like it click the Send button and let everyone hear your Kiki!</p>
        <form class="form-test" data-href="<?php echo site_url('test/test_kiki'); ?>" method="post" enctype="multipart/form-data">
            <input id="kiki-test" name="kiki-test" type="file">
            <span class="kiki-testError error hidden">Kiki NOT loaded - mp3/wav/m4a - max 1mb</span>
            <input type="submit" value="Try">
        </form>
    </section>
    <section class="dino-test-wrapper hidden">
        <img id="pic" class="test" src="<?php echo asset_url('images/dinof4.png'); ?>" alt="dinokiki is not talking!">
    </section>
</main>