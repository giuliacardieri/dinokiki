<footer>
    <nav>
        <ul>
            <li>
                <a href="<?php echo site_url('home'); ?>">Home</a>
            </li>
            <li>
                <a href="<?php echo site_url('about'); ?>">About</a>
            </li>
            <li>
                <a href="<?php echo site_url('game'); ?>">Play The Kiki Game</a>
            </li>
            <li>
                <a href="<?php echo site_url('test'); ?>">Test your Kiki</a>
            </li>
            <li>
                <a href="<?php echo site_url('send'); ?>">Send a Kiki</a>
            </li>
        </ul>
    </nav>
    <ul class="media-wrapper">
        <li class="btn-media">
            <div class="fb-like" data-href="http://dinokiki.com" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>
        </li>
        <li class="btn-media"><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://dinokiki.com" data-via="mrdinokiki" data-related="ggiulia" data-hashtags="dinokiki">Tweet</a>
            <script>
                ! function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0],
                        p = /^http:/.test(d.location) ? 'http' : 'https';
                    if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = p + '://platform.twitter.com/widgets.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    }
                }(document, 'script', 'twitter-wjs');
            </script>
        </li>
    </ul>
    <div class="copyright">
        © 2016 <a href="http://giuliacardieri.com" target="blank">Giulia Cardieri</a>
    </div>
</footer>

</body>

</html>