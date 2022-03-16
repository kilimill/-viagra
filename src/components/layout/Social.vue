<template>
	<div class="social">

		<yandex-share 
			:title="title" 
			:description="description" 
			:image="image" 
			:url="url" 
			:services="services"
			:contentByService="contentByService" 
			@share="share" 
		/>

		<div class="social__share-wrapper" @click="$root.sendGA('internal', 'click', 'share')">
			<svg class="social__share" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.7854 3.16435C16.7636 3.16435 17.678 3.54258 18.3798 4.215C19.8045 5.62288 19.8045 7.9133 18.3798 9.32118L11.6387 15.9823L4.89758 9.34219C3.4728 7.93431 3.4728 5.64389 4.89758 4.23601C5.57807 3.56359 6.51374 3.18536 7.49194 3.18536C8.47014 3.18536 9.38455 3.56359 10.0863 4.23601L11.6387 5.76997L13.191 4.23601C13.8715 3.54258 14.8072 3.16435 15.7854 3.16435ZM15.7854 1C14.2756 1 12.787 1.56735 11.6387 2.68105C10.4903 1.54634 9.00178 1 7.49194 1C5.98211 1 4.49354 1.56735 3.34521 2.68105C1.06983 4.92944 1.06983 8.62775 3.34521 10.8761L11.6387 19.0712L19.9321 10.8761C22.2075 8.62775 22.2075 4.95046 19.9321 2.68105C18.7838 1.56735 17.274 1 15.7854 1Z" fill="white"/>
			</svg>
		</div>
	</div>
</template>

<script>
	import YandexShare from "@cookieseater/vue-yandex-share";

	import { mapState } from "vuex";

	export default {
		name: "Social",
		props: {
			picture: {
				type: Number,
				required: false,
				default: 0,
			},
		},
		components: {
			YandexShare
		},
		methods: {
			share(name) {
				this.$root.sendGA('external', 'click', `obshhij_share_${name}`);
			}
		},
		computed: {
			...mapState("common", {
				mobile: 'mobile',
			}),
			title() {
				let title = 'Брать от жизни все или плыть по течению?';
				return title;
			},
			description() {
				let dsc = 'Пройди этот тест и узнай, в чем твой фокус';
				return dsc;
			},
			image() {
				// let pictSrc = 'default';
				return `${location.origin}/share.png`;
			},
			url() {
				let url = location.origin + '/';
				const pictSrc = this.picture ? this.picture - 1 : '';
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
		data() {
			return {
				services: [
					'facebook',
					'vkontakte',
					'odnoklassniki',
					'twitter',
					'telegram',
				],
			}
		}
	};
</script>
