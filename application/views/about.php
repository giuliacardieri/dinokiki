    <div class="dino-modal hidden"></div>
    <main class="text">    
    <section class="big-photo">
        <img src="<?php echo asset_url('images/about-bg.png'); ?>" alt="about dinokiki with infos" />
    </section>
    <section>
        <h2>DINOWHO?</h2>
        <p>Dinokiki is a green, cute and friendly dinosaur. He only speaks kiki and loves bow ties. He's inspired by the website <a href="http://plspetdoge.com/" target="_blank">Pls Pet Doge</a> and Jerome Jarre's and Nicholas Megalis' Vine <a href="https://vine.co/v/h1i5WBUFW0K" target="_blank">Mama Dinosaur Finds Her Baby</a>. The idea was born from a lecture by Reddit co-founder Alexis Ohanian at Rochester Institute of Technology on February 2014. He said we should make our ideas get out of the paper and I agreed. After a long weekend and support from my friends, recording kikis in the middle of a restaurant, Dinokiki was born on February 11th 2014.</p>
    </section>
    <section class="dark hidden">
        <div class="img-container">
            <h2>SPECIAL VERSIONS</h2>
            <a href="../halloween/index.html" target="_blank">
                <img src="<?php echo asset_url('images/dino-halloween.png'); ?>" alt="dinokiki on halloween" />
            </a>
            <a href="../christmas/index.html" target="_blank">
                <img src="<?php echo asset_url('images/dino-christmas.png'); ?>" alt="dinokiki on christmas" />
            </a>
            <a href="../birthday/index.html" target="_blank">
                <img src="<?php echo asset_url('images/dino-birthday.png'); ?>" alt="dinokiki on his birthday" />
            </a>
        </div>
    </section>
    <section class="dark">
        <div class="img-container">
            <h2>DINOKIKI'S FRIENDS GALLERY</h2>
            <?php foreach ($kikis as $kiki): ?>
                <div class="dino-friend-wrapper">
                    <div class="dino-friend">
                        <img data-href="<?php echo site_url('about/load_kiki_info/'.$kiki['id']); ?>" src="<?php echo asset_url('images/' . $kiki['img'] . '.png'); ?>" alt="<?php echo $kiki['name']; ?>"/>
                    </div>  
                </div>
            <?php endforeach; ?>  
        </div>
    </section>
</main>