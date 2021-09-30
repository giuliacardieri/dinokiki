<template>
	<main>
		<DinoHeader />
		<section class="section section--white">
			<div class="section__container section__container--flex">
				<div class="section__flex-img-wrapper">
					<img class="section__img"
						src="/img/dinos/dino-gamer.jpeg"
						alt="Dinokiki using gamer headphones"
					/>
				</div>
				<div class="section__text-wrapper">
					<h2 class="h2 h2--blue">
						Dinokiki's Games
					</h2>
					<p class="p p--blue">
						Dinokiki believes that
						<span class="p--bold">games are not only fun but can also teach something!</span>
					</p>
					<p class="p p--blue">
						Dinokiki's games are fun and also help you to learn something. Have fun!
					</p>
				</div>
			</div>
		</section>
		<section class="section">
			<div class="section__container">
				<h2 class="h2">
					Let's Play!
				</h2>
				<KikiGallery :data="kikiData"
					isGame="true"
				/>
			</div>
		</section>
		<DinoFooter/>
	</main>
</template>

<script>
import DinoHeader from './elements/Header'
import DinoFooter from './elements/Footer'
import KikiGallery from './elements/KikiGallery'

export default {
	name: 'game',

	components: {
		DinoHeader,
		DinoFooter,
		KikiGallery,
	},

	computed: {
		kikiData() {
			return require('./data/games.json').games
		}
	},
}
</script>