<template>
    <div class="chart">
        <div class="search">
            <a-row>
                <a-col :span="4">
                    任务名称
                    <a-input placeholder="请输入要查询的内容" style="width:calc(100% - 80px)"/>
                </a-col>
                <a-col :span="4">
                    采集地点
                    <a-input placeholder="请输入要查询的内容" style="width:calc(100% - 80px)"/>
                </a-col>
                <a-col :span="4">
                    门店名称
                    <a-input placeholder="请输入要查询的内容" style="width:calc(100% - 80px)"/>
                </a-col>
                <a-col :span="4">
                    门店负责人
                    <a-input placeholder="请输入要查询的内容" style="width:calc(100% - 80px)"/>
                </a-col>
                <a-col :span="4">
                    任务日期
                    <a-range-picker style="width:calc(100% - 80px)"/>
                </a-col>
                <a-col :span="4">

                    <a-button type="primary" style="margin-right: 15px">
                        重置
                    </a-button>
                    <a-button type="primary" style="margin-right: 15px">
                        查询
                    </a-button>
                    <a-button type="primary" style="background: #1ab394; border: 1px solid #1ab394">
                        导出
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
        name: 'Chart',
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
                        title: '任务名称',
                        minWidth: '200',
                        width: '10%',
                        align: 'center',
                        showOverflow: true,
                        showHeaderOverflow: true,
                        slots: {
                            default: ({row}) => {
                                return [row.title]
                            }
                        }
                    },
                    {
                        title: '采集地点',
                        minWidth: '200',
                        width: '20%',
                        align: 'center',
                        showOverflow: true,
                        showHeaderOverflow: true,
                        slots: {
                            default: ({row}) => {
                                return [row.address]
                            }
                        }
                    },
                    {
                        title: '门店名称',
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
                        title: '门店负责人',
                        minWidth: '200',
                        width: '10%',
                        align: 'center',
                        showOverflow: true,
                        showHeaderOverflow: true,
                        slots: {
                            default: ({row}) => {
                                return [row.leadPeople]
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
                        title: '采集人',
                        minWidth: '200',
                        width: '10%',
                        align: 'center',
                        showOverflow: true,
                        showHeaderOverflow: true,
                        slots: {
                            default: ({row}) => {
                                return [row.collectPeople]
                            }
                        }
                    },
                    {
                        title: '采集时间',
                        minWidth: '200',
                        width: '10%',
                        align: 'center',
                        showOverflow: true,
                        showHeaderOverflow: true,
                        slots: {
                            default: ({row}) => {
                                return [row.time]
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
                        'title': '电动车行业场所采集',
                        'address': '昆明市北京路411号',
                        'name': '雅迪电动车北京路店',
                        'leadPeople': '孙阳',
                        'tel': '13887809918',
                        'collectPeople': '王磊002630',
                        'time': '2020-03-20 12:00:08',

                    },
                    {
                        'title': '电动车行业场所采集',
                        'address': '昆明市北京路411号',
                        'name': '雅迪电动车北京路店',
                        'leadPeople': '孙阳',
                        'tel': '13887809918',
                        'collectPeople': '王磊002630',
                        'time': '2020-03-20 12:00:08',

                    }

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

