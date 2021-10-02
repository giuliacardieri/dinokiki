<template>
	<main>
		<DinoHeader />
		<Banner />
		<section class="dino"> 
			<button v-if="isOpen"
				class="dino__svg"
				@click="stopTheKiki()"
			>
				<DinoOpen aria-label="Dinokiki with his mouth open" />
			</button>
			<button v-else
				class="dino__svg"
				@click="letItKiki()"
			>
				<DinoClosed aria-label="Dinokiki with his mouth closed" />
			</button>
			<div class="dino__kiki-wrapper">
				<transition-group name="dino__show">
					<span class="dino__p"
						:style="{ left: kiki.left, top: kiki.top, fontSize: kiki.size }"
						v-for="kiki in kikiList" 
						:key="`${kiki.left}-${kiki.text}`"
						@after-leave="removeKiki()"
					>
					{{ kiki.text }}
					</span>
				</transition-group>
			</div>
		</section>
		<DinoFooter home />
	</main>
</template>

<script>
import DinoClosed from './svgs/dinoClosed'
import DinoOpen from './svgs/dinoOpen'

import DinoHeader from './elements/Header'
import DinoFooter from './elements/Footer'
import Banner from './elements/Banner'

export default {
	name: 'homepage',
	metaInfo() {
		return {
			title: 'Dinokiki',
			meta: [
				{ 
					name: 'description', 
					content: 'Dinokiki is a friendly dinosaur who speaks the Kiki language. He hopes you have fun on his website, and maybe send a Kiki!'
				},
				{ 
					name: 'name', 
					content: 'Dinokiki'
				},
				{
					property: "og:title",
					content: 'Dinokiki'
				},
				{ 
					name: "og:description",
					content: 'Dinokiki is a friendly dinosaur who speaks the Kiki language. He hopes you have fun on his website, and maybe send a Kiki!'
				},
				{
					property: "og:url",
					content: "https://dinokiki.com"
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
					content: 'Dinokiki'
				},
				{ 
					name: "twitter:description",
					content: 'Dinokiki is a friendly dinosaur who speaks the Kiki language. He hopes you have fun on his website, and maybe send a Kiki!'
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
						'name': 'Dinokiki',
						'description': 'Dinokiki is a friendly dinosaur who speaks the Kiki language. He hopes you have fun on his website, and maybe send a Kiki!',
						'url': "https://dinokiki.com"
					}
				},
			]
		}
	},

	components: {
		DinoClosed,
		DinoOpen,
		DinoHeader,
		DinoFooter,
		Banner,
	},

	computed: {
		kikiData() {
			return require('./data/kikis.json').kikis
		}
	},

	data () {
		return {
			isOpen: false,
			activeAudio: undefined,
			kikiList: [],
			animationFrame: undefined,
			kikis: undefined
		}
	},

	methods: {
		letItKiki: function () {
			this.isOpen = true
			this.animationFrame = requestAnimationFrame(this.addToKikiList)
			this.sayKiki()
		},
		stopTheKiki: function () {
			this.isOpen = false
			cancelAnimationFrame(this.animationFrame)
			this.activeAudio.pause()
		},
		removeKiki: function () {
			this.kikiList.splice(0, 1)
		},
		getRandom: function(len) {
			return Math.floor(len * Math.random())
		},
		addToKikiList: function () {
			const textList = ['ki', 'kiki', 'ki kiki', 'kikiki', 'kikikiki', 'kiki ki']
			const sizeList = ['12px', '20px', '28px', '36px', '44px', '52px']

			let left = Math.floor(Math.random() * 100) + 1
			let top = Math.floor(Math.random() * 100) + 1

			let kiki = {
				'size': sizeList[this.getRandom(sizeList.length)],
				'text': textList[this.getRandom(textList.length)],
				'left': left + '%',
				'top': top + '%',
			}

			this.kikiList.push(kiki)

			setTimeout(() => {
				this.removeKiki()
			}, 5000)

			setTimeout(() => {
				if (this.isOpen) {
					this.animationFrame = requestAnimationFrame(this.addToKikiList)
				}
			}, 500)
		},
		sayKiki: function () {
			let audioList = this.kikiData[Math.floor(this.kikiData.length * Math.random())]
			let audio = new Audio(require('../assets/audios/' + audioList.file_name + '.mp3'))

			audio.loop = true
			audio.play()

			this.activeAudio = audio
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';

.dino {
	display: flex;
	justify-content: center;
	margin: 0 auto 32px auto;
	max-width: 1440px;
	width: 100%;
}

.dino__svg {
	background-color: transparent;
	border: 0;
	cursor: pointer;
	width: 90%;

	@media (min-width: $min-md) {
		width: 60%;
	}

	svg {
		width: 100%;
	}
}

.dino__p {
	color: $white;
	font-family: 'Code';
	margin: 0;
	position: fixed;
	z-index: 3;
}

.dino__show-enter-active {
	transition: opacity 0.5s ease-in;
}

.dino__show-leave-active {
	transition: opacity 0.5s ease-in reverse;
}

.dino__show-enter, .dino__show-leave-to {
	opacity: 0;
}

.dino__kiki-wrapper {
	z-index: 3;
}
</style>