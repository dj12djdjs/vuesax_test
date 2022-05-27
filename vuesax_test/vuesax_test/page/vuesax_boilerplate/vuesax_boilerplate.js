frappe.pages['vuesax-boilerplate'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Vuesax Boilerplate',
		single_column: true
	});

	$(wrapper).append('<div id="app"></div>');
	createVuesaxApp("#app");
}
