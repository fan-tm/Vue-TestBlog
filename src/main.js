//es6语法：
import Vue from "vue";
//引入我们编写的测试用vue文件。
import App from "@components/app/app.vue"

Vue.config.debug = true;//开启错误提示

new Vue({
    el: '#app',
    render: h => h(App)
})