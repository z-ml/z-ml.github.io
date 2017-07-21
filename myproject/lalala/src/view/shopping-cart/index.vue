<template>
    <div>
        <mi-header :title="title"></mi-header>
        <mt-cell
                title="登录显示更多优惠"
                to="//www.z-ml.cn"
                is-link
                value="去登陆">
        </mt-cell>
        <div class="grey">
            <router-link to="/index">
                <span>购物车还是空的</span>
                <em>去逛逛</em>
            </router-link>
        </div>
    </div>
</template>
<style>
    .grey {
        background: #ebebeb;
    }
    .grey span {
        display: block;
        line-height: .8rem;
        background: url(https://m.mi.com/views/cart/index/img/cartnull_0de91f1.png) no-repeat 0 center;
        background-size: auto 100%;
        padding: 0 .16rem 0 .96rem;
        color: rgba(0,0,0,.27);
    }
    .grey em{
        display: block;
        border: 1px solid rgba(0,0,0,.15);
        box-sizing: border-box;
        height: .5rem;
        line-height: .5rem;
        padding: 0 .24rem;
        color: rgba(0,0,0,.87);
    }
</style>
<script>
    export default {
        data(){
            return {
                title:'购物车'
            }
        },
        mounted(){
        },
        methods: {},
        computed: {},
        watch: {},
        props: {},
        components: {
            miHeader:require('../../compents/mi-header.vue')
        },
    }
</script>
