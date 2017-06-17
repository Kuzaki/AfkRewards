module.exports = function afkrewards(dispatch) {

	dispatch.hook('C_RECEIVE_PLAYTIME_EVENT_REWARD', 1, (event) => {
	console.log('roll:'+event.roll+' column:'+event.column)
	});
	
	dispatch.hook('S_PLAYTIME_EVENT_REWARD_DATA', 1, (event) => {
		for(let i in event.items){
			if(event.items[i].available){
			console.log('sending roll: '+event.items[i].roll+' column: '+event.items[i].column+' av: '+event.items[i].available+' claimed: '+event.items[i].claimed);
				dispatch.toServer('C_RECEIVE_PLAYTIME_EVENT_REWARD', 1, {
					roll : event.items[i].roll,
					column : event.items[i].column
				});
			}
		}
	});
	
}