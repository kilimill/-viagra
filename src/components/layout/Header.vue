<template lang="pug">
	header.header(:class="{centered: page==2 || page==3}")
		a(href="https://gra-via.com/?utm_source=Championat&utm_medium=display&utm_content=logo&utm_campaign=Pfizer_Viagra_SP_oct_nov_20", target="_blank", @click="$root.sendGA('external', 'click', 'logo_gravia')").header__gravia
			<gravia class="header__gravia-logo"/>
		.header__container
			span.header__spec спецпроект
			a(href="https://www.championat.com/", target="_blank", @click="$root.sendGA('external', 'click', 'logo_chempionat')").header__champ
				<champ class="header__champ-logo"/>

</template>

<script>
	import gravia from '@/assets/svg/gravia.svg';
	import champ from '@/assets/svg/champ.svg';

	export default {
		components: {
			gravia,
			champ
		},
		props: {
			page: {
				type: Number,
				required: true,
			},
		}
	}
</script>
