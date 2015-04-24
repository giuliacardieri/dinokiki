<?php include_once 'includes/head.php'; ?>
<?php $msg=filter_input(INPUT_GET, 'msg', FILTER_SANITIZE_STRING); ?>
        
        <main class="text center">
            <h2>SEND YOUR KIKI!</h2>
            <p>Would you like to be a Dinokiki friend and send a kiki?</p>
            <p>Fill the form below and send a audio file with your kiki!</p>
            <div class="form-wrapper">
                <img class="dino-in-the-box" src="images/kiki-mail.png" alt="dinokiki inside a packaged box"/>
                <form method="post" class="kiki-form" action="form.php" enctype="multipart/form-data">
                    <?php if ($msg == 'no'): ?>
                      <p class="error error-form">Oh No! Please try to send your Kiki again.</p>
                    <?php elseif ($msg == 'ok'): ?>
                      <p class="success-form">Thanks for the Kiki!</p>
                    <?php endif; ?>
                    <input type="text" id="cName" name="name" placeholder="Your Name*" />
                    <span class="nameError error"></span>
                    <input type="text" id="cKikiName" name="kiki_name" placeholder="Name Your Kiki" />
                    <input type="email" id="cEmail" name="email" placeholder="Email*" />
                    <span class="emailError error"></span>
                    <input type="text" id="cTwitter" name="twitter" placeholder="Twitter Username" />
                    <input type="file" id="cKiki" name="kiki" placeholder="Kiki Audio File*" accept="audio/*" />
                    <span class="kikiError error"></span>
                    <textarea name="message" id="cMessage" placeholder="Leave A Message To Dinokiki" rows="5"></textarea>
                    <input type="submit" value="Send Your Kiki!" />
                </form>
            </div>
        </main>
        
       <?php include_once 'includes/footer.php'; ?>

    </div>
</body>

</html>