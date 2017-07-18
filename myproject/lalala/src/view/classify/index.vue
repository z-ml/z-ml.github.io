<template>
    <div>
        <mt-header title="商品分类">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        <div class="list-navbar" ref="list_navbar">
            <ul>
                <li @click="listNavbar($index)" v-for="(item, $index) in navbar" :key="item">{{item}}</li>
            </ul>
        </div>
        <div class="list-wrap" ref="list_wrap">
            <div class="list-item first">
                <img src="https://i8.mifile.cn/v1/a1/ef9e8868-06f4-f53c-b98a-f1691772f79f!500x200.webp">
                <div class="category_title">
                    <span>手机</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            小米6
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            小米Max 2
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            红米4X
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            小米Note 2
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://i8.mifile.cn/v1/a1/6f692f20-8a4f-764e-384a-23c98e9e7ec0!500x200.webp">
                <div class="category_title">
                    <span>小米手机</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            小米6
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            小米Max 2
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            红米4X
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            小米Note 2
                        </div>
                    </div>
                </div>
                <div class="category_title">
                    <span>红米手机</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            小米6
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            小米Max 2
                        </div>
                    </div>
                </div>
                <div class="category_title">
                    <span>移动4G+专区</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            小米6 移动4G+版
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            红米Note 4X 移动4G+版
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://i8.mifile.cn/v1/a1/7e379776-164c-1ce8-0b6a-284d0b018739!500x200.webp">
                <div class="category_title">
                    <span>电视</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            32-43英寸
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            49英寸
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            55-60英寸
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            65英寸
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            70英寸
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            150英寸
                        </div>
                    </div>
                </div>
                <div class="category_title">
                    <span>盒子</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            盒子3s
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            盒子3c
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            盒子3c增强版
                        </div>
                    </div>
                </div>
                <div class="category_title">
                    <span>音箱</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            家庭音箱
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            蓝牙音箱
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://i8.mifile.cn/v1/a1/137588b3-37b8-ae0a-09a2-46d70ae95a46!500x200.webp">
                <div class="category_title">
                    <span>电脑</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            笔记本12.5"
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            笔记本13.3"
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            平板
                        </div>
                    </div>
                </div>
                <div class="category_title">
                    <span>配件及其他</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            鼠标/鼠标垫
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            机械键盘
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            内胆包
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            平板保护类
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1d90ee625e15c227e848c81336a0f8d1.jpg?thumb=1&w=500&h=200">
                <div class="category_title">
                    <span>家电</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            电饭煲
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            净水器
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            净化器
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            扫地机器人
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            电水壶
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            灯具
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            空调伴侣
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://i8.mifile.cn/v1/a1/7224b715-22f2-b243-5d56-8597a0f56dda!500x200.webp">
                <div class="category_title">
                    <span>路由</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3G
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3C
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器HD
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://i8.mifile.cn/v1/a1/ff205815-61e1-ef9f-d7d2-5650f1224c4b!500x200.webp">
                <div class="category_title">
                    <span>智能</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            VR眼镜
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3C
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器HD
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://i8.mifile.cn/v1/a1/f36e2436-a2f1-2ab7-d630-fd5d511545b1!500x200.webp">
                <div class="category_title">
                    <span>电源</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            插线板
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3C
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器HD
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://i8.mifile.cn/v1/a1/28237c8e-af58-aaa4-dee0-6c403c9e7c5b!500x200.webp">
                <div class="category_title">
                    <span>耳机</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            线控耳机
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3C
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器HD
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://i8.mifile.cn/v1/a1/e10e873f-5aa2-e3ae-336a-8b75748a45a4!500x200.webp">
                <div class="category_title">
                    <span>音箱</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            蓝牙音箱
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3C
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器HD
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4621fee79520fd01d8edfe18d0e67a40.jpg?thumb=1&w=500&h=200">
                <div class="category_title">
                    <span>礼品</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            送长辈
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3C
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器HD
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://i8.mifile.cn/v1/a1/2fce745c-1bdc-db84-42dc-56093088a34a!500x200.webp">
                <div class="category_title">
                    <span>生活</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            运动鞋
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3C
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器HD
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <img src="https://i8.mifile.cn/v1/a1/5168518d-d359-be70-a7fd-5c3c4433409e!500x200.webp">
                <div class="category_title">
                    <span>米粉卡</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            日租卡
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <div class="category_title">
                    <span>零售店</span>
                </div>
                <div class="category_group">
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3G
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器3C
                        </div>
                    </div>
                    <div class="product">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="name">
                            路由器HD
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .list-navbar{
        position: fixed;
        top: .84rem;
        bottom: .98rem;
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
        overflow-x: hidden;
    }
    .list-navbar ul li{
        font-size: .34rem;
        height: .9rem;
        line-height: .9rem;
        overflow: hidden;
        text-align: center;
        transform: scale(0.76);
        -webkit-transform: scale(0.76);
    }
    .list-wrap{
        margin-left: 1.52rem;
        padding: 2px .32rem;
        padding-bottom: 1.2rem;
        overflow: hidden;
    }
    .list-wrap .list-item>img{
        width: 100%;
        height: 100%;
        display: block;
        vertical-align: top;
    }
    .list-wrap .category_title{
        background: #fff;
        font-size: .28rem;
        text-align: center;
        font-weight: 400;
        margin-top: .2rem;
        height: 1.28rem;
        line-height: 1.28rem;
        overflow: hidden;
    }
    .category_title span::before,.category_title span::after{
        display: inline-block;
        content: '';
        height: 1px;
        vertical-align: 8%;
        width: .4rem;
        background-color: #e0e0e0;
    }
    .category_title span::before{
        margin-right: .2rem;
    }
    .category_title span::after{
        margin-left: .2rem;
    }
    .category_group {
        margin: -.06rem 0 0;
        overflow: hidden;
    }
    .category_group .product{
        float: left;
        width: 33.33333%;
        text-align: center;
        margin-top: .2rem;
        margin-bottom: .3rem;
        overflow: hidden;
    }
    .product .img{
        width: 1rem;
        height: 1rem;
        margin: 0 auto;
        background: #FFF;
        overflow: hidden;
    }
    .product .img img{
        height: 100%;
        display: block;
        vertical-align: top;
    }
    .product .name {
        margin-top: .28rem;
        white-space: nowrap;
        font-size: .23rem;
        color: rgba(0,0,0,.54);
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .list-navbar ul .active {
        color: #fb7d34;
        transition:all .1s linear;
        transform: scale(1);
        -webkit-transform: scale(1);
    }
</style>
<script>
    export default {
        data(){
            return {
                scroll: '',
                navbar:['新品','手机','电视','电脑','家电','路由','智能','电源','耳机','音响','礼品','生活','米粉卡','零售店']
            }
        },
        mounted(){
            this.init();
            this.$nextTick(()=>{
                //获取第一个li给他加上类active
                let navs = this.$refs.list_navbar.children[0].children;
                navs[0].className = 'active';
                //获取右边最后一个div给他的高度给上屏幕的高度
                let list = this.$refs.list_wrap.children;
                list[list.length-1].style.height = `${window.screen.availHeight}px`;
                this.$indicator.close();
            });
            //监听滑轮事件调用menu函数
            window.addEventListener('scroll', this.menu);
        },
        methods: {
            init(){
                this.$indicator.open('加载中...');
            },
            menu() {
                this.scroll = document.body.scrollTop;
                //如果顶部的高度-scroll的高度小于0左边导航栏的top就等于0
                this.$refs.list_navbar.style.top = (40-this.scroll) + "px";
                if(40-this.scroll < 0){
                    this.$refs.list_navbar.style.top = 0;
                } else {
                    this.$refs.list_navbar.style.top = (40-this.scroll) + "px";
                }
                for(let i = 0;i < this.$refs.list_wrap.children.length; i++){
                    //判断i是否是最后一个如果i是最后一个则将最后一个i加上类active
                    //或者滑动的距离小于右边第i+1个div距离上部的距离给第i个li加上类
                    if(i === this.$refs.list_wrap.children.length-1 || this.scroll < this.$refs.list_wrap.children[i+1].offsetTop){
                        for(let j = 0; j < this.$refs.list_navbar.children[0].children.length; j++){
                            this.$refs.list_navbar.children[0].children[j].className = '';
                            this.$refs.list_navbar.children[0].children[i].className = 'active';
                        }
                        //判断第i个li距离顶部的距离-这个ul的高度如果大于0则滑动
                        if(this.$refs.list_navbar.children[0].children[i].offsetTop - this.$refs.list_navbar.clientHeight > 0){
                            //滑动的距离等于第i个li距离顶部的距离 - 这个ul的高度 + 第i个li的高度
                            this.$refs.list_navbar.children[0].scrollTop = this.$refs.list_navbar.children[0].children[i].offsetTop - this.$refs.list_navbar.clientHeight + this.$refs.list_navbar.children[0].children[i].clientHeight;
                        } else {
                            this.$refs.list_navbar.children[0].scrollTop = 0;
                        }
                        return;
                    }
                }
            },
            //点击左边导航栏的li滑动到该li对应的div
            listNavbar(index){
                document.body.scrollTop = this.$refs.list_wrap.children[index].offsetTop;
            }
        },
        computed: {},
        watch: {},
        props: {},
        components: {}
    }
</script>
