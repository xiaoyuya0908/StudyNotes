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
		<el-table-column label="数量" width="180">
			<template slot-scope="scope">
				<span style="margin-left: 10px">{{ scope.row.number }}</span>
			</template>
		</el-table-column>
		<el-table-column label="价格" width="180">
			<template slot-scope="scope">
				<span style="margin-left: 10px">{{ scope.row.price }}</span>
			</template>
		</el-table-column>

		<!-- <el-table-column label="操作">
			<template slot-scope="scope" >
				<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			</template>
		</el-table-column> -->
	</el-table>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'Goods',
		data() {
			return {
				tableData: [],
				isShow:false
			}
		},
		mounted() {
			this.tableData = this.goodsInfo
			//console.log(this.tableData);
		},
		computed: {
			...mapState({
				goodsInfo: state => state.goods
			})
		}
	}
</script>

<style>
</style>
