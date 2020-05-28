<template>
    <div class="task">
        <div class="search">
            <a-row>
                <a-col :span="20">
                    <a-button type="primary" style="background: #1ab394; border: 1px solid #1ab394">
                        发布
                    </a-button>
                    <a-button type="primary" style="margin-left: 15px">
                        预览
                    </a-button>
                    <a-button type="primary" style="margin-left: 15px">
                        保存
                    </a-button>
                    <a-button type="primary" style="margin-left: 15px">
                        重置
                    </a-button>
                </a-col>

                <a-col :span="4">

                    <div style=" float: right; padding-top:5px; cursor: pointer ">
                        <a-icon type="unordered-list" style="font-size: 30px;"/>
                    </div>
                </a-col>
            </a-row>

        </div>
        <a-row>
            <a-col :span="6">
                <a-tree
                        class="draggable-tree"
                        :defaultSelectedKeys="expandedKeys"
                        draggable
                        :tree-data="treeData"
                        :defaultExpandAll="true"
                        @dragenter="onDragEnter"
                        @drop="onDrop"
                        @select="onSelect"
                >
                    <template slot="custom" slot-scope="item">
                        <span>{{ item.title }}</span>
                        <a-button
                                v-show="item.show "
                                type="dashed"
                                class="but_type"
                                size="small"
                                @click.stop="()=> append(item)"
                        >添加子节点
                        </a-button>
                    </template>
                </a-tree>
            </a-col>

            <a-col :span="18">
                <vxe-grid
                        :height="scrollYNumber"
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
                >
                    <vxe-table-column title="排序" align="center" width="50">
                        <template v-slot="{ row }">
                            <a-icon type="arrow-up" style="color: #1ab394"/>
                        </template>
                    </vxe-table-column>
                    <vxe-table-column type="seq" title="序号" width="50" align="center"></vxe-table-column>
                    <vxe-table-column field="name" title="采集项名称" align="center" width="20%"></vxe-table-column>
                    <vxe-table-column field="type" title="录入类型" align="center" width="20%">
                        <template v-slot="{ row }">
                            <a-select :default-value="row.type" style="width:calc(100%)">
                                <a-select-option value="0">
                                    文本框
                                </a-select-option>
                                <a-select-option value="1">
                                    多行文本框
                                </a-select-option>
                                <a-select-option value="2">
                                    数字框
                                </a-select-option>
                            </a-select>
                        </template>
                    </vxe-table-column>
                    <vxe-table-column field="isMust" title="是否必填项" align="center" width="20%">
                        <template v-slot="{ row }">
                            <vxe-radio-group v-model="row.isMust" size="small">
                                <vxe-radio-button label="true" content="是"></vxe-radio-button>
                                <vxe-radio-button label="false" content="否"></vxe-radio-button>
                            </vxe-radio-group>
                        </template>
                    </vxe-table-column>
                    <vxe-table-column field="isList" title="是否作为列表展示" align="center" width="20%">
                        <template v-slot="{ row }">
                            <vxe-radio-group v-model="row.isList" size="small">
                                <vxe-radio-button label="true" content="是"></vxe-radio-button>
                                <vxe-radio-button label="false" content="否"></vxe-radio-button>
                            </vxe-radio-group>
                        </template>
                    </vxe-table-column>
                    <vxe-table-column title="操作" width="80">
                        <template v-slot:header>
                            <vxe-button status="primary">新增</vxe-button>
                        </template>
                        <template v-slot="{ row }">
                            <vxe-button status="danger">删除</vxe-button>
                        </template>
                    </vxe-table-column>
                </vxe-grid>
            </a-col>
        </a-row>

    </div>
</template>

