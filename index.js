module.exports = function afkrewards(dispatch) {
	
	dispatch.hook('S_PLAYTIME_EVENT_REWARD_DATA', 1, (event) => {
		for(let i in event.items){
			if(event.items[i].redeemable){
				dispatch.toServer('C_RECEIVE_PLAYTIME_EVENT_REWARD', 1, {
					row : event.items[i].row,
					column : event.items[i].column
				});
			}
		}
	});
	
}
