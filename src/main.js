import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import VueParticles from 'vue-particles'

Vue.use(VXETable)

// 给 vue 实例挂载全局窗口对象
Vue.prototype.$XModal = VXETable.modal

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