<script>
    export default {
        name: 'Task',
        data() {
            return {
                treeData: [],
                expandedKeys: ['0-0'],
                tableSet: {
                    loading: false,  // 是否处于加载状态
                    total: 10, // 总共多少页
                    current: 1, // 当前第几页
                    pageSize: 10, // 总共几页
                    pageSizes: [10, 20, 30, 40], // 可选每页多少条
                },
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
                        'name': '采集项名称',
                        'type': '1',
                        'isMust': "false",
                        'isList': "true",
                    },
                    {
                        'name': '采集项名称',
                        'type': '2',
                        'isMust': "true",
                        'isList': "false",
                    },
                    {
                        'name': '采集项名称',
                        'type': '1',
                        'isMust': "false",
                        'isList': "true",
                    },
                    {
                        'name': '采集项名称',
                        'type': '0',
                        'isMust': "false",
                        'isList': "true",
                    },
                    {
                        'name': '采集项名称',
                        'type': '0',
                        'isMust': "false",
                        'isList': "true",
                    }
                ]
                this.tableSet.total = this.dataLisst.length
                this.tableSet.loading = false
            },
            onDragEnter(info) {
                this.expandedKeys = info.expandedKeys
            },
            onDrop(info) {
                const dropKey = info.node.eventKey;
                const dragKey = info.dragNode.eventKey;
                const dropPos = info.node.pos.split('-');
                const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
                const loop = (data, key, callback) => {
                    data.forEach((item, index, arr) => {
                        if (item.key === key) {
                            return callback(item, index, arr);
                        }
                        if (item.children) {
                            return loop(item.children, key, callback);
                        }
                    });
                };
                const data = [...this.gData];

                // Find dragObject
                let dragObj;
                loop(data, dragKey, (item, index, arr) => {
                    arr.splice(index, 1);
                    dragObj = item;
                });
                if (!info.dropToGap) {
                    // Drop on the content
                    loop(data, dropKey, item => {
                        item.children = item.children || [];
                        // where to insert 示例添加到尾部，可以是随意位置
                        item.children.push(dragObj);
                    });
                } else if (
                    (info.node.children || []).length > 0 && // Has children
                    info.node.expanded && // Is expanded
                    dropPosition === 1 // On the bottom gap
                ) {
                    loop(data, dropKey, item => {
                        item.children = item.children || [];
                        // where to insert 示例添加到尾部，可以是随意位置
                        item.children.unshift(dragObj);
                    });
                } else {
                    let ar;
                    let i;
                    loop(data, dropKey, (item, index, arr) => {
                        ar = arr;
                        i = index;
                    });
                    if (dropPosition === -1) {
                        ar.splice(i, 0, dragObj);
                    } else {
                        ar.splice(i + 1, 0, dragObj);
                    }
                }
                this.gData = data;
            },
            onSelect(selectedKeys, e) {
                this.expandedKeys = selectedKeys
                this.treeShow(selectedKeys, this.treeData)
            },
            treeShow(key, tree) {
                const showNode = key[0]
                for (let i = 0; i < tree.length; i++) {
                    if (tree[i].key === showNode) {
                        tree[i].show = true
                    } else {
                        tree[i].show = false
                    }
                    if (tree[i].children.length > 0) {
                        this.treeShow(key, tree[i].children)
                    }
                }
            },
            append(data) {
                //模拟添加
                const newChild = {
                    title: '子节点' + (new Date()).valueOf(),
                    key: data.key + (new Date()).valueOf(),
                    scopedSlots: {title: 'custom'},
                    children: []
                }
                if (!data.children) {
                    this.$set(data, 'children', [])
                }
                data.children.push(newChild)
            },
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

            this.treeData = [
                {
                    "key": "0-0", "title": "主项任务名称", "show": true, scopedSlots: {title: 'custom'},

                    "children":
                        [{
                            "key": "0-1", "title": "员工登记", "show": false, scopedSlots: {title: 'custom'}, "children": [
                                {
                                    "key": "0-1-1",
                                    "title": "1.1任务名称",
                                    "show": false,
                                    scopedSlots: {title: 'custom'},
                                    "children": []
                                }
                            ]
                        },
                            {
                                "key": "0-2",
                                "title": "2级任务",
                                "show": false,
                                scopedSlots: {title: 'custom'},
                                "children": [
                                    {
                                        "key": "0-2-1",
                                        "title": "2.1级任务",
                                        "show": false,
                                        scopedSlots: {title: 'custom'},
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "key": "0-3",
                                "title": "3级任务",
                                "show": false,
                                scopedSlots: {title: 'custom'},
                                "children": [
                                    {
                                        "key": "0-3-1",
                                        "title": "3.1级任务",
                                        "show": false,
                                        scopedSlots: {title: 'custom'},
                                        "children": []
                                    }
                                ]
                            }
                        ]
                }
            ]

        },
    }
</script>

<style scoped>
    .but_type {
        height: 20px;
        line-height: 20px;
        font-size: 8px;
        margin-top: -1px;
        margin-left: 10px;
    }


</style>

