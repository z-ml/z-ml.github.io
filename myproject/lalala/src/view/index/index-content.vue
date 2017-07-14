<template>
    <div>
        <mt-tab-container v-model="navSelected">
            <mt-tab-container-item id="content-1">
                <mt-swipe :auto="4000" class="swipe-wrap">
                    <mt-swipe-item>
                        <img src="https://i8.mifile.cn/v1/a1/06a720e4-ea47-226b-9a48-e2820882c1ff.webp"></mt-swipe-item>
                    <mt-swipe-item>
                        <img src="https://i8.mifile.cn/v1/a1/a671d7bc-b703-8105-96d8-afc69febafa9.webp"></mt-swipe-item>
                    <mt-swipe-item>
                        <img src="https://i8.mifile.cn/v1/a1/b3f25370-f201-5bf0-71a1-456b6c4ea045.webp"></mt-swipe-item>
                </mt-swipe>
            </mt-tab-container-item>
            <mt-tab-container-item id="content-2">
                2
            </mt-tab-container-item>
            <mt-tab-container-item id="content-3">
                3
            </mt-tab-container-item>
            <mt-tab-container-item id="content-4">
                4
            </mt-tab-container-item>
            <mt-tab-container-item id="content-5">
                5
            </mt-tab-container-item>
            <mt-tab-container-item id="content-6">
                6
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<style>
    .swipe-wrap {
        overflow: hidden;
        position: relative;
        max-height: 5.12rem;
        min-height: 3rem;
    }
    .swipe-wrap img {
        width: 100%;
    }
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
