module.exports = function afkrewards(dispatch) {
	
	dispatch.hook('S_PLAYTIME_EVENT_REWARD_DATA', 1, (event) => {
		for(let i in event.items){
			if(event.items[i].available){
				dispatch.toServer('C_RECEIVE_PLAYTIME_EVENT_REWARD', 1, {
					roll : event.items[i].roll,
					column : event.items[i].column
				});
			}
		}
	});
	
}
