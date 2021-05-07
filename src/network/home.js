import { request } from "./request";

export function getLoginInfo() {
	return request({
		url: '/users'
	})
}


export function getOrdersInfo() {
	return request({
		url: '/goods',
	})
}