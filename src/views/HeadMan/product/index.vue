
<template>
  <!-- 组长产品字段管理页 -->
  <div>
    <el-card class="box-card">
      <el-input
        style="width: 500px"
        v-model="queryInfo.searchWords"
        placeholder="请输入内容"
        clearable
      ></el-input>
      <el-button type="primary" icon="el-icon-search" @click="getProductList"
        >搜索</el-button
      >
      <div style="margin-top: 10px">
        <el-button type="warning" plain @click="allAmend()">批量修改</el-button>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        @select-all="tableSelectall"
        @selection-change="tableSelectChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="id" label="ID" width="150"> </el-table-column>
        <el-table-column prop="keyword" label="产品字段" width="120">
        </el-table-column>
        <el-table-column prop="useNumber" label="使用次数" width="120">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="small"
              type="danger"
              round
              @click="amend(scope.row)"
              >修改</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagesize"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
      <!-- 单个修改的弹出框 -->
      <el-dialog
        title="修改单个产品字段名称"
        :visible.sync="dialogOneTableVisible"
      >
        <el-form>
          <el-input
            v-model="currentRow && currentRow.keyword"
            autocomplete="off"
          ></el-input>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="clearOneDialog()">取 消</el-button>
          <el-button type="primary" @click="confirmSubmitAdvertsing()"
            >确 定</el-button
          >
        </div>
      </el-dialog>
      <!-- 多个修改 -->
      <el-dialog
        title="修改全部产品字段名称"
        :visible.sync="dialogTableVisible"
      >
        <el-form>
          <el-input v-model="batfieldName" placeholder="请输入内容"></el-input>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="clearDialog()">取 消</el-button>
          <el-button type="primary" @click="confirmSubmitAllAdvertsing()"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { ProductList, productState, productAllChange } from "@/api/GroupLeader"
export default {
  name: "HeadmanProduct",
  data () {
    return {
      // 定义查询参数对象
      queryInfo: {
        id: "",
        searchWords: '',
        // 当前页码
        current_page: 1,
        // 	分页大小
        per_page: 10
      },
      // 定义列表
      tableData: [],
      idItems: [],
      batfieldName: null,
      // 总条数条数
      total: 0,
      currentRow: null,
      // 复选
      dialogTableVisible: false,
      // 单选
      dialogOneTableVisible: false
    }
  },
  created () {
    this.getProductList()
  },
  methods: {
    // 根据分页获取广告主列表
    async getProductList () {
      const { data } = await ProductList(this.queryInfo)
      if (data.code !== 1000) {
        return this.$message.error('获取列表失败')
      }
      this.tableData = data.data.data
      this.total = data.data.total
    },

    // 处理分页页码大小
    handleSizeChange (newsize) {
      this.queryInfo.pagesize = newsize
      this.getProductList()
    },
    // 处理当前页变动时候
    handleCurrentChange (newpage) {
      this.queryInfo.pagenum = newpage
      this.getProductList()
    },
    // 单个修改
    amend (row) {
      this.currentRow = row
      this.dialogOneTableVisible = true
    },
    async confirmSubmitAdvertsing () {
      const { data } = await productState({ id: this.currentRow.id, sponsorId: this.currentRow.sponsorId, fieldName: this.currentRow.keyword })
      if (data.code == 1000) {
        this.currentRow = null
        this.dialogOneTableVisible = false
        this.$message.success(data.message)
        this.getProductList()
      } else {
        this.currentRow = null
        this.dialogOneTableVisible = false
      }
    },
    clearOneDialog () {
      this.currentRow = null
      this.dialogOneTableVisible = false
      this.batfieldName = null
    },

    // 多个修改
    allAmend (rows) {
      this.dialogTableVisible = true
    },
    async confirmSubmitAllAdvertsing () {
      if (this.idItems.length <= 0) {
        this.$message.error('请选择产品字段')
        returns
      }
      const { data } = await productAllChange({
        fieldName: this.batfieldName,
        idItems: JSON.stringify(this.idItems)
      })
      if (data.code === 1000) {
        this.$message.success(data.message)
        this.getProductList()
        this.dialogTableVisible = false
        return
      }
      this.$message.error(data.message)
    },
    tableSelectall (items) {
      items.forEach((item) => {
        this.idItems.push(item.id)
      })
    },
    tableSelectChange (selection) {
      this.idItems = []
      selection.forEach((item) => {
        this.idItems.push(item.id)
      })
    },
    // 关闭弹框
    clearDialog () {
      this.currentRow = null
      this.dialogTableVisible = false
      this.batfieldName = null
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
