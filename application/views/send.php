<main class="text">
    <section class="big-photo">
        <img src="<?php echo asset_url('images/send-bg.png'); ?>" alt="dinokiki and the kikis" />
    </section>
    <section>
        <div class="icon-wrapper">
            <img class="icon" src="<?php echo asset_url('images/send.png'); ?>" alt="send icon"/>
        </div>
        <h2>SEND YOUR KIKI!</h2>
        <p>Would you like to be a Dinokiki friend and send a kiki? Fill the form below and send an audio file with your kiki!. If your Kiki is approved you will receive an email as soon as it gets online!</p>
        <div class="form-wrapper">
            <form method="post" class="kiki-form" action="" data-href="send/send_kiki" enctype="multipart/form-data">
                <div class="form-element">
                    <label class="cName-label" for="name">Name*</label>
                    <input type="text" id="cName" name="name" placeholder="Name*" />
                    <span class="nameError error hidden">Name must have at least 3 characters.</span>
                </div>
                <div class="form-element">
                    <label class="cKikiName-label" for="kiki_name">Name Your Kiki</label>
                    <input type="text" id="cKikiName" name="kiki_name" placeholder="Name Your Kiki" />
                </div>
                <div class="form-element">
                    <label class="cEmail-label" for="email">Email*</label>
                    <input type="email" id="cEmail" name="email" placeholder="Email*" />
                    <span class="emailError error hidden">Email must be in format name@host.com</span>
                </div>
                <div class="form-element">
                    <label class="cTwitter-label" for="name">Twitter</label>
                    <input type="text" id="cTwitter" name="twitter" placeholder="Twitter" />
                </div>
                <div class="form-element">
                    <label class="cKiki-label" for="name">Kiki Audio File*</label>
                    <input type="file" id="cKiki" name="kiki" placeholder="Kiki Audio File*" accept="audio/*" />
                    <span class="kikiError error hidden">Audio file must be mp3 or m4a or wav</span>
                </div>
                <div class="btn-wrapper">
                    <input type="reset" value="Reset" />
                    <input type="submit" value="Send" />
                </div>
            </form>
            <div class="messageSucess hidden">
                <p>Yay! Your kiki was successfully sent :D</p>
            </div>
        </div>
    </section>
</main>>