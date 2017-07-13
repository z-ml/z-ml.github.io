<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="nav-1">选项一</mt-tab-item>
            <mt-tab-item id="nav-2">选项二</mt-tab-item>
            <mt-tab-item id="nav-3">选项三</mt-tab-item>
        </mt-navbar>
    </div>
</template>
<style>

</style>
<script>
    export default {
        data(){
            return {
                selected:'nav-1'
            }
        },
        mounted(){
        },
        methods: {},
        computed: {},
        watch: {
            selected(val){
                this.$emit("select", val);
            }
        },
        props: {
            navSelected:''
        },
        components: {

        },
    }
</script>
