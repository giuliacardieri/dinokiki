<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:url" content="http://dinokiki.com" />
    <meta property="og:title" content="Dinokiki" />
    <meta property="og:site_name" content="Dinokiki" />
    <meta property="og:image" content="http://dinokiki.com/images/play-game.png" />
    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-48013923-5', 'dinokiki.com');
        ga('send', 'pageview');
    </script>
    <title><?php echo $title . " - Dinokiki"?></title>
    <link rel="stylesheet" href="<?php echo asset_url('css/dinostyle.css'); ?>">
    <link rel="shortcut icon" href="<?php echo asset_url('favicon.ico'); ?>">
    <script>var base_url = "<?php echo base_url(); ?>";</script>
    <script src="<?php echo asset_url('js/jquery.min.js'); ?>"></script>
    <script src="<?php echo asset_url('js/jquery.mobile.custom.min.js'); ?>"></script>
    <script src="<?php echo asset_url('js/dinoscript.js'); ?>"></script>
</head>

<body>
    <div id="fb-root"></div>
    <script>
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>

    <div class="content">

        <header>         
            <button class="menu-icon" type="button" id="menu-btn">
                <span class="menu-btn-span">&#9776;</span>
            </button>
            <h1><a href="<?php echo site_url('home'); ?>">Hello, I'm Dinokiki and this is my home!</a></h1>
        </header>