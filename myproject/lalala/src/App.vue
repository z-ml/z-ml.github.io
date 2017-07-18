<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected" class="footer" fixed ref="foot_nav">
      <mt-tab-item id="/index" :class="{on : $route.path === '/index'}">
        <div class="ispr ih"></div>
        <router-link to="/index" tag="div">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="/classfiy" :class="{on : $route.path === '/classify'}">
        <div class="ispr ic"></div>
        <router-link to="/classify" tag="div">分类</router-link>
      </mt-tab-item>
      <mt-tab-item id="/shopping-cart" :class="{on : $route.path === '/shopping-cart'}">
        <div class="ispr is"></div>
        <router-link to="/shopping-cart" tag="div">购物车</router-link>
      </mt-tab-item>
      <mt-tab-item id="/mine" :class="{on : $route.path === '/mine'}">
        <div class="ispr if"></div>
        <router-link to="/mine" tag="div">我的</router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style>
  .ispr{
    width: .4rem;
    height: .4rem;
    background-image: url(https://m.mi.com/component/footer/img/spr1_5b2e09c.png);
    -webkit-background-size: .4rem 3.2rem;
    -moz-background-size: .4rem 3.2rem;
    -ms-background-size: .4rem 3.2rem;
    -o-background-size: .4rem 3.2rem;
    background-size: .4rem 3.2rem;
    overflow: hidden;
    margin: 0 auto .08rem;
  }
  .on .ih{
    background-position-y: -2.4rem;
  }
  .ih{
    background-position-y: -2.8rem;
  }
  .on .ic{
    background-position-y: 0;
  }
  .ic{
    background-position-y: -.4rem;
  }
  .on .is{
    background-position-y: -0.8rem;
  }
  .is{
    background-position-y: -1.2rem;
  }
  .on .if{
    background-position-y: -1.6rem;
  }
  .if{
    background-position-y: -2rem;
  }
  .footer{
    z-index: 99;
  }

</style>
<script>
export default {
    data(){
        return{
            selected:''
        }
    },
    mounted(){
        this.selected = this.$route.path;
    },
    methods:{

    },
    watch:{
        $route(){
            console.log(this.$route.path);
            this.selected = this.$route.path;
        }
    },
  name: 'app',
  components: {}
}
</script>


