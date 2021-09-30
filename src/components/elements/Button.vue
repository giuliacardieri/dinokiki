<template>    
	<a v-if="external && link"
		:href="link"
		:class="[ blue ? 'button--blue' : '', 'button' ]"
		target="_blank"
	>
		{{ text }}
	</a>
	<router-link v-else-if="link"
		:to="link"
		:class="[ blue ? 'button--blue' : '', 'button' ]"
	>
		{{ text }}
	</router-link>
	<button v-else
		:class="[ blue ? 'button--blue' : '', 'button' ]"
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

	@media (min-width: $min-md) {
		&:hover {
			transform: scale(1.05);
		}
	}
}

.button--blue {
	background-color: $blue;
	color: $white;
}
</style>