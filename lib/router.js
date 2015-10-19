Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	//Home route
	this.route('orders', {
		path : '/',
		template: 'orders'
	})
});