<template lang="pug">
	section.intro
		.intro__wrap.intro__title
			p.intro__title Новая
		.intro__wrap.intro__title.intro__title--last
			p мужественность:
		.intro__wrap.intro__subtitle
			p как брать
		.intro__wrap.intro__subtitle.intro__subtitle--last
			p от жизни свое?
		.intro__container
			.intro__text
				p У мужчин есть две глобальные стратегии на пути к исполнению желаний. Первая: поставить цель и добиваться ее всеми возможными способами. Вторая: никуда не спешить и наслаждаться каждым моментом в жизни. Ответьте на несколько вопросов, чтобы понять, какая из этих дорог ваша — в бизнесе, сексе, спорте, отдыхе и здоровье
			.intro__play
				button(type="button", @click="startTest()") Начать
</template>

<script>
	import { qs } from '@/helpers/index';

	export default {
		methods: {
			startTest() {
				this.$root.sendGA('internal', 'click', 'nachat');
				this.$router.push('/test');
			}
		},
		mounted() {
			setTimeout(() => qs('.intro').setAttribute('loaded', true), 200);
		}
	}
</script>
