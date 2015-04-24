<?php $title="About - "?>
<?php include_once 'includes/head.php'; ?>
<?php require_once 'classes/repositorio.php' ?>
        
        <main class="text">
            <section>
                <img class="dino-photo" src="images/dino-photo.png" alt="dinokiki">
                <h2>DINOWHO?</h2>
                <p>Dinokiki is a green, cute and friendly dinosaur. He only speaks kiki and loves bow ties.</p>
                <p>Dinokiki is inspired by the website <a href="http://plspetdoge.com/">Pls Pet Doge</a> and Jerome Jarre's and Nicholas Megalis' Vine <a href="https://vine.co/v/h1i5WBUFW0K">Mama Dinosaur Finds Her Baby</a>.</p>
                <p>The idea was born from a lecture by Reddit co-founder Alexis Ohanian at Rochester Institute of Technology on February 2014. He said we should make our ideas get out of the paper and I agreed.</p>
                <p>After a long weekend and a lot of support from my friends, recording kikis in the middle of a restaurant, Dinokiki was born on February 11th 2014.</p>
            </section>
                
            <section>
                <h2>SPECIAL VERSIONS</h2>
                <div class="img-container">
                    <a href="halloween/index.html" target="_blank"><img src="images/dino-halloween.png" alt="dinokiki on halloween"/></a>
                    <a href="christmas/index.html" target="_blank"><img src="images/dino-christmas.png" alt="dinokiki on christmas"/></a>
                    <a href="index.html" target="_blank"><img src="images/dino-birthday.png" alt="dinokiki on his birthday"/></a>
                </div>
            </section>
            
            <section>
                <h2>DINOKIKI'S FRIENDS</h2>
                <p>All of these nice people sent their kikis and now they're part of Dinokiki! If you want to be a Dinokiki friend <a href="send.html">send your kiki</a> right now!</p>
                <table>
                    <?php foreach (repositorio::getFriend() as $dinofriend): ?>
                    <tr>
                        <td><?php echo $dinofriend->name ?></td>
                        <td><?php echo $dinofriend->kiki_name ?></td>
                        <?php if ($dinofriend->twitter): ?>
                          <td><a href="<?php echo $dinofriend->twitter ?>"><img src="images/twitter.png" src="twitter icon"></a></td>
                        <?php else:?>
                        <td></td>
                        <?php endif; ?>
                    </tr>
                    <?php endforeach; ?>
                </table>
            </section>
        </main>
      
       <?php include_once 'includes/footer.php'; ?>
        
    </div>
</body>

</html>