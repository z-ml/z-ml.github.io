<template>
    <div>
        classify
    </div>
</template>
<style>

</style>
<script>
    export default {
        data(){
            return {
                h1: 'aaaaa'
            }
        },
        mounted(){
            this.init();
            this.$nextTick(()=>{
                this.$indicator.close();
            });
        },
        methods: {
            init(){
                this.$indicator.open('加载中...');
            }
        },
        computed: {},
        watch: {},
        props: {},
        components: {}
    }
</script>
