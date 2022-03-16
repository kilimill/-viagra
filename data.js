const data = {
	title: 'Новая мужественность',
	url: 'https://newmasculinity.championat.com/',
	statistics: {
		YM_ID: 42193809,
		GA_ID: 'UA-88014128-34',
		RMBT_ID: 7227633,
		PAGE_LOAD_EVENT: false
	},
	share: {
		default_img: '/share.jpg',
		title: 'Брать от жизни все или плыть по течению?',
		description: 'Пройди этот тест и узнай, в чем твой фокус',
		dynamic_shares: {
			1: {
				img: '/share_1.jpg',
				title: 'Наслаждаюсь жизнью как никто другой',
				description: 'Одно удачное свидание - и я на вершине мира! А у тебя как?'
			},
			2: {
				img: '/share_2.jpg',
				title: 'Достигаю цели и беру от жизни все',
				description: 'Иногда полезно расслабиться, но жизнь это борьба. Не согласен?'
			},
			// 3: {
			//     img: '/share/share_3.jpg',
			//     title: 'Магистр авангардных искусств',
			//     description: 'Ваш следующий шаг - собственная выставка'
			// }
		}

	},

	allPrerenderRoutes: [ //without dynamic_shares
		'/',
	]

}


data.allPrerenderRoutes = data.allPrerenderRoutes.concat(Object.keys(data.share.dynamic_shares).map(el => '/' + el))

export default data
