Template.orders.helpers({
	orders: function(){
		return Orders.find({}).map(function(videoName, index){
			videoName.i = index;
			return videoName;
		});
	}
});