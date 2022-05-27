import App from "./App.vue";

window.createVuesaxApp = function (mount_to) {
	return new Vue({
		components: { App },
		el: mount_to,
		template: "<App />"
	});
};
