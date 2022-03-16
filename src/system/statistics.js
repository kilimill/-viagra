import data from '../../data'

var on_load_mixin = {
	mounted() {
		if (data.statistics.PAGE_LOAD_EVENT) {
			let v = this;
			window.addEventListener('load', function () {
				v.$root.sendGA('internal', 'load', 'main');
			});
		}
	}
}
export { on_load_mixin };
