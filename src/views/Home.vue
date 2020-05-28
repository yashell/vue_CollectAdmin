<template>
    <div class="home">
        <div class="search">
            <a-row>
                <a-col :span="4">
                    <a-select default-value="5301" style="width:calc(100% - 15px)">
                        <a-select-option value="5301">
                            昆明市公安局
                        </a-select-option>
                        <a-select-option value="530102">
                            昆明市公安局
                        </a-select-option>
                        <a-select-option value="530103">
                            昆明市公安局
                        </a-select-option>
                    </a-select>
                </a-col>
                <a-col :span="6">
                    <a-range-picker style="width:calc(100% - 15px)"/>
                </a-col>
                <a-col :span="6">
                    <a-button type="primary" style="background: #1ab394; border: 1px solid #1ab394">
                        导出
                    </a-button>
                </a-col>
                <a-col :span="8">
                    <a-input-search placeholder="请输入要查询的内容" style="width:calc(100% - 120px)"/>
                    <a-button type="primary" style="margin-left: 15px">
                        查询
                    </a-button>
                    <div style=" float: right; padding-top:5px; cursor: pointer ">
                        <a-icon type="unordered-list" style="font-size: 30px;"/>
                    </div>
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
                stripe
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
    export default {
        name: 'Home',
        data() {
            return {
                tableSet: {
                    loading: false,  // 是否处于加载状态
                    total: 10, // 总共多少页
                    current: 1, // 当前第几页
                    pageSize: 10, // 总共几页
                    pageSizes: [10, 20, 30, 40], // 可选每页多少条
                },
                columns: [
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
                        type: 'seq',
                        width: 50,
                        title: '序号',
                        align: 'center'

                    },
                    {
                        title: '姓名',
                        minWidth: '200',
                        width: '10%',
                        align: 'center',
                        showOverflow: true,
                        showHeaderOverflow: true,
                        slots: {
                            default: ({row}) => {
                                return [row.name]
                            }
                        }
                    },
                    {
                        title: '身份证号码',
                        minWidth: '200',
                        width: '20%',
                        align: 'center',
                        showOverflow: true,
                        showHeaderOverflow: true,
                        slots: {
                            default: ({row}) => {
                                return [row.id]
                            }
                        }
                    },
                    {
                        title: '联系电话',
                        minWidth: '200',
                        width: '10%',
                        align: 'center',
                        showOverflow: true,
                        showHeaderOverflow: true,
                        slots: {
                            default: ({row}) => {
                                return [row.tel]
                            }
                        }
                    },
                    {
                        title: '核查结果',
                        minWidth: '200',
                        width: '10%',
                        align: 'center',
                        showOverflow: true,
                        showHeaderOverflow: true,
                        slots: {
                            default: ({row}) => {
                                return [row.result]
                            }
                        }
                    },
                    {
                        title: '核查时间',
                        minWidth: '200',
                        width: '20%',
                        align: 'center',
                        showOverflow: true,
                        showHeaderOverflow: true,
                        slots: {
                            default: ({row}) => {
                                return [row.time]
                            }
                        }
                    },
                    {
                        title: '预警任务',
                        minWidth: '200',
                        align: 'center',
                        showOverflow: true,
                        showHeaderOverflow: true,
                        slots: {
                            default: ({row}) => {
                                return [row.task]
                            }
                        }
                    }
                ],
                dataLisst: [] // 数据
            }
        },
        methods: {
            changePageFn({currentPage, pageSize}) {
                this.tableSet.current = currentPage
                this.tableSet.pageSize = pageSize
                this.tableSet.loading = true
                this.loadData()
            },
            async loadData() {
                this.dataLisst = [
                    {
                        'name': '孙阳',
                        'id': '533001199001120390',
                        'tel': '13887809918',
                        'result': '盗抢',
                        'time': '2020-03-20 12:00:08',
                        'task': '电动车行业门店采集'
                    },
                    {
                        'name': '孙阳',
                        'id': '533001199001120390',
                        'tel': '13887809918',
                        'result': '盗抢',
                        'time': '2020-03-20 12:00:08',
                        'task': '电动车行业门店采集'
                    },
                    {
                        'name': '孙阳',
                        'id': '533001199001120390',
                        'tel': '13887809918',
                        'result': '盗抢',
                        'time': '2020-03-20 12:00:08',
                        'task': '电动车行业门店采集'
                    },
                    {
                        'name': '孙阳',
                        'id': '533001199001120390',
                        'tel': '13887809918',
                        'result': '盗抢',
                        'time': '2020-03-20 12:00:08',
                        'task': '电动车行业门店采集'
                    },
                    {
                        'name': '孙阳',
                        'id': '533001199001120390',
                        'tel': '13887809918',
                        'result': '盗抢',
                        'time': '2020-03-20 12:00:08',
                        'task': '电动车行业门店采集'
                    },
                    {
                        'name': '孙阳',
                        'id': '533001199001120390',
                        'tel': '13887809918',
                        'result': '盗抢',
                        'time': '2020-03-20 12:00:08',
                        'task': '电动车行业门店采集'
                    },
                    {
                        'name': '孙阳',
                        'id': '533001199001120390',
                        'tel': '13887809918',
                        'result': '盗抢',
                        'time': '2020-03-20 12:00:08',
                        'task': '电动车行业门店采集'
                    },
                    {
                        'name': '孙阳',
                        'id': '533001199001120390',
                        'tel': '13887809918',
                        'result': '盗抢',
                        'time': '2020-03-20 12:00:08',
                        'task': '电动车行业门店采集'
                    },

                ]
                this.tableSet.total = this.dataLisst.length
                this.tableSet.loading = false
            }
        },
        computed: {
            scrollYNumber() {
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
                    topHeight = 140,
                    pager = 52
                return clientHeight - topHeight - pager
            },
        },
        created() {
            this.tableSet.loading = true
            setTimeout(() => {
                this.loadData()
            }, 1000)


        },
    }
</script>

