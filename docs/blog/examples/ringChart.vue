<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
const chartRef = ref();
const option = {
  title: {
    text: "75",
    textStyle: {
      color: "#777",
      fontSize: 20,
      fontWight: "normal",
    },
    // subtext: "总分：100分",
    // subtextStyle: {
    //   color: "#909090",
    // },
    // itemGap: -10, // 主副标题距离
    left: "center",
    top: "center",
  },
  angleAxis: {
    max: 100, // 满分
    clockwise: false, // 逆时针
    // 隐藏刻度线
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
  radiusAxis: {
    type: "category",
    // 隐藏刻度线
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
  polar: {
    center: ["50%", "50%"],
    radius: "140%", //图形大小
  },
  series: [
    {
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "#e2e2e2",
      },
      data: [
        {
          name: "",
          value: 75,
          itemStyle: {
            normal: {
              color: 'rgb(0, 160, 255)',
            },
          },
        },
      ],
      coordinateSystem: "polar",
      roundCap: true,
      barWidth: 20,
    },
  ],
};
onMounted(() => {
  const chart = echarts.init(chartRef.value, null, {
    height: 120,
    width: 120,
  });
  chart.setOption(option);
});
</script>
<template>
  <div ref="chartRef"></div>
</template>
