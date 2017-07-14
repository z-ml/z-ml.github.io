<template>
    <div>
        <div class="logo">
            <img src="https://m.mi.com/component/header/img/logo_121d4a6.png">
        </div>
        <div class="search-bar">
            <router-link to="/index" tag="span" slot="left">
                <span>搜索商品名称</span>
            </router-link>
        </div>
        <div class="login">
            <div class="text">登录</div>
        </div>

    </div>
</template>
<style>
    .logo {
        width: 1rem;
        padding: 0 .25rem;
        box-sizing: border-box;
    }
    .logo img {
        width: .5rem;
        height: auto;
    }
    .search-bar{
        line-height: .34rem;
        background: url(https://m.mi.com/component/header/img/search_df67e2f.png) no-repeat;
        background-size: 101% 101%;
        width: 5.2rem;
        height: .53rem;
        border-radius: .05rem;
        border: 1px solid #e5e5e5;
    }
    .search-bar>span{
        display: block;
        padding: .1rem .6rem;
    }
    .login {
        display: block;
        white-space: nowrap;
        box-sizing: border-box;
        text-align: center;
    }
    .login .text{
        font-size: .28rem;
        text-align: center;
        color: #969696;
        margin: 0 .22rem;
    }
</style>
<script>
    export default {
        data(){
            return {
                value:''
            }
        },
        mounted(){
        },
        methods: {},
        computed: {},
        watch: {},
        props: {},
        components: {},
    }
</script>
