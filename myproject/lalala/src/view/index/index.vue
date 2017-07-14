<template>
    <div>
        <div class="top-header">
            <index-head class="index-header"></index-head>
            <top-nav @select="nav_selected"></top-nav>
        </div>
        <div v-if="isLoading">
            <mt-progress :value="progress" :bar-height="5" class="main-content" style="height: 5px"></mt-progress>
        </div>
        <div v-else>
            <indexContent :nav-selected="navSelected" class="main-content"></indexContent>
        </div>
    </div>
</template>
<style>
    .index-header {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        padding: .15rem 0;
    }
    .main-content {
        z-index: 1;
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        margin-top: 1.8rem;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .top-header {
        position: fixed;
        top: 0;
        height: 1.8rem;
        z-index: 3;
    }
</style>
<script>
    export default {
        data(){
            return {
                isLoading: true,
                progress: 0,
                navSelected:'content-1',
                timer: null
            }
        },
        mounted(){
            this.init();
            this.$nextTick(()=>{
                clearInterval(this.timer);
                let successTimer = setInterval(() => {
                    this.progress += 5;
                    if(this.progress >= 100){
                        clearInterval(successTimer);
                        successTimer = null;
                        this.isLoading = false;
                    }
                }, 10);
            });
        },
        methods: {
            init(){
                this.timer = setInterval(() => {
                    this.progress += 1;
                    if(this.progress >= 90){
                        clearInterval(this.timer);
                    }
                }, 100);
            },
            nav_selected(val){
                switch (val){
                    case 'nav-1':
                        this.navSelected = 'content-1';
                        break;
                    case 'nav-2':
                        this.navSelected = 'content-2';
                        break;
                    case 'nav-3':
                        this.navSelected = 'content-3';
                        break;
                    case 'nav-4':
                        this.navSelected = 'content-4';
                        break;
                    case 'nav-5':
                        this.navSelected = 'content-5';
                        break;
                    case 'nav-6':
                        this.navSelected = 'content-6';
                        break;
                    default:
                        this.navSelected = 'content-1';
                        break;
                }
            }
        },
        computed: {},
        watch: {},
        props: {},
        components: {
            topNav:require('./top-nav.vue'),
            indexHead:require('./index-head.vue'),
            indexContent:require('./index-content.vue')
        }
    }
</script>
