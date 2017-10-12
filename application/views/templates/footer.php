<footer>
    <nav>
        <ul>
            <li>
                <a <?php if ($active == 'home') {echo "class='active'";
}

?> href="<?php echo site_url('home');?>">
                  <span class="hidden-xs hidden-sm">Home</span>
                  <div class="menu-svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/>
                    </svg>
                  </div>
                </a>
            </li>
            <li>
                <a <?php if ($active == 'about') {echo "class='active'";
}

?> href="<?php echo site_url('about');?>">
                  <span class="hidden-xs hidden-sm">About</span>
                  <div class="menu-svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z"/>
                    </svg>
                  </div>
                </a>
            </li>
            <li>
                <a <?php if ($active == 'game') {echo "class='active'";
}

?> href="<?php echo site_url('game');?>">
                  <span class="hidden-xs hidden-sm">Play The Kiki Game</span>
                  <div class="menu-svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M6 2l1.172.203c-.356 2.245.791 2.519 2.697 2.874 1.469.273 3.131.622 3.131 3.284v.639h-1.183v-.639c0-1.556-.479-1.809-2.163-2.122-2.584-.48-4.097-1.391-3.654-4.239zm-.176 10c-2.108 0-3.824 1.794-3.824 4s1.716 4 3.825 4c.928 0 1.825-.354 2.524-.999 1.015-.933 2.323-1.447 3.684-1.447 1.337 0 2.611.505 3.589 1.423.704.659 1.611 1.023 2.553 1.023 2.109 0 3.825-1.794 3.825-4 0-2.151-1.602-3.906-3.652-4h-12.524zm.001-2l12.563.007c3.118.116 5.612 2.755 5.612 5.993 0 3.312-2.607 6-5.825 6-1.511 0-2.886-.595-3.921-1.565-.637-.597-1.429-.881-2.221-.881-.838 0-1.676.318-2.329.919-1.03.948-2.389 1.527-3.879 1.527-3.218 0-5.825-2.688-5.825-6s2.607-6 5.825-6zm3.175 5h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2zm4 1h-2v1h2v-1zm4-2c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1zm0 2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm2 2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm2-2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1z"/>
                    </svg>
                  </div>
                </a>
            </li>
            <li>
                <a <?php if ($active == 'send') {echo "class='active'";
}

?> href="<?php echo site_url('send');?>">
                  <span class="hidden-xs hidden-sm">Send a Kiki</span>
                  <div class="menu-svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/>
                    </svg>
                  </div>
                </a>
            </li>
            <li class="hidden-xs hidden-sm">
                <a href="http://codepen.io/giuliacardieri/full/YNJBMO/" title="Go to Dinokiki maker! (New Window) " target="_blank">Make Your Own Dinokiki <img src="<?php echo asset_url("images/newtab.png")?>"></a>
            </li>
        </ul>
    </nav>
    <ul class="media-wrapper hidden-xs hidden-sm">
        <li class="btn-media">
            <div class="fb-like" data-href="http://dinokiki.com" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>
        </li>
        <li class="btn-media twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://dinokiki.com" data-via="mrdinokiki" data-related="ggiulia" data-hashtags="dinokiki">Tweet</a>
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
</footer>
</body>

</html>