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
      <a-col :span="4">
        <a-tree
                class="draggable-tree"
                :default-expanded-keys="expandedKeys"
                draggable
                :tree-data="treeData"
                :defaultExpandAll="false"
                @dragenter="onDragEnter"
                @drop="onDrop"
                @select="onSelect"
       >
        <template slot="custom" slot-scope="item">
          <span>{{ item.title }}</span>

          <a-button
                  v-if="expandedKeys[0] ==item.key"
                  type="primary"
                  class="but_type"
                  style=""
                  @click="()=> edit(item)"
          >添加子节点</a-button>

        </template>
        </a-tree>


      </a-col>

      <a-col :span="20">
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

        ]
        this.tableSet.total = this.dataLisst.length
        this.tableSet.loading = false
      },
      onDragEnter(info) {
        console.log(info);
        this.expandedKeys = info.expandedKeys
      },
      onDrop(info) {
        console.log(info);
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
      onSelect(selectedKeys, e){
        console.log('selectedKeys', selectedKeys)
        console.log('e', e.node)
        e.node.innerHTML='432'
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

      this.treeData = [
        {
          "key": "0-0", "title": "主项任务名称",   scopedSlots: { title: 'custom' },

          "children":
                  [ {"key": "0-1","title": "员工登记","children":[
                      {"key": "0-1-1","title": "1.1任务名称","children":[]}
                    ]},
                    {"key": "0-2","title": "2级任务","children":[
                        {"key": "0-2-1","title": "2.1级任务","children":[]}
                      ]},
                    {"key": "0-3","title": "3级任务","children":[
                        {"key": "0-3-1","title": "3.1级任务","children":[]}
                      ]}
          ]}
      ]

    },
  }
  </script>

