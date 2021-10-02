<template>
	<aside v-if="!closed"
		class="banner"
	>
		<div class="banner__container">
			<h2 class="banner__h2">
				We have new kikis! Check out the
				<router-link class="a a--blue" to="/about">About page</router-link>
				for more info.
			</h2>
			<button class="banner__button"
				@click="closeBanner"
			>
				X
			</button>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'banner',

	data () {
		return {
			closed: false,
		}
	},

	methods: {
		closeBanner: function () {
			this.closed = true;
		},
	}
}
</script>

<style lang="scss">
@import '../../assets/css/variables';

.banner {
	background-color: $white;
	bottom: 0;
	box-sizing: border-box;
	padding: 8px;
	position: fixed;
	width: 100%;
}

.banner__container {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	flex: 1 0 0;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 1440px;
	padding: 0 48px;
	width: 100%;
}

.banner__h2 {
	color: $blue-darker;
	font-size: 1rem;
	margin: 0;
	text-align: center;
	text-transform: uppercase;
}

.banner__button {
	background-color: transparent;
	border: 0;
	color: $blue-darker;
	cursor: pointer;
	font-size: 1.25rem;

	&:focus {
		border: 1px dotted $blue;
	}
}
</style>