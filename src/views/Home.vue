<template>
  <div class="home">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="search">
      <a-row>
        <a-col :span="18" :push="6">
          col-18 col-push-6
        </a-col>
        <a-col :span="6" :pull="18">
          col-6 col-pull-18
        </a-col>
      </a-row>
    </div>
    <vxe-grid
            :height="scrollYNumber"
            :columns="columns"
            :data="dataLisst"
            :loading="tableSet.loading"
            auto-resize
            border
            highlight-current-row
            ref="xTable"
            resizable
            show-header-overflow
            show-overflow
            size="small"
           />
    <vxe-pager
            :loading="tableSet.loading"
            :current-page="tableSet.current"
            :page-size="tableSet.pageSize"
            :page-sizes="tableSet.pageSizes"
            :total="tableSet.total"
            :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
            @page-change="changePageFn">
    </vxe-pager>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      tableSet: {
        loading: false,  // 是否处于加载状态
        total: 10, // 总共多少页
        current: 1, // 当前第几页
        pageSize: 10, // 总共几页
        pageSizes: [10, 20, 30, 40], // 可选每页多少条
      },
      columns:[
        {
          title: '',
          dataIndex: '',
          width: '50',
          minWidth: '50',
          type: 'checkbox',
          showOverflow: true,
          showHeaderOverflow: true,
          align: 'center'
        },
        {
          title: '名称',
          minWidth: '200',
          align: 'left',
          showOverflow: true,
          showHeaderOverflow: true,
          slots: {
            default: ({ row }) => {
              return [row.title]
            }
          }
        },
        {
          title: '地址',
          minWidth: '200',
          align: 'center',
          showOverflow: true,
          showHeaderOverflow: true,
          slots: {
            default: ({ row }) => {
              return [row.address]
            }
          }
        },
      ],
      dataLisst: [] // 数据
    }
  },
  methods:{
    // 页码改变的回调函数
    changePageFn ({ currentPage, pageSize }) {
      this.tableSet.current = currentPage
      this.tableSet.pageSize = pageSize
      this.tableSet.loading = true
      this.loadData()
    },
    async loadData(){
      this.dataLisst =  [
        {'title':'标题标题标题标题','address':'地址地址地址地址'},
        {'title':'标题标题标题标题','address':'地址地址地址地址'}
      ]
      this.tableSet.loading = false
    }
  },
  computed: {
    scrollYNumber () { // 固定表格的头部
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
              topHeight =  140,
              pager = 52
      return clientHeight - topHeight - pager
    },
  },
  created () {
    this.tableSet.loading = true
    setTimeout(() => {
      this.loadData()
    }, 1000)


  },
  components: {
    // HelloWorld
  }
}
</script>

