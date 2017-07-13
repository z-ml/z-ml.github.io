<template>
    <div>
        <mt-tab-container v-model="navSelected">
            <mt-tab-container-item id="content-1">
                1
            </mt-tab-container-item>
            <mt-tab-container-item id="content-2">
                2
            </mt-tab-container-item>
            <mt-tab-container-item id="content-3">
                3
            </mt-tab-container-item>
        </mt-tab-container>
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
            navSelected:''
        },
        components: {},
    }
</script>
