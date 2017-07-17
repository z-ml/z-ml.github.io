<template>
    <div>
        <mt-header title="商品分类">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        <div class="list-navbar" style="top: 39px;" ref="list_navbar">
            <ul>
                <li @click="listNavbar($index)" v-for="(item, $index) in navbar" :key="item">{{item}}</li>
            </ul>
        </div>
        <div class="list-wrap" ref="list_wrap">
            <div class="list-item" v-for="(item, $index) in wrap" :key="item">{{item}}</div>
        </div>
    </div>
</template>
<style>
    .list-navbar{
        position: fixed;
        top: .84rem;
        bottom: .8rem;
        width: 1.52rem;
        margin-top: 1px;
        z-index: 90;
        border-right: 1px solid #efefef;
        overflow: hidden;
    }
    .list-navbar ul{
        z-index: 90;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: -.3rem;
        padding: .2rem .3rem .2rem 0;
        background: #fefefe;
        overflow-y: auto;
    }
    .list-navbar ul li{
        font-size: .34rem;
        height: .9rem;
        line-height: .9rem;
        overflow: hidden;
        text-align: center;
    }
    .list-wrap{
        margin-left: 1.52rem;
        padding: 2px .32rem;
        padding-bottom: 1.2rem;
        overflow: hidden;
    }
    .list-item{
        height: 200px;
    }
    .active {
        color: #fb7d34;
        transform: scale(1);
        -webkit-transform: scale(1);
    }
</style>
<script>
    export default {
        data(){
            return {
                scroll: '',
                navbar:[1,2,3,4,5,6,7,8,9,10,11,12,13],
                wrap:['a','b','c','d','e','f','h','i','j','k','l','m','n']
            }
        },
        mounted(){
            this.init();
            this.$nextTick(()=>{
                this.$indicator.close();
            });
            window.addEventListener('scroll', this.menu);
        },
        methods: {
            init(){
                this.$indicator.open('加载中...');
            },
            menu() {
                this.scroll = document.body.scrollTop;
                if(this.scroll > 40){
                    this.$refs.list_navbar.style.top = 0;
                } else {
                    this.$refs.list_navbar.style.top = `39px`;
                }
                for(let i = 0;i < this.$refs.list_wrap.children.length; i++){
                    if(this.scroll < this.$refs.list_wrap.children[i+1].offsetTop){
                        for(let i = 0; i < this.$refs.list_navbar.children[0].children.length; i++){
                            this.$refs.list_navbar.children[0].children[i].className = '';
                        }
                        this.$refs.list_navbar.children[0].children[i].className = 'active';
                        break;
                    }
                }
            },
            listNavbar(index){
                document.body.scrollTop = this.$refs.list_wrap.children[index].offsetTop;
            },
            isActive(index){
                this.$nextTick(()=>{
                    if(this.scroll < this.$refs.list_wrap.children[index].offsetTop){
                        return true;
                    }
                })
            }
        },
        computed: {},
        watch: {},
        props: {},
        components: {}
    }
</script>
