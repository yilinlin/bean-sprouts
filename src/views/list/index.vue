<template>
  <div class="page-container">
    <div class="page-inner">
      <el-row>
        <el-col :span="6"><span>公告日志</span></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-form
          :inline="true"
          :model="formQuery"
          class="demo-form-inline"
          size="mini"
        >
          <el-form-item label="公告类型" required>
            <el-select v-model="formQuery.type" placeholder="请选择">
              <el-option label="升级公告" value="1" />
              <el-option label="安全公告" value="2" />
              <el-option label="备案公告" value="3" />
              <el-option label="紧急公告1" value="4" />
              <el-option label="紧急公告2" value="5" />
            </el-select>
          </el-form-item>
          <el-form-item label="公告位置" required>
            <el-select v-model="formQuery.location" placeholder="请选择">
              <el-option label="门户操作平台" value="1" />
              <el-option label="运营平台" value="2" />
              <el-option label="云市场" value="3" />
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="formQuery.createTime"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-form>
      </el-row>

      <el-table
        :data="list"
        border
        fit
        highlight-current-row
        style="width: 100%"
        @sort-change="sortChange"
      >

        <el-table-column label="公告位置公告类型" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.timestamp | parseTime("{y}-{m}-{d} {h}:{i}") }}</span>
          </template>
        </el-table-column>
        <el-table-column label="公告标题" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.timestamp | parseTime("{y}-{m}-{d} {h}:{i}") }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.timestamp | parseTime("{y}-{m}-{d} {h}:{i}") }}</span>
          </template>
        </el-table-column>
        <el-table-column label="公告状态" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.timestamp | parseTime("{y}-{m}-{d} {h}:{i}") }}</span>
          </template>
        </el-table-column>
        <el-table-column label="最后修改人" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.timestamp | parseTime("{y}-{m}-{d} {h}:{i}") }}</span>
          </template>
        </el-table-column>
        <el-table-column label="最后修改时间" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.timestamp | parseTime("{y}-{m}-{d} {h}:{i}") }}</span>
          </template>
        </el-table-column>

      </el-table>
      <el-row :gutter="10" type="flex" justify="end" class="ta-r">
        <el-col :span="24">
          <el-pagination
            background
            :current-page="pageNum"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="pageSize"
            :total="totalItemNum"
            layout="prev, pager, next, jumper, sizes"
            @size-change="handleSizeChange"
            @current-change="handlePageChange"
          />
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formQuery: {
        type: '',
        location: '',
        createTime: ''
      },
      value1: null,
      totalItemNum: 10,
      pageNum: 0,
      pageSize: 29,
      list: []
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    sortChange() {},
    handlePageChange() {},
    handleSizeChange() {},
    showReviewer() {}
  }
}
</script>

<style lang="scss">
@import "@/styles/index.scss";
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
