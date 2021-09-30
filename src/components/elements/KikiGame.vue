<template>
	<a class="kiki-game"
		:href="data.link"
		target="_blank"
	>
		<img class="kiki-game__img"
			:src="`/img/${data.img}`"
			:alt="data.name"
		/>
		<div class="kiki-game__text">
			<h3 class="kiki-game__h3">
				{{ data.name }}
			</h3>
			<p class="kiki-game__p">
				{{ data.description }}
			</p>
		</div>
	</a>
</template>

<script>
export default {
	name: 'KikiGame',
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss">
@import '../../assets/css/variables';

.kiki-game {
	box-sizing: border-box;
	cursor: pointer;
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	grid-template-rows: minmax(0, 1fr) minmax(0, 0.5fr);
	text-decoration: none;
	transition: transform 0.3s ease-in-out;

	&:hover,
	&:focus {
		transform: scale(1.025);
	}

	@media (min-width: $min-md) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: minmax(0, 1fr);
	}
}

.kiki-game__img {
	border-radius: $border-radius $border-radius 0 0;
	width: 100%;

	@media (min-width: $min-md) {
		border-radius: $border-radius 0 0 $border-radius;
	}
}

.kiki-game__text {
	background-color: $white-trans;
	border-radius: 0 0 $border-radius $border-radius;
	box-sizing: border-box;
	color: $blue;
	padding: 24px;
	width: 100%;

	@media (min-width: $min-md) {
		border-radius: 0 $border-radius $border-radius 0;
	}
}

.kiki-game__h3 {
	font-size: 1.5rem;
	line-height: 1.6;
	margin: 0;
}

.kiki-game__p {
	line-height: 1.6;
	margin: 8px 0 0 0;
}
</style>