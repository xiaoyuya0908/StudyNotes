export default {
	filters: {
		numToString: function(value) {
			return value.toString()
		},
		letterToWord: function(value) {
			if(value.indexOf('a') === 0){
				return '管理员'
			}
			if(value.indexOf('k') === 0){
				return '客服'
			}
			return '游客'
		}
	}
}
