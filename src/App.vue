<template>
    <a-locale-provider :locale="locale" >
    <div class="home">

            <router-view/>

    </div>
    </a-locale-provider>
</template>

<script>
    import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
    import moment from 'moment';
    import 'moment/locale/zh-cn';
    moment.locale('zh-cn');
    export default {
        data() {
            return {
                locale: zh_CN,
                imgUrl: require("@/"+"/assets/logo.png"),
                collapsed: false,
                styleName: '测试效果',
                welcome: '欢迎进入',
                selectedKeys: ['/']
            };
        },
        methods: {
            gopage(){
// this.$router.push('/main')
// this.$router.replace({name: '/main'})
                this.$router.push({path: '/index'})
            },
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


