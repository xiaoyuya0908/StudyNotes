<template>
	<div class="Login">
		<div class="container">
			<h1 class="title">KGC后台管理系统</h1>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<el-form-item prop="username">
					<el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type='password' v-model="ruleForm.password" placeholder="密码"></el-input>
				</el-form-item>
				<el-row class="el-row">
					<el-button type="primary" size="small" @click="submitForm('ruleForm')" class="loginbtn">登录
					</el-button>
				</el-row>
			</el-form>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import {
		getLoginInfo
	} from '../network/home.js'
	import {
		mapMutations
	} from 'vuex'
	export default {
		name: 'Login',
		data() {
			return {
				ruleForm: {
					username: 'admin',
					password: '123',
				},
				rules: {
					username: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 12,
							message: '长度在 3 到 12 个字符',
							trigger: 'blur'
						}
					],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 12,
							message: '长度在 3 到 12 个字符',
							trigger: 'blur'
						}
					],

				},
				info: {},
				isUserShow:false,
				isGoodsShow:false,
				isDelShow:false
			};
		},
		methods: {
			...mapMutations(['setInfo']),
			filterInfo(item) {
				return item.name === this.ruleForm.username && item.pwd === this.ruleForm.password
			},
			submitForm(ruleForm) {
				this.$refs[ruleForm].validate((valid) => {
					if (valid) {
						let flag = true;
						getLoginInfo().then(res => {
							console.log(res);
							res.map(item => {
								if (item.name !== this.ruleForm.username || item.pwd !== this
									.ruleForm.password) {
									flag = false
								}
								if (item.name === this.ruleForm.username || item.pwd === this
									.ruleForm.password) {
									flag = true
									return item
								}
							})
							
							this.info = res.filter(this.filterInfo);
							this.info.filter( item => {
								if(item.id === 26) {
									this.isGoodsShow = true
									this.isUserShow = true
									this.isDelShow = true
									this.$store.commit('isUserShow',this.isUserShow)
									this.$store.commit('isGoodsShow',this.isGoodsShow)
									this.$store.commit('isDelShow',this.isDelShow)
									console.log(this.isUserShow);
									console.log(this.isGoodsShow);
									console.log(this.isDelShow);
								}
								if(item.id === 24) {
									this.isGoodsShow = true
									this.isUserShow = false
									this.isDelShow = false
									this.$store.commit('isUserShow',this.isUserShow)
									this.$store.commit('isGoodsShow',this.isGoodsShow)
									this.$store.commit('isDelShow',this.isDelShow)
									console.log(this.isUserShow);
									console.log(this.isGoodsShow);
									console.log(this.isDelShow);
								}
							})
							if (flag) {
								this.setInfo(this.info)
								// window.sessionStorage.setItem('info',JSON.stringify(this.info))
								//console.log(this.info);
								this.$message.success('登录成功')
								this.$router.push('/home')
								
								
							} else {
								this.$message.error('登录失败')
							}
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(ruleForm) {
				this.$refs[ruleForm].resetFields();
			}
		}

	}
</script>
<style scoped>
	.Login {
		background-color: ##FFFFFF;
		height: 100%;
		overflow: hidden;
	}

	.container {
		width: 400px;
		height: 260px;
		background-color: #fff;
		margin: 140px auto 0 auto;
	}

	.title {
		margin-left: 100px;
		font-size: 24px;
	}

	.loginbtn {
		width: 100%;
	}
</style>
