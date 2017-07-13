<template>
    <div>
        <img slot="icon" width="24" height="24">
        <div class="search-bar"></div>

    </div>
</template>
<style>
    .index-search {
        display: inline-block;
        width: 80%;
        height: auto;
    }

    .index-search .mint-searchbar{
        background-color: white;
        padding: 0;
        border: 1px solid gainsboro;
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
