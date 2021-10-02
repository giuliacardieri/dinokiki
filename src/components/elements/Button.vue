<template>    
	<a v-if="external && link"
		:href="link"
		:class="[ blue ? 'button--blue' : '', 'button' ]"
		target="_blank"
		:aria-label="ariaLabel"
	>
		{{ text }}
	</a>
	<router-link v-else-if="link"
		:to="link"
		:class="[ blue ? 'button--blue' : '', 'button' ]"
		:aria-label="ariaLabel"
	>
		{{ text }}
	</router-link>
	<button v-else
		:class="[ blue ? 'button--blue' : '', 'button' ]"
		:aria-label="ariaLabel"
	>
		{{ text }}
	</button>
</template>

<script>

export default {
	name: 'DinoButton',
	props: {
		link: {
			type: String,
			required: false,
		},
		text: {
			type: String,
			required: true,
		},
		external: {
			type: Boolean,
			required: false,
		},
		blue: {
			type: Boolean,
			required: false,
		},
		ariaLabel: {
			type: String,
			required: false,
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables';

.button {
	background-color: $white;
	border: 0;
	border-radius: 5px;
	color: $blue-darker;
	cursor: pointer;
	display: inline-block;
	padding: 10px 20px;
	margin-top: 24px;
	text-decoration: none;
	transition: transform 0.3s ease-in-out;

	&:hover,
	&:focus {
		text-decoration: underline;
		transform: scale(1.05);
	}
}

.button--blue {
	background-color: $blue;
	color: $white;
}
</style>