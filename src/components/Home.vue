<template>
	<main>
		<DinoHeader />
		<section class="dino"> 
			<div v-if="isOpen"
				class="dino__svg"
				@click="stopTheKiki()"
			>
				<DinoOpen aria-label="Dinokiki with his mouth open" />
			</div>
			<div v-else
				class="dino__svg"
				@click="letItKiki()"
			>
				<DinoClosed aria-label="Dinokiki with his mouth closed" />
			</div>
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

export default {
	name: 'homepage',

	components: {
		DinoClosed,
		DinoOpen,
		DinoHeader,
		DinoFooter,
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
			let audio = new Audio(require('../../public/audios/' + audioList.file_name + '.mp3'))

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
	margin: 0 auto;
	max-width: 1440px;
	padding-top: 64px;
	width: 100%;
}

.dino__svg {
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