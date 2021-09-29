<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>

export default {
	name: 'Dinokiki',
}
</script>

<style lang="scss">
@import './assets/css/modules/variables';

@import './assets/css/blocks/button.scss';
@import './assets/css/blocks/section.scss';

@import './assets/css/blocks/kiki-gallery.scss';

@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

@font-face {
	font-family: Code;
	src: url(./assets/fonts/Code_Pro_Demo-webfont.ttf);
	font-weight: normal;
}

body {
	background-color: $blue;
	color: $white;
	font-family: 'Raleway', sans-serif;
	line-height: 1.6;
	margin: 0 auto;
	padding: 0;
	overflow-x: hidden;
	width: 100%;
}

.app__main {
	@media (max-width: $max-sm) {
		margin-bottom: 56px;
	}
}
</style>
