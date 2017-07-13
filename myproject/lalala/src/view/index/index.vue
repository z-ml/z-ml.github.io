<template>
    <div>
        <index-head></index-head>
        <top-nav @select="nav_selected"></top-nav>
        <indexContent :nav-selected="navSelected"></indexContent>
    </div>
</template>
<style>

</style>
<script>
    export default {
        data(){
            return {
                navSelected:'content-1',
            }
        },
        mounted(){

        },
        methods: {
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
