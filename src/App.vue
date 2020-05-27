


<template>
    <div class="home">

        <router-view/>


    </div>
</template>

<script>
    export default {
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


