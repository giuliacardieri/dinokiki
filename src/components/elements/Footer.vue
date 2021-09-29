<template>
	<footer class="footer">
		<nav>
			<ul class="footer__nav-wrapper">
				<li class="footer__li">
					<router-link class="footer__a"
						to="/"
						aria-label="Go to homepage"
					>
						<IconHome class="footer__svg" />
					</router-link>
				</li>
				<li class="footer__li">
					<router-link class="footer__a"
						to="/about"
						aria-label="Go to about page"
					>        
						<IconAbout class="footer__svg" />
					</router-link>
				</li>
				<li class="footer__li">
					<router-link class="footer__a"
						to="/game"
						aria-label="Go to Games page"
					>
						<IconGame class="footer__svg" />
					</router-link>
				</li>
				<li class="footer__li">
					<router-link class="footer__a"
						to="/send"
						aria-label="Go to Kiki page"
					>
						<IconKiki class="footer__svg" />
					</router-link>
				</li>
			</ul>
		</nav>
	</footer>
</template>

<script>
import IconHome from '../svgs/iconHome'
import IconAbout from '../svgs/iconAbout'
import IconGame from '../svgs/iconGame'
import IconKiki from '../svgs/iconKiki'

export default {
	name: 'homepage',

	components: {
		IconHome,
		IconAbout,
		IconGame,
		IconKiki,
	},
}
</script>

<style lang="scss">
@import '../../assets/css/modules/variables';

.footer {
	background-color: $white;
	border-top: 1px solid $grey-trans;
	bottom: 0;
	box-sizing: border-box;
	padding: 16px;
	position: fixed;
	width: 100%;
	@media (min-width: $min-md) {
		display: none;
	}
}

.footer__nav-wrapper {
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 0;
	@media (min-width: $min-sm) and (max-width: $max-sm) {
		margin: auto;
		max-width: 60%;
	}
}

.footer__li {
	list-style: none;
}

.footer__a {
	padding: 8px;

	&.router-link-exact-active .footer__svg {
		fill: $grey;
	}
}
</style>