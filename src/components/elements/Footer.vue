<template>
	<footer class="footer">
		<nav class="footer__nav">
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
				<!-- <li class="footer__li">
					<router-link class="footer__a"
						to="/game"
						aria-label="Go to Games page"
					>
						<IconGame class="footer__svg" />
					</router-link>
				</li> -->
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
		<p class="footer__p">&copy; Copyright {{ year }} - 
			<a class="a" href="mailto:dinokikiteam@gmail.com">Dinokiki Team</a>
		</p>
	</footer>
</template>

<script>
import IconHome from '../svgs/iconHome'
import IconAbout from '../svgs/iconAbout'
import IconKiki from '../svgs/iconKiki'

export default {
	name: 'homepage',

	props: {
		home: {
			type: Boolean,
			required: false,
		}
	},

	components: {
		IconHome,
		IconAbout,
		IconKiki,
	},

	computed: {
		year() {
			return new Date().getFullYear();
		}
	},
}
</script>

<style lang="scss">
@import '../../assets/css/variables';

.footer {
	background-color: $blue;
	box-sizing: border-box;
	padding: 8px;
	width: 100%;

	@media (max-width: $max-sm) {
		background-color: $white;
		bottom: 0;
		position: fixed;
		padding: 16px;
	}
}

.footer__p {
	color: $white;
	margin: 0;
	text-align: center;

	@media (max-width: $max-sm) {
		display: none;
	}
}

.footer__nav {
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