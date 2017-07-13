<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <router-link to="/index" tag="div">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="分类">
        <router-link to="/classify" tag="div">分类</router-link>
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <router-link to="/shopping-cart" tag="div">购物车</router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <router-link to="/mine" tag="div">我的</router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

export default {
    data(){
        return{
            selected:'首页'
        }
    },
  name: 'app',
  components: {}
}
</script>

<style>

</style>
