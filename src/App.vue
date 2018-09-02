<template>
<div id="myapp">
<add-header></add-header>
<add-sidebar></add-sidebar>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <!-- 内容部分 -->
      <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>


<script>
//导入AppHeader组件
//
import AddHeader from './components/AppHeader.vue';
import AddSidebar from './components/AppSidebar'
//ES6中模块化的语法，作用的导出一个对象。
export default {
  linkExactActiveClass:'active',
  name: 'app',
  components:{
    AddHeader,
    AddSidebar
  },
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
