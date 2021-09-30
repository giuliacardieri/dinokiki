<template>
	<main>
		<DinoHeader />
		<section class="section section--white">
			<div class="section__container section__container--flex">
				<div class="section__img-wrapper">
					<img class="section__img" src="/img/dinos/dino.png" alt="Dinokiki wearing a red bow tie" />
				</div>
				<div class="section__text-wrapper">
					<h2 class="h2 h2--blue">
						DINOWHO?
					</h2>
					<p class="p p--blue">
						Dinokiki is a green, cute and friendly dinosaur. He only speaks kiki language and loves bow ties. He's inspired by the website
						<a class="a a--blue" href="http://plspetdoge.com/" target="_blank">Pls Pet Doge</a>
						and Jerome Jarre's and Nicholas Megalis' Vine
						<a class="a a--blue" href="https://vine.co/v/h1i5WBUFW0K" target="_blank">Mama Dinosaur Finds Her Baby</a>.
						The idea was born from a lecture by Reddit co-founder Alexis Ohanian at Rochester Institute of Technology on February 2014. He said we should make our ideas get out of the paper. After a long weekend and support from my friends, who recorded audios in the middle of a restaurant, Dinokiki was born on February 11th, 2014.
					</p>
				</div>
			</div>
		</section>
		<section class="section">
			<div class="section__container">
				<h2 class="h2">
					Who recorded the Kikis?
				</h2>
				<p class="p">
					People from all over the world! And hopefully, <strong>you!</strong>
				</p>
				<p class="p">
					A kiki is an audio file that is played on Dinokiki's home page. Each kiki was recorded by a friend of Dinokiki and has a theme, chosen by me (The only member of the Dinokiki Team, who translates everything he says into English and Portuguese). You can check the Kiki Gallery in the section below.</p>
				<p class="p">
					You can record a kiki and become a Dinokiki friend. If you are interested just check out
					<router-link to="/send" class="a">send your kiki page</router-link>.
					Dinokiki will be honored to be your friend!.
				</p>
				<p class="p">
					I might take a long time to include your kiki, but I'll email you as soon as I included it.
				</p>
				<DinoButton text="Let me send a Kiki!"
					link="/send"
				/>
			</div>
		</section>
		<section class="section section--white">
			<div class="section__container">
				<h2 class="h2 h2--blue">
					DINOKIKI'S FRIENDS GALLERY
				</h2>
				<KikiGallery :data="kikiData" /> 
			</div>
		</section>
		<DinoFooter/>
	</main>
</template>

<script>
import DinoHeader from './elements/Header'
import DinoFooter from './elements/Footer'
import DinoButton from './elements/Button'
import KikiGallery from './elements/KikiGallery'

export default {
	name: 'about',

	components: {
		DinoHeader,
		DinoFooter,
		DinoButton,
		KikiGallery,
	},

	computed: {
		kikiData() {
			return require('./data/kikis.json').kikis
		}
	},
}
</script>