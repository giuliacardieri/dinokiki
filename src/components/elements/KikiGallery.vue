<template>
	<div v-if="isGame"
		class="kiki-gallery kiki-gallery--gap"
	>
		<KikiGame v-for="(kiki, index) in kikiData"
			:key="index"
			:data="kiki"
		/>
	</div>
	<div v-else
		class="kiki-gallery"    
	>
		<KikiCard v-for="(kiki, index) in kikiData"
			:key="index"
			:data="kiki"
		/>
	</div>
</template>

<script>
import KikiCard from './KikiCard'
import KikiGame from './KikiGame'

export default {
	name: 'KikiGallery',

	components: {
		KikiCard,
		KikiGame,
	},

	props: {
		data: {
			type: Array,
			required: true,
		},
		isGame: {
			type: Boolean,
			required: false,
		},
	},

	computed: {
		kikiData() {
			return this.orderAlphabetically(this.data)
		}
	},

	methods: {
		orderAlphabetically: function(arr) {
			arr.sort((a,b) => {
				if ( a.name < b.name ){
					return -1;
				}
				if ( a.name > b.name ){
					return 1;
				}
				return 0;
			})
			return arr;
		}
	}
}
</script>

<style lang="scss">
@import '../../assets/css/variables';

.kiki-gallery {
	align-items: center;
	display: grid;
	grid-template-columns: 100%;
	margin-top: 24px;
	width: 100%;

	@media (min-width: $min-sm) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (min-width: $min-md) {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}
}

.kiki-gallery--gap {
	align-items: stretch;
	gap: 24px;

	@media (min-width: $min-sm) {
		grid-template-columns: auto auto;
	}
}
</style>