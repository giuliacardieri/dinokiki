<template>
	<div class="kiki-card"
	>
		<img class="kiki-card__img"
			:src="require(`../../assets/img/${data.img}`)"
			:alt="data.name"
		/>
		<div class="kiki-card__back">
			<h3 class="kiki-card__h3">{{ data.name }}</h3>
			<p class="kiki-card__p">{{ data.friend_name }}</p>
			<DinoButton v-if="!playing" class="kiki-card__button"
				text="Play Kiki"
				@click.native="setPlayKiki"
			/>
			<DinoButton v-else
				class="kiki-card__button"
				text="Pause Kiki"
				@click.native="setPauseKiki"
			/>
		</div>
		<span v-if="data.new"
			class="kiki-card__banner"
		>
			New!
		</span>
	</div>
</template>

<script>
import DinoButton from './Button'

export default {
	name: 'KikiCard',

	components: {
		DinoButton,
	},

	watch: {
		pausedKiki: function(isPaused) {
			if (isPaused)
				this.playing = false;
		}
	},

	props: {
		data: {
			type: Object,
			required: true,
		},
		pausedKiki: {
			type: Boolean,
			required: true,
		}
	},

	data () {
		return {
			playing: undefined,
		}
	},

	methods: {
		setPlayKiki: function () {
			this.playing = true;
			this.$emit('playKiki', this.data.file_name);
		},
		setPauseKiki: function () {
			this.playing = false;
			this.$emit('pauseKiki');
		},
	}
}
</script>

<style lang="scss">
@import '../../assets/css/variables';

.kiki-card {
	box-sizing: border-box;
	cursor: pointer;
	line-height: 0;
	position: relative;
}

.kiki-card__img {
	border-radius: $border-radius;
	height: 100%;
	width: 100%;
}

.kiki-card:hover .kiki-card__back {
	opacity: 1;
}

.kiki-card:hover .kiki-card__banner {
	display: none;
}

.kiki-card__banner {
	background-color: $blue;
	border-radius: $border-radius;
	font-weight: bold;
	left: 0;
	padding: 16px;
	position: absolute;
	top: 0;
}

.kiki-card__back {
	background-color: $blue-darker;
	border-radius: $border-radius;
	box-sizing: border-box;
	color: $white;
	height: 100%;
	left: 0;
	padding: 24px;
	position: absolute;
	opacity: 0;
	transition: opacity .3s ease-in-out;
	top: 0;
	width: 100%;
}

.kiki-card__h3 {
	font-size: 1.5rem;
	line-height: 1.6;
	margin: 0;
}

.kiki-card__p {
	font-size: 1.25rem;
	line-height: 1.6;
	margin: 0;
}

.kiki-card__button {
	pointer-events: none;
}

.kiki-card:hover .kiki-card__button {
	pointer-events: all;
}
</style>