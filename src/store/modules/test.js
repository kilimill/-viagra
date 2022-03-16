export default {
	namespaced: true,
	state: {
		currentQuestion: 1,
		points: 0,
		questions: {
			1: {
				text: '<div class="test__question-word"><span>Умение</span></div><br> <div class="test__question-word"><span>готовить</span></div><br> <div class="test__question-word"><span>украшает</span></div><br> <div class="test__question-word"><span>мужчину</span></div>',
				answers: {
					1: {
						text: 'Да',
						correct: true
					},
					2: {
						text: 'Нет',
						correct: false
					}
				}
			},
			2: {
				text: '<div class="test__question-word"><span>Ласки</span></div> <div class="test__question-word"><span>в</span></div> <div class="test__question-word"><span>сексе</span></div> <div class="test__question-word"><span>—</span></div><br> <div class="test__question-word"><span>важный</span></div> <div class="test__question-word"><span>этап</span></div>',
				answers: {
					1: {
						text: 'Да',
						correct: true
					},
					2: {
						text: 'Нет',
						correct: false
					}
				}
			},
			3: {
				text: '<div class="test__question-word"><span>Лучше</span></div> <div class="test__question-word"><span>самому</span></div><br> <div class="test__question-word"><span>заниматься</span></div><br> <div class="test__question-word"><span>спортом,</span></div><br> <div class="test__question-word"><span>чем</span></div> <div class="test__question-word"><span>болеть</span></div><br> <div class="test__question-word"><span>за</span></div> <div class="test__question-word"><span>других</span></div>',
				answers: {
					1: {
						text: 'Да',
						correct: false
					},
					2: {
						text: 'Нет',
						correct: true
					}
				}
			},
			4: {
				text: '<div class="test__question-word"><span>Если</span></div> <div class="test__question-word"><span>ты</span></div> <div class="test__question-word"><span>любишь</span></div><br> <div class="test__question-word"><span>свою</span></div> <div class="test__question-word"><span>работу,</span></div><br> <div class="test__question-word"><span>такого</span></div> <div class="test__question-word"><span>понятия,</span></div><br> <div class="test__question-word"><span>как</span></div> <div class="test__question-word"><span>«конец</span></div><br> <div class="test__question-word"><span>рабочего</span></div> <div class="test__question-word"><span>дня»,</span></div><br> <div class="test__question-word"><span>не существует</span></div>',
				answers: {
					1: {
						text: 'Да',
						correct: false
					},
					2: {
						text: 'Нет',
						correct: true
					}
				}
			},
			5: {
				text: '<div class="test__question-word"><span>Яркая</span></div> <div class="test__question-word"><span>сексуальная</span></div><br> <div class="test__question-word"><span>жизнь</span></div> <div class="test__question-word"><span>с</span></div> <div class="test__question-word"><span>одной</span></div><br> <div class="test__question-word"><span>постоянной</span></div><br> <div class="test__question-word"><span>партнершей</span></div> <div class="test__question-word"><span>—</span></div><br> <div class="test__question-word"><span>это</span></div> <div class="test__question-word"><span>миф&nbsp;</span></div>',
				answers: {
					1: {
						text: 'Да',
						correct: true
					},
					2: {
						text: 'Нет',
						correct: false
					}
				}
			}
		}
	},
	mutations: {
		ANSWER_QUESTION(state, data) {
			state.currentQuestion++;
			if (data) {
				state.points++;
			}
		},
		RESTART(state) {
			state.currentQuestion = 1;
			state.points = 0;
		}
	}
};
