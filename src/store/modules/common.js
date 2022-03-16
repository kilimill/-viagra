export default {
	namespaced: true,
	state: {
		mobile: (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1),
	},
};
