<template>


    <div class="main">
        <a-layout id="components-layout-demo-custom-trigger"
        >
            <a-layout-sider :trigger="null" collapsible v-model="collapsed" width="300">
                <div class="logo">
                    <img :src="imgUrl" alt="Vue logo">
                    我是main
                </div>
                <a-menu
                        :default-open-keys="[]"
                        :inline-collapsed="collapsed"
                        @select="openPage"
                        mode="inline"
                        style="text-align: left"
                        theme="dark"
                        v-model="selectedKeys"
                >
                    <a-menu-item key="/index/">
                        <a-icon type="pie-chart"/>
                        <span>Option 1</span>
                    </a-menu-item>


                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="mail"/><span>Navigation One</span></span>
                        <a-menu-item key="/index/task">
                            Option 5
                        </a-menu-item>
                        <a-menu-item key="/index/taskchild">
                            Option 6
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="/index/chart">
                        <a-icon type="desktop"/>
                        <span>Option 2</span>
                    </a-menu-item>
                </a-menu>


            </a-layout-sider>
            <a-layout>
                <a-layout-header
                        :style="{ background: '#fff', padding: 0, left: collapsed ? '80px' : '300px', zIndex: 2 }"
                        class="layout-header-wrap">
                    <a-row>
                        <a-col
                                :span="12"
                                class="caption"
                        >
                            <a-icon
                                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                                    @click="clickCollapsedValFn"
                                    class="trigger"
                            />
                            <p>{{ styleName }}</p>
                        </a-col>

                        <a-col
                                :offset="12"
                                :span="12"
                                class="nav-right-wrap"
                        >
                            <ul>
                                <p class="itemtext">{{ welcome }}</p>
                                <li class="item">
                                    <a-tooltip placement="bottom">
                                        <template slot="title">
                                            <span>你收到的邮件</span>
                                        </template>
                                        <div>
                                            <a-badge :count="11" :number-style="{ backgroundColor: '#ff0000' }"
                                                     style="margin-top: 5px">
                                                <a-avatar icon="mail" style="backgroundColor:#fff; color: #0D74C6;"/>
                                                <!--                            style="backgroundColor:#fff; color: #0D74C6;margin-top: 0px"-->
                                            </a-badge>
                                        </div>
                                    </a-tooltip>
                                </li>
                                <li class="item">
                                    <a-tooltip placement="bottom">
                                        <template slot="title">
                                            <span>你收到的信息</span>
                                        </template>
                                        <div>
                                            <a-badge :count="2" :number-style="{ backgroundColor: '#ff0000' }"
                                                     style="margin-top: 5px">
                                                <a-avatar icon="notification"
                                                          style="backgroundColor:#fff; color: #0D74C6;"/>
                                            </a-badge>
                                        </div>
                                    </a-tooltip>
                                </li>
                                <li class="item" style="width: 80px">


                                    <a-tooltip placement="bottom">
                                        <template slot="title">
                                            <span>退出</span>
                                        </template>
                                        <div>
                                            <a-icon style="margin-right: 10px" type="logout"/>
                                            退出
                                        </div>
                                    </a-tooltip>


                                </li>
                                <li @click="logOut" class="item">
                                    <a-tooltip placement="bottom">
                                        <template slot="title">
                                            <span>未知</span>
                                        </template>
                                        <div>
                                            <a-icon type="pic-left"/>
                                        </div>
                                    </a-tooltip>
                                </li>
                            </ul>
                        </a-col>
                    </a-row>
                </a-layout-header>


                <a-layout-content
                        :style="{ margin: '10px', padding: '10px', background: '#fff', minHeight: '280px' }"
                >
                    <router-view/>
                </a-layout-content>
            </a-layout>
        </a-layout>


    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                imgUrl: require("@/"+"/assets/logo.png"),
                collapsed: false,
                styleName: '测试效果',
                welcome: '欢迎进入',
                selectedKeys: ['/']
            };
        },
        methods: {
            clickCollapsedValFn() {
                this.collapsed = !this.collapsed
            },
            logOut: function () {
                this.$router.replace({path: '/Login'})
            },
            openPage({key, selectedKeys}) {

                this.selectedKeys = selectedKeys
                this.$router.push({path: key})


            }

        }
    };
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        overflow: hidden;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    #components-layout-demo-custom-trigger {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 152px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
    #components-layout-demo-custom-trigger .logo img{
        width: 60px;
        height: 60px;
    }

    .ant-menu-item-selected {

        &:after {
            display: none;
        }

        &:before {
            transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
            opacity: 1;
            transform: scaleY(1);
        }
    }

    /* 中间顶部区域 */
    .layout-header-wrap {
        color: #0D74C6;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);

        .caption {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            font-size: 24px;

            .trigger {
                display: flex;
                align-items: center;
                height: 64px;
                line-height: 64px;
                padding: 0 24px;

                vertical-align: middle;
                transition: all .3s ease;
                cursor: pointer;

                &:hover {
                    color: #fff;
                    background: #0D74C6;
                }
            }

            p {
                margin-bottom: 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }

        .nav-right-wrap {
            height: 64px;
            line-height: 64px;
            margin-left: 0;

            ul {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                height: 100%;
                line-height: 100%;
                margin: 0;
                padding: 0 10px 0 0;
                list-style: none;

                p {
                    margin-bottom: 0;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }


            .itemtext {
                margin-bottom: 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                line-height: 64px;
                color: #666666;
            }

            .item {
                width: 50px;
                cursor: pointer;


                .yrt {
                    padding-right: 0;
                    color: #0D74C6;
                }

                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                }

                .anticon {
                    font-size: 21px;
                }

                /*&:hover,*/
                /*&:hover .yrt,*/
                /*&:hover .anticon {*/
                /*  color: #fff!important;*/
                /*  background: #0D74C6;*/
                /*}*/
            }
        }

    }


    /* 导航列表区域 */
    .slider-menu {
        position: fixed;
        top: 124px;
        left: 0;
        bottom: 0;
        width: 240px;
        overflow: auto;
    }


    .search{
        line-height: 50px;

    }


    :global{
        .ant-menu-dark{
            background: #ff4f02 !important;
        }
    }

</style>

