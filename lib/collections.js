Orders = new Mongo.Collection("orders", {});

Orders.attachSchema(new SimpleSchema({
	orders:{
		type: String,
		label: "video-name"
		max: 500,
		optional: false
	},
	orders:{
		type: String,
		label: "video-url"
		max: 500,
		optional: false
	},
}));