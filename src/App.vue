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
@import './assets/css/variables';

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

main {
	@media (max-width: $max-sm) {
		padding-bottom: 64px;
	}
}

.section {
	padding: 24px;

	@media (min-width: $min-sm) {
		padding: 48px;
	}
}

.section__container {
	margin: 0 auto;
	max-width: 1440px;
}

.section__container--flex {
	align-items: center;
	display: flex;
	justify-content: flex-start;

	@media (max-width: $max-sm) {
		align-items: flex-start;
		flex-direction: column;
	}
}

.section--white {
	background-color: $white-trans;
}

.section__img {
  border-radius: 100%;
  width: 256px;

  @media (max-width: $max-sm) {
	margin-bottom: 24px;
  }
}

@media (min-width: $min-md) {
	.section__text-wrapper {
		padding-left: 48px;
	}
}

.h2 {
	font-size: 1.75rem;
	margin: 0 0 8px;
	text-transform: uppercase;

	@media (max-width: $max-sm) {
		font-size: 1.25rem;
	}
}
  
.h2--blue {
	color: $blue-darkest;
}

.p {
	margin: 0;

	+ .p {
		margin-top: 4px;
	}
}

.p--blue {
	color: $blue-darkest;
}

.p--bold {
	font-weight: 700;
}

.ul {
	margin: 0;
	padding: 0 0 0 16px;
}

.ul--blue {
	color: $blue;
}

.a {
	color: $white;
	font-weight: 600;
	transition: color 0.3s ease-in-out;

	&:hover,
	&:focus {
		color: $whitish;
	}
}

.a--blue {
	color: $blue;

  &:hover,
  &:focus {
	color: $blue-darkest;
  }
}
</style>
