<template lang="pug">
	footer.footer
		.footer__text
			p Проект подготовлен при поддержке компании Viatris.
				br
				| ООО «Пфайзер»*, 123112, г. Москва, Пресненская наб., 10, 22-й этаж, БЦ «Башня на Набережной» (Блок С), тел. +7 (495) 287-50-00, факс +7 (495) 287-53-00 PP-MHP-RUS-0125, 26.11.2020
				br
				| *Юридическое лицо ООО «Пфайзер» входит в группу компаний Viatris
		<social/>
</template>

<script>
	import social from '@/components/layout/Social.vue'
	export default {
		components: {
			social,
		}
	}
</script>
