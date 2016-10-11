<span class="close-icon">X</span>
<img src="<?php echo asset_url('images/' . $kiki['img'] . '.png'); ?>" alt="<?php echo $kiki['name']; ?>"/>
<div class="modal-text-content">
	<h3><?php echo $kiki['name']; ?></h3>
	<h4>By 
	<?php 
		foreach ($kiki['0'] as $key => $friend) {
			echo $friend[0]['name'];
			if ($key != sizeof($kiki['0'])-1)
				echo ', ';
		} 
	?>
	</h4> 
	<?php 
		foreach ($kiki['0'] as $key => $friend) {
			if (!is_null($friend[0]['twitter']))
				echo "<a href=http://twitter.com/" . $friend[0]['twitter'] . " target='_blank'><img src='" . asset_url('images/twitter.png') . "' alt='Twitter Icon' /></a>";
		} 
	?>
	<?php echo "<img class='audio' data-href='" . $kiki['file_name'] . "' src='" . asset_url('images/audio.png') . "' alt='Audio Icon' /></a>"; ?>
</div>