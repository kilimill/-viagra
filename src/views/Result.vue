<template lang="pug">
	.result
		.result__hero
			img(:src="results[resultScreen].bg").result__bg
			.result__mobile-bg(:style="{ backgroundImage: 'url(' + results[resultScreen].mobilebg + ')' }", v-if="mobile")
			.result__undertitle Результат
			.result__title(v-html="results[resultScreen].title")
			.result__text {{results[resultScreen].subtitle}}
			.result__share
				yandex-share(:services="services", :contentByService="contentByService", :title="title", :description="description", :image="image", :url="url", @share="share")
				button(type="button", @click="restart()").result__restart Начать заново
			.result__scroll(v-if="!mobile") Прокрутить вниз, чтобы узнать больше
		.result__screen.result__screen--one.h-anim
			span.result__screen-numb 01
			.result__screen-title(v-html="results[resultScreen].sections[0].title")
			<r11 class="result__screen-decor-one" v-if="resultScreen == 0"/>
			<r21 class="result__screen-decor-two" v-if="resultScreen == 1"/>
			.result__screen-text
				p(v-html='results[resultScreen].sections[0].text')
		.result__screen.result__screen--two.h-anim
			span.result__screen-numb 02
			.result__screen-title(v-html="results[resultScreen].sections[1].title")
			<r12 class="result__screen-decor-one" v-if="resultScreen == 0"/>
			<r22 class="result__screen-decor-two" v-if="resultScreen == 1"/>
			.result__screen-text
				p(v-html='results[resultScreen].sections[1].text')
		.result__screen.result__screen--three.h-anim
			span.result__screen-numb 03
			.result__screen-title(v-html="results[resultScreen].sections[2].title")
			<r13 class="result__screen-decor-one" v-if="resultScreen == 0"/>
			<r23 class="result__screen-decor-two" v-if="resultScreen == 1"/>
			.result__screen-text
				p(v-html='results[resultScreen].sections[2].text')
		.result__screen.result__screen--four.h-anim
			span.result__screen-numb 04
			.result__screen-title(v-html="results[resultScreen].sections[3].title")
			<r14 class="result__screen-decor-one" v-if="resultScreen == 0"/>
			<r24 class="result__screen-decor-two" v-if="resultScreen == 1"/>
			.result__screen-text
				p(v-html='results[resultScreen].sections[3].text')
		.result__screen.result__screen--fifth.h-anim
			span.result__screen-numb 05
			.result__screen-title(v-html="results[resultScreen].sections[4].title")
			<r15 class="result__screen-decor-one" v-if="resultScreen == 0"/>
			<r25 class="result__screen-decor-two" v-if="resultScreen == 1"/>
			.result__screen-text
				p(v-html='results[resultScreen].sections[4].text')
		.result__footer.h-anim
			.result__footer-title 
				.result__footer-title-word
					p Уверенность
				.result__footer-title-word
					p и&nbsp;здоровье —
				br
				.result__footer-title-word
					p ваш
				.result__footer-title-word
					p собственный
				.result__footer-title-word
					p выбор
			p.result__footer-subtitle Узнайте про ваши возможности	
				br(v-if="this.mobile")
				| на 
				a(href="https://gra-via.com/?utm_source=Championat&utm_medium=display&utm_content=logo&utm_campaign=Pfizer_Viagra_SP_oct_nov_20", target="_blank") gra-via.com
</template>

<script>
	import { mapState } from 'vuex';
	import { qs, scrollTo, elemVisCheck } from '@/helpers/index';
	import YandexShare from "@cookieseater/vue-yandex-share";

	import r11 from '@/assets/svg/r1-1.svg'
	import r12 from '@/assets/svg/r1-2.svg'
	import r13 from '@/assets/svg/r1-3.svg'
	import r14 from '@/assets/svg/r1-4.svg'
	import r15 from '@/assets/svg/r1-5.svg'
	import r21 from '@/assets/svg/r2-1.svg'
	import r22 from '@/assets/svg/r2-2.svg'
	import r23 from '@/assets/svg/r2-3.svg'
	import r24 from '@/assets/svg/r2-4.svg'
	import r25 from '@/assets/svg/r2-5.svg'

	export default {
		components: {
			r11,
			r12,
			r13,
			r14,
			r15,
			r21,
			r22,
			r23,
			r24,
			r25,
			YandexShare,
		},
		mounted() {
			document.querySelectorAll('.result__screen-decor-two').forEach(function(el) {
				console.log(el.querySelector('path').getTotalLength())
			})

			elemVisCheck();

			setTimeout(() => {
				qs('.result').setAttribute('loaded', true);
			}, 200);

			document.addEventListener('click', (e) => {
				e.stopImmediatePropagation();
				for (let target = e.target; target && target != this && target !== document.body; target = target.parentNode) {
					if (target.matches('.js-href')) {
						let event = e.target.getAttribute('data-event');
						this.$root.sendGA('external', 'click', event);
						break;
					}
				}
			}, false);
		},
		computed: {
			...mapState('common', {
				mobile: 'mobile',
			}),
			...mapState('result', {
				results: 'results',
			}),
			...mapState('test', {
				points: 'points'
			}),
			resultScreen() {
				if (this.points >= 3) {
					return 1
				} else {
					return 0
				}
			},
			title() {
				if (this.points >= 3) {
					return 'Достигаю цели и беру от жизни все';
				} else {
					return 'Наслаждаюсь жизнью как никто другой';
				}
			},
			description() {
				if (this.points >= 3) {
					return 'Иногда полезно расслабиться, но жизнь это борьба. Не согласен?';
				} else {
					return 'Одно удачное свидание - и я на вершине мира! А у тебя как?';
				}
			},
			image() {
				if (this.points >= 3) {
					return `${location.origin}/share_2.png`;
				} else {
					return `${location.origin}/share_1.png`;
				}
			},
			url() {
				let url = location.origin + '/';
				let pictSrc;
				if (this.points >= 3) {
					pictSrc = 2
				} else {
					pictSrc = 1
				}
				return `${url}${pictSrc}`;
			},
			contentByService() {
				return {
					vkontakte: {
						title: this.title+' '+this.description
					},
					odnoklassniki: {
						title: this.title,
						description: this.description,
					},
					twitter : {
						title: this.title,
					},
					facebook: {
						title: this.title,
					}
				}
			},
		},
		methods: {
			scroll() {
				this.$root.sendGA("internal", "click", 'scroll_vniz');
				scrollTo(qs('.result__screen'), 500)
			},
			share(name) {
				if (this.points >= 3) {
					this.$root.sendGA("external", "click", `share_udovolstvie_${name}`);
				} else {
					this.$root.sendGA("external", "click", `share_uspex_${name}`);
				}
			},
			restart() {
				this.$root.sendGA("internal", "click", 'nachat_zanovo');
				this.$store.commit('test/RESTART');
				this.$router.push({name: 'Test'});
			}
		},
		data() {
			return {
				animate: false,
				services: [
					'facebook',
					'twitter',
					'vkontakte',
					// 'odnoklassniki',
					// 'telegram',
				],
			}
		}
	}
</script>>
