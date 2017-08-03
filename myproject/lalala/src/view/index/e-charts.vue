<template>
    <div class="chartDiv">
        <div ref="chart1" class="chart"></div>
        <div ref="chart2" class="chart"></div>
    </div>
</template>
<style>
    .chartDiv{
        width: 7rem;
        margin: 0 auto;
    }
    .chart{
        width: 400px;
        height: 300px;
    }
</style>
<script>
    import echarts from 'echarts';
    export default {
        data(){
            return {
                echarts1: null,
                echarts2: null,
            }
        },
        mounted(){
            this.echarts1 = echarts.init(this.$refs.chart1);
            this.echarts2 = echarts.init(this.$refs.chart2);
            this.init();
        },
        methods: {
            init(){
                let option = {
                    title: {
                        text: '统计图',
                        left:'center',
                        subtext:'产品销量产量'
                    },
                    toolbox: {
                        show:true,
                        feature:{
                            saveAsImage:{
                                show:true
                            },//保存图片
                            dataView:{
                                show:true
                            },//数据视图
                            restore:{
                                show:true
                            },//还原
                            dataZoom:{
                                show:true
                            },//数据缩放
                            magicType:{
                                type: ['line', 'bar']
                            }//图之间的转换
                        },
                        right:'-10px'
                    },
                    tooltip:{
//                        trigger:'axis' //辅助线
                    },
                    legend:{
                        data:['销量','产量'],
                        left:'left'
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar', //树状图
                        data: [5, 20, 36, 10, 10, 20],
                        markPoint:{
                            data:[
                                {type:'max', name:'最大值', symbol:'arrow', symbolOffset:[0, '-100%']},
                                {type:'min', name:'最小值'}
                            ]
                        },
                        markLine:{
                            data:[
                                {type:'average', name:'平均值'}
                            ]
                        }
                    },{
                        name: '产量',
                        type: 'line',
                        data: [7, 22, 40, 30, 30, 80]
                    }]
                };
                this.echarts1.setOption(option);
                let option2 = {
                    backgroundColor: '#2c343c',
                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    legend: {
                        orient:'vertical',
                        left:'left',
                        data:['视频广告', '联盟广告', '邮件营销', '直接访问', '搜索引擎'],
                        textStyle:{
                            color: '#fff'
                        }
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie', //扇形图
                            radius: '55%',
                            data:[
                                {value:235, name:'视频广告'},
                                {value:274, name:'联盟广告'},
                                {value:310, name:'邮件营销'},
                                {value:335, name:'直接访问'},
                                {value:400, name:'搜索引擎'}
                            ],
                            roseType: 'angle',//南丁格尔图
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                this.echarts2.setOption(option2);
            }
        },
        computed: {},
        watch: {},
        props: {},
        components: {},
    }
</script>
