<template>
	<header class="header">
		<h1 class="header__h1">
			<router-link class="header__title" 
				to="/"
			>
				Hello, I'm Dinokiki and this is my home!
			</router-link>
		</h1>
		<nav>
			<ul class="header__nav-wrapper">
				<li class="header__li">
					<router-link class="header__a"
						to="/"
					>
						Home
					</router-link>
				</li>
				<li class="header__li">
					<router-link class="header__a"
						to="/about"
					>
						About
					</router-link>
				</li>
				<!-- <li class="header__li">
					<router-link class="header__a"
						to="/games"
					>
						Games
					</router-link>
				</li> -->
				<li class="header__li">
					<router-link class="header__a"
						to="/send"
					>
						Send your Kiki
					</router-link>
				</li>
			</ul>
		</nav>
	</header> 
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style lang="scss">
@import '../../assets/css/variables';

.header {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	padding: 24px;
	margin: auto;
	max-width: 1440px;
	width: 100%;
	z-index: 2;
	
	@media (min-width: $min-md) and (max-width: $max-md) {
		flex-direction: column;
	}
	
	@media (min-width: $min-md) {
		justify-content: space-between;
		padding: 32px;
	}
}

.header__h1 {
	margin: 0;

	@media (max-width: $max-sm) {
		text-align: center;
	}

	@media (min-width: $min-md) and (max-width: $max-md) {
		margin-bottom: 8px;
	}
}

.header__title {
	color: $white;
	font-family: 'Code';
	font-size: 1.5rem;
	margin: 0;
	text-decoration: none;
	text-transform: uppercase;

	@media (min-width: $min-sm) {
		font-size: 2rem;
	}
}

.header__nav-wrapper {
	display: none;
	justify-content: center;
	margin: 0;
	padding: 0;

	@media (min-width: $min-md) {
		display: flex;
	}
}

.header__li {
	list-style: none;
}

.header__a {
	color: $white;
	margin: 0;
	padding: 0 16px;
	text-decoration: none;
	text-transform: uppercase;

	&.router-link-exact-active {
		font-weight: 600;
	}

	&:hover,
	&:focus {
		text-decoration: underline;
	}
}
</style>