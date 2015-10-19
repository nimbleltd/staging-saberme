Orders = new Mongo.Collection("orders", {});

Orders.attachSchema(new SimpleSchema({
	videoName:{
		type: String,
		label: "Video Name",
		max: 500,
		optional: false
	},
	videoUrl:{
		type: String,
		label: "Video Url",
		max: 500,
		optional: false
	},
}));