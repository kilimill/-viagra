<template lang="pug">
	section.test
		.test__container
			.test__current
				.test__current-numb
					span.test__current-numb-zero 0
					<IOdometer class="iOdometer" :value="currentQuestion"/>
				b /05
			.test__question(v-html="questions[currentQuestion].text")
		.test__answers
			button(type="button", v-for="item in questions[currentQuestion].answers", @click="nextQuestion(item.correct, item.text)", v-html="item.text").test__answer
		.test__decor
			<q1 class="test__decor-el test__decor-el--one" v-if="currentQuestion == 1" :key="1"/>
			<q2 class="test__decor-el test__decor-el--two" v-if="currentQuestion == 2" :key="2"/>
			<q3 class="test__decor-el test__decor-el--three" v-if="currentQuestion == 3" :key="3"/>
			<q4 class="test__decor-el test__decor-el--four" v-if="currentQuestion == 4" :key="4"/>
			<q5 class="test__decor-el test__decor-el--fifth" v-if="currentQuestion == 5" :key="5"/>

</template>

<script>
	import { qs } from '@/helpers/index';
	import IOdometer from 'vue-odometer';
	import 'odometer/themes/odometer-theme-default.css';
	import { mapState } from 'vuex';
	import q1 from '@/assets/svg/q1.svg'
	import q2 from '@/assets/svg/q2.svg'
	import q3 from '@/assets/svg/q3.svg'
	import q4 from '@/assets/svg/q4.svg'
	import q5 from '@/assets/svg/q5.svg'

	export default {
		components: {
			IOdometer,
			q1,
			q2,
			q3,
			q4,
			q5
		},
		computed: {
			...mapState('test', {
				questions: 'questions',
				currentQuestion: 'currentQuestion',
				points: 'points'
			}),
		},
		methods: {
			nextQuestion(answer,text) {
				qs('.test').classList.add('hide');
				qs('.test').classList.remove('animate')

				setTimeout(() => {
					if (text == 'Да') {
							this.$root.sendGA('internal', 'click', `vopros_${this.currentQuestion}_otvet_da`);
						} else {
							this.$root.sendGA('internal', 'click', `vopros_${this.currentQuestion}_otvet_net`);
					}

					if (this.currentQuestion == 5) {
						this.$store.commit('test/ANSWER_QUESTION', answer);
						this.$router.push({name: 'Result'});
					} else {
						setTimeout(() => {
							qs('.test').classList.remove('hide');
							qs('.test').classList.add('animate')
						}, 100);
						this.$store.commit('test/ANSWER_QUESTION', answer);
					}
				}, 500);
			}
		},
		mounted() {
			setTimeout(() => {
				qs('.test').setAttribute('loaded', true);
				qs('.test').classList.add('animate');	
			}, 200);
		}
	}
</script>
