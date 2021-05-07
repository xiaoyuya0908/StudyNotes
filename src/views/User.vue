<template>
	<el-table :data="tableData"  border ref='table'>
		<el-table-column label="编号" width="180">
			<template slot-scope="scope">
				<span style="margin-left: 10px">{{ scope.row.id }}</span>
			</template>
		</el-table-column>
		<el-table-column label="用户名" width="180">
			<template slot-scope="scope">
				<span style="margin-left: 10px">{{ scope.row.name }}</span>
			</template>
		</el-table-column>
		<el-table-column label="角色" width="180">
			<template slot-scope="scope">
				<span style="margin-left: 10px">{{ scope.row.name | letterToWord }}</span>
			</template>
		</el-table-column>
		<el-table-column label="手机号码" width="180">
			<template slot-scope="scope">
				<span style="margin-left: 10px">{{ scope.row.phone }}</span>
			</template>
		</el-table-column>
		<el-table-column label="邮箱" width="180">
			<template slot-scope="scope">
				<span style="margin-left: 10px">{{ scope.row.email }}</span>
			</template>*
		</el-table-column>

		<el-table-column label="操作">
			<template slot-scope="scope" v-show="isDelShow">
				<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import common from '../common/mixin/common.js'
	export default {
		name: 'User',
		mixins: [common],
		data() {
			return {
				tableData: []
			}
		},
		mounted() {
			// console.log(this.user);
			this.tableData = this.user;
		},
		methods: {
			handleDelete(index, row) {
				this.$confirm('是否确认要删除该用户？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					console.log(this.$refs.table);
					this.$message({
						type: 'success',
						message: '删除成功!',
					});
					this.tableData.splice(index, 1)
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			}
		},
		computed: {
			...mapState({
				user: state => state.user
			}),

		}
	}
</script>

<style scoped="scoped">
</style>
