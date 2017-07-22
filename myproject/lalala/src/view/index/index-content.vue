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
                <input type="radio" name="1" value="a" id="man" class="radio" checked>
                <label for="man" class="new_radio">男</label>
                <input type="radio" name="1" value="b" id="women" class="radio">
                <label for="women" class="new_radio">女</label>
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
    /*改变单选框*/
    .radio {
        display: none;
    }
    .new_radio{
        width: 40px;
        height: 20px;
        display: inline-block;
        line-height: 20px;
        cursor: pointer;
    }
    .new_radio::before{
        vertical-align: middle;
        content: '';
        width: 20px;
        height: 20px;
        display: inline-block;
        background: url("../../../images/icon_circle-empty.png") no-repeat no-repeat;
        -webkit-background-size: 20px 20px;
        background-size: 20px 20px;
    }
    .radio:checked + .new_radio::before{
        background: url("../../../images/icon_circle-slelected.png") no-repeat no-repeat;
        -webkit-background-size: 20px 20px;
        background-size: 20px 20px;
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
        methods: {

        },
        computed: {},
        watch: {},
        props: {
            navSelected:''
        },
        components: {},
    }
</script>
