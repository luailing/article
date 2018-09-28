~function () {
    var myChart = echarts.init(ET1);
    var option = {
        timeline: {
            data: [
                '2007', '2008', '2009', '2010',
                {name: '2011', symbol: 'emptyStar6', symbolSize: 8},
                '2012', '2013', '2014', '2015',
                {name: '2016', symbol: 'star6', symbolSize: 8}
            ]
        },
        options: [
            {
                title: {
                    text: '2007年-2016年入境游客年龄比例',
                    x: 'center',
                    textStyle: {
                        fontSize: 14
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                toolbox: {
                    show: true,
                    feature: {
                        magicType: {
                            show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1700
                                }
                            }
                        }
                    }
                },
                series: [
                    {
                        name: '2007年入境游客年龄变化',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: '50%',
                        data: [
                            {value: 107.77, name: '14岁以下'},
                            {value: 209.43, name: '15-24岁'},
                            {value: 1192.54, name: '25-44岁'},
                            {value: 948.39, name: '45-64岁'},
                            {value: 152.83, name: '65岁以上'}
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2008年入境游客年龄变化',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: '50%',
                        data: [
                            {value: 98.52, name: '14岁以下'},
                            {value: 206.13, name: '15-24岁'},
                            {value: 1129.1, name: '25-44岁'},
                            {value: 871.7, name: '45-64岁'},
                            {value: 127.09, name: '65岁以上'}
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2009年入境游客年龄变化',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: '50%',
                        data: [
                            {value: 109.44, name: '14岁以下'},
                            {value: 203.09, name: '15-24岁'},
                            {value: 1171.31, name: '25-44岁'},
                            {value: 965.2, name: '45-64岁'},
                            {value: 128.95, name: '65岁以上'}
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2010年入境游客年龄变化',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: '50%',
                        data: [
                            {value: 199.44, name: '14岁以下'},
                            {value: 203.09, name: '15-24岁'},
                            {value: 1171.31, name: '25-44岁'},
                            {value: 965.2, name: '45-64岁'},
                            {value: 163.65, name: '65岁以上'}
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2011年入境游客年龄变化',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: '50%',
                        data: [
                            {value: 111.94, name: '14岁以下'},
                            {value: 212.44, name: '15-24岁'},
                            {value: 1227.62, name: '25-44岁'},
                            {value: 992.28, name: '45-64岁'},
                            {value: 166.92, name: '65岁以上'}
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2012年入境游客年龄变化',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: '50%',
                        data: [
                            {value: 111.79, name: '14岁以下'},
                            {value: 215.87, name: '15-24岁'},
                            {value: 1229.72, name: '25-44岁'},
                            {value: 988.7, name: '45-64岁'},
                            {value: 173.07, name: '65岁以上'}
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2013年入境游客年龄变化',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: '50%',
                        data: [
                            {value: 107.89, name: '14岁以下'},
                            {value: 206.65, name: '15-24岁'},
                            {value: 1209.16, name: '25-44岁'},
                            {value: 950.54, name: '45-64岁'},
                            {value: 154.78, name: '65岁以上'}
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2014年入境游客年龄变化',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: '50%',
                        data: [
                            {value: 103.92, name: '14岁以下'},
                            {value: 204.78, name: '15-24岁'},
                            {value: 1210.24, name: '25-44岁'},
                            {value: 961, name: '45-64岁'},
                            {value: 156.13, name: '65岁以上'}
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2015年入境游客年龄变化',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: '50%',
                        data: [
                            {value: 101.43, name: '14岁以下'},
                            {value: 205.03, name: '15-24岁'},
                            {value: 1184.25, name: '25-44岁'},
                            {value: 949.76, name: '45-64岁'},
                            {value: 158.07, name: '65岁以上'}
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2016年入境游客年龄变化',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: '50%',
                        data: [
                            {value: 114.73, name: '14岁以下'},
                            {value: 303.32, name: '15-24岁'},
                            {value: 1473.56, name: '25-44岁'},
                            {value: 1078.39, name: '45-64岁'},
                            {value: 178.37, name: '65岁以上'}
                        ]
                    }
                ]
            },
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET2);
    var option = {
        timeline : {
            data : [
                '2007', '2008', '2009', '2010',
                { name:'2011', symbol:'emptyStar6', symbolSize:8 },
                '2012', '2013', '2014', '2015',
                { name:'2016', symbol:'star6', symbolSize:8 }
            ],
            label : {
                formatter : function(s) {
                    return s.slice(0, 7);
                }
            }
        },
        options : [
            {
                title : {
                    text: '2007年-2016年入境游客目的',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                toolbox: {
                    show : true,
                    feature : {
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1700
                                }
                            }
                        },
                    }
                },
                series : [
                    {
                        name:'2007年入境游客目的',
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data:[
                            {value: 696.05,  name:'会议/商务'},
                            {value: 1314.08,  name:'观光休闲'},
                            {value: 7.96,  name:'探亲访友'},
                            {value:233.35,  name:'服务员工'},
                            {value: 359.53, name:'其他'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'2008年入境游客目的',
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data:[
                            {value:567.77,  name:'会议/商务'},
                            {value: 1203.96,  name:'观光休闲'},
                            {value: 6.79,  name:'探亲访友'},
                            {value:243.19,  name:'服务员工'},
                            {value: 410.82, name:'其他'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'2009年入境游客目的',
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data:[
                            {value:523.72,  name:'会议/商务'},
                            {value: 1013.27,  name:'观光休闲'},
                            {value: 8.01,  name:'探亲访友'},
                            {value:227.37,  name:'服务员工'},
                            {value: 421.38, name:'其他'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'2010年入境游客目的',
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data:[
                            {value:619.67,  name:'会议/商务'},
                            {value: 1238.2,  name:'观光休闲'},
                            {value: 9.1,  name:'探亲访友'},
                            {value:246.27,  name:'服务员工'},
                            {value:499.44, name:'其他'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'2011年入境游客目的',
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data:[
                            {value: 632.64,  name:'会议/商务'},
                            {value:1221.82,  name:'观光休闲'},
                            {value: 10.99,  name:'探亲访友'},
                            {value:269.39,  name:'服务员工'},
                            {value: 576.35, name:'其他'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'2012年入境游客目的',
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data:[
                            {value: 628.02,  name:'会议/商务'},
                            {value: 1162.9,  name:'观光休闲'},
                            {value: 10.77,  name:'探亲访友'},
                            {value:286.47,  name:'服务员工'},
                            {value: 630.99, name:'其他'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'2013年入境游客目的',
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data:[
                            {value: 619.4,  name:'会议/商务'},
                            {value: 1012.3,  name:'观光休闲'},
                            {value: 19.91,  name:'探亲访友'},
                            {value:319.53,  name:'服务员工'},
                            {value: 657.89, name:'其他'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'2014年入境游客目的',
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data:[
                            {value: 539.57,  name:'会议/商务'},
                            {value: 892.99,  name:'观光休闲'},
                            {value: 60.33,  name:'探亲访友'},
                            {value:328.54,  name:'服务员工'},
                            {value: 814.66, name:'其他'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'2015年入境游客目的',
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data:[
                            {value:537.66,  name:'会议/商务'},
                            {value:824.88,  name:'观光休闲'},
                            {value: 79.75,  name:'探亲访友'},
                            {value:349.69,  name:'服务员工'},
                            {value:806.56, name:'其他'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'2016年入境游客目的',
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data:[
                            {value:579.74,  name:'会议/商务'},
                            {value: 1051.15,  name:'观光休闲'},
                            {value:96.19,  name:'探亲访友'},
                            {value:471.75,  name:'服务员工'},
                            {value: 949.55, name:'其他'}
                        ]
                    }
                ]
            },
        ]
    };
    myChart.setOption(option);
}();
