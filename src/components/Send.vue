<template>
	<main>
		<DinoHeader />
		<section class="section section--white">
			<div class="section__container section__container--flex">
				<div class="section__img-wrapper">
					<img class="section__img" :src="require('../assets/img/dinos/dino-send.jpeg')" alt="Dinokiki wearing a uncle sam costume" />
				</div>
				<div class="section__text-wrapper">
					<h2 class="h2 h2--blue">
						Send your Kiki
					</h2>
					<p class="p p--blue">
						A kiki is an audio file that is played on Dinokiki's home page. Each kiki was recorded by a friend of Dinokiki and has a theme, chosen by its creator or me (call me Dinokiki BFF and translator).
					</p>
					<p class="p p--blue">
						If you want to send a Kiki and become a friend <strong>read the rules</strong> and click on the button below. You will be redirected to a Google Form. Dinokiki will be very glad!
					</p>
					<DinoButton text="Send your Kiki"
						aria-label="Send your kiki Google Form"
						link="https://docs.google.com/forms/d/e/1FAIpQLSfpniaETTL6X_cSzQJKKfVVSfs0m0pnD2eOm7PZb2WOLi-bjg/viewform"
						external
						blue
					/>
				</div>
			</div>
		</section>
		<section class="section">
			<div class="section__container">
				<h2 class="h2">
					Tips to record your Kiki audio file
				</h2>
				<ul class="ul">
					<li class="li">Go to a silent place.</li>
					<li class="li">Use your imagination!</li>
					<li class="li">A kiki is never boring. Dinokiki likes all kikis ;)</li>
					<li class="li">
						You can record it on your phone, but there are websites such 
						<a class="a" href="https://www.speakpipe.com/voice-recorder" target="_blank">SpeakPipe</a>
						and
						<a class="a" href="https://clyp.it/online-voice-recorder" target="_blank">Clyp</a>
						that can help you with that.
					</li>
					<li class="li">Remember your favorite songs, tv shows, cartoons or food. Maybe it can help.</li>
				</ul>
			</div>
		</section>
		<section class="section section--white">
			<div class="section__container">
				<h2 class="h2 h2--blue">
					Rules to send a Kiki
				</h2>
				<ul class="ul ul--blue">
					<li class="li">You need to be 13 or older - if you are younger ask your parents/guardians to send it for you.</li>
					<li class="li">Your Kiki needs to be respectful. No bad words. It cannot offend anyone's ethnicity, gender, appearance, nationality, workplace so on.</li>
					<li class="li">You must record your own Kiki.</li>
					<li class="li">It does not need to have a theme. You can just say kiki in the way you prefer.</li>
					<li class="li">It must be an audio file with less than 10MB.</li>
					<li class="li">You must submit a Kiki with your name and e-mail.</li>
					<li class="li">It must be different from the existing Kikis.</li>
					<li class="li">When you submit a Kiki you give all the rights to use that audio to Dinokiki.com.</li>
					<li class="li">Your name does not need to be displayed on the Dinokiki's friend page.</li>
				</ul>
				<DinoButton text="I agree! Let me send a Kiki"
					link="https://docs.google.com/forms/d/e/1FAIpQLSfpniaETTL6X_cSzQJKKfVVSfs0m0pnD2eOm7PZb2WOLi-bjg/viewform"
					external
					blue
				/>
			</div>
		</section>
		<DinoFooter/>
	</main>
</template>

<script>
import DinoHeader from './elements/Header'
import DinoFooter from './elements/Footer'
import DinoButton from './elements/Button'

export default {
	name: 'send',
	metaInfo() {
		return {
			title: 'Send a Kiki | Dinokiki',
			meta: [
				{ 
					name: 'description', 
					content: 'Dinokiki could not exist without his friend. Send a kiki audio file and become a dino friend!'
				},
				{ 
					name: 'name', 
					content: 'Send a Kiki | Dinokiki'
				},
				{
					property: "og:title",
					content: 'Send a Kiki | Dinokiki'
				},
				{ 
					name: "og:description",
					content: 'Dinokiki could not exist without his friend. Send a kiki audio file and become a dino friend!'
				},
				{
					property: "og:url",
					content: "https://dinokiki.com/send"
				},
				{
					property: "og:image",
					content: require("../assets/img/dinos/dino.png" )
				},
				{
					name: 'twitter:site',
					content: 'https://twitter.com/mrdinokiki'
				},
				{
					name: 'twitter:creator',
					content: '@mrdinokiki'
				},
				{
					name: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					property: "twitter:title",
					content: 'Send a Kiki | Dinokiki'
				},
				{ 
					name: "twitter:description",
					content: 'Dinokiki could not exist without his friend. Send a kiki audio file and become a dino friend!'
				},
				{
					key:"twitter:image",
					property: "og:url",
					content: require("../assets/img/dinos/dino.png" )
				}
			],
			script: [
				{
					type: 'application/ld+json',
					json: {
						'@context': 'http://schema.org',
						'@type': 'WebPage',
						'name': 'Send a Kiki | Dinokiki',
						'description': 'Dinokiki could not exist without his friend. Send a kiki audio file and become a dino friend!',
						'url': "https://dinokiki.com/send"
					}
				},
			]
		}
	},

	components: {
		DinoHeader,
		DinoFooter,
		DinoButton,
	},

	computed: {
		kikiData() {
			return require('./data/kikis.json').kikis
		}
	},
}
</script>