<template>

	<el-container class="home-container">
		<el-header>
			<span class="title">KGC后台管理系统</span>
			<el-button type="success" class='layout' @click="layout">退出</el-button>
			<span class="username">{{username}}</span>
		</el-header>
		<el-container>
			<el-aside width="200px">
				<el-row class="tac">
					<el-menu default-active="2" class="el-menu-vertical-demo" router>
						<el-menu-item :index="'/user'" v-show="isUserShow">
							<span slot="title">用户管理</span>
						</el-menu-item>
						<el-menu-item :index="'/goods'" v-show='isGoodsShow'>
							<span slot="title">商品管理</span>
						</el-menu-item>
					</el-menu>
				</el-row>
			</el-aside>
			<router-view :isDelShow='isDelShow'></router-view>
		</el-container>
	</el-container>
</template>

<script>
	import {
		getOrdersInfo,
		getLoginInfo
	} from '../network/home.js'
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import User from './User.vue'
	import Goods from './Goods.vue'
	import Welcome from './Welcome.vue'
	export default {
		name: 'Home',
		data() {
			return {
				username: '',
				user: [],
				goods: [],
			}
		},
		components: {
			User,
			Goods,
			Welcome
		},
		created() {
			this.getLoginInfo()
			this.getOrdersInfo()
		},
		mounted() {
			console.log(this.info);
			console.log(this.info[0].name);
			this.username = this.info[0].name
		},
		methods: {
			...mapMutations(['userInfo', 'goodsInfo']),
			getLoginInfo() {
				getLoginInfo().then(res => {
					//console.log(res)
					this.user = res;
					this.userInfo(this.user)
				})
			},
			getOrdersInfo() {
				getOrdersInfo().then(res => {
					// console.log(res);
					this.goods = res;
					this.goodsInfo(this.goods)
				})
			},
			layout() {
				this.$router.push('/login')
				window.sessionStorage.removeItem('info');
				window.sessionStorage.removeItem('userInfo')
				window.sessionStorage.removeItem('goodsInfo')
				window.sessionStorage.removeItem('isGoodsShow')
				window.sessionStorage.removeItem('isUserShow')
				window.sessionStorage.removeItem('isDelShow')
			},
		},
		computed: {
			...mapState(['info', 'isUserShow', 'isGoodsShow', 'isDelShow'])

		}
	}
</script>

<style scoped="scoped">
	.home-container {
		width: 100%;
		height: 100%;
	}


	.el-header {
		background-color: rgb(73, 80, 96);
		color: #ffffff;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #ffffff;
		color: #333;
		text-align: center;
		line-height: 200px;
		position: relative;
	}

	.el-main {
		background-color: #ffffff;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	.el-menu {
		border: none;
	}

	.el-menu-item {
		width: 150px;
		text-align: center;
	}

	.layout {
		float: right;
		margin: 10px 10px 0 0;
	}

	.username {
		float: right;
		margin-right: 10px;
	}

	.title {
		float: left;
	}
</style>
