<template lang="pug">
	main.main
		<Header :page="key" />
		.main__content
			<transition name="fade" mode="out-in">
				<router-view :key="key"></router-view>
			</transition>
		<Footer :page="key" />
</template>

<script>
	import { mapState } from "vuex";
	import Header from './components/layout/Header';
	import Footer from './components/layout/Footer';
	import { qs } from '@/helpers/index';

	import { on_load_mixin } from "./system/statistics";

	export default {
		mixins: [
			on_load_mixin
		],
		components: {
			Header,
			Footer,
		},
		mounted() {
			this.updateStyle();
			window.addEventListener('resize', this.updateStyle);
			setTimeout(() => qs('.main').setAttribute('loaded', true), 200);
		},
		computed: {
			...mapState('common', {
				mobile: 'mobile',
			}),
			key() {
				return this.$route.meta.key !== undefined 
					? this.$route.meta.key : this.$route;
			},
		},
		methods: {
			updateStyle() {
				if (!this.mobile) qs('.main__content').setAttribute('style', `min-height: ${window.innerHeight - qs('.header').offsetHeight - qs('.footer').offsetHeight}px`)
			}
		}
	};
</script>

<style lang="stylus">
.main
	pos relative
</style>
