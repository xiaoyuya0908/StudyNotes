import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		info: JSON.parse(window.sessionStorage.getItem('info')) || "{}",
		user: JSON.parse(window.sessionStorage.getItem('userInfo')) || '[]',
		goods:JSON.parse(window.sessionStorage.getItem('goodsInfo')) || '[]',
		isUserShow:window.sessionStorage.getItem('isUserShow'),
		isGoodsShow:window.sessionStorage.getItem('isGoodsShow'),
		isDelShow:window.sessionStorage.getItem('isDelShow'),
	},
	mutations: {
		setInfo(state, payload) {
			// console.log(payload);
			state.info = payload;
			window.sessionStorage.setItem('info', JSON.stringify(payload));
		},
		userInfo(state, payload) {
			state.user = payload
			window.sessionStorage.setItem('userInfo',JSON.stringify(payload))
		},
		goodsInfo(state,payload) {
			state.goods = payload
			window.sessionStorage.setItem('goodsInfo',JSON.stringify(payload))
		},
		isUserShow(state,payload){
			state.isUserShow = payload
			console.log(state.isUserShow);
			window.sessionStorage.setItem('isUserShow',payload)
		},
		isGoodsShow(state,payload){
			state.isGoodsShow = payload
			console.log(state.isGoodsShow);
			window.sessionStorage.setItem('isGoodsShow',payload)
		},
		isDelShow(state,payload){
			state.isDelShow = payload
			console.log(state.isDelShow);
			window.sessionStorage.setItem('isDelShow',payload)
		}

	},
	actions: {

	}
})
