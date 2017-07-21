<template>
    <div>
        <mt-header :title="`${title}`">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
    </div>
</template>
<style>

</style>
<script>
    export default {
        data(){
            return {

            }
        },
        mounted(){
        },
        methods: {},
        computed: {},
        watch: {},
        props: {
            title:{}
        },
        components: {},
    }
</script>
