<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
let chartRef: any = ref();
let myChart: any = null;
const rawData = [
  [1000, 700, 500, 700, 1000],
  [500, 500, 500, 500, 500],
  [2000, 1500, 1000, 1000, 1000],
];

const option = {
  grid: {
    left: 33,
    right: 20,
    top: 10,
    bottom: 20,
  },
  legend: {
    selectedMode: true,
    right: 0,
    itemWidth: 8,
    itemHeight: 9,
    textStyle: {
      color: "#fff",
      fontSize: 10,
    },
  },
  // yAxis
  xAxis: {
    type: "value",
    axisLine: {
      show: true,
      lineStyle: {
        color: "#CCCCCC",
      },
    },
    splitNumber: 4,
    axisLabel: {
      fontSize: 11,
      color: "#fff",
      fontWeight: 100,
    },
    axisTick: {
      show: true,
    },
    splitLine: {
      show: false,
    },
  },
  // yAxis
  yAxis: {
    type: "category",
    axisLabel: {
      fontSize: 11,
      color: "#fff",
    },
    axisTick: {
      alignWithLabel: true,
    },
    axisLine: {
      show: true,
      // x轴的线条样式
      lineStyle: {
        color: "#CCCCCC",
      },
    },
    data: ["005", "004", "003", "002", "001"],
  },
  // tooltip: {
  //   // 提示框配置
  //   show: true,
  //   backgroundColor: "#494a4b", // 背景色
  //   borderColor: "#000", // 边框颜色
  //   textStyle: { color: "#fff", fontSize: 12 }, // 文本样式
  //   formatter: function (params: any) {
  //     const { dataIndex } = params;
  //     const getMarker = (color) => {
  //       return `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${color};"></span>`;
  //     };
  //     return `<div>
  //       <div>${getMarker("#A5F1FB")}去年：${rawData[0][dataIndex]}</div>
  //       <div>${getMarker("#37B6FB")}今年：${rawData[1][dataIndex]}</div>
  //       <div>`;
  //   },
  // },
  series: [
    {
      name: "累计完成量",
      type: "bar",
      stack: "total",
      barWidth: "50%",
      data: rawData[0],
    },
    {
      name: "当日完成量",
      type: "bar",
      stack: "total",
      barWidth: "50%",
      data: rawData[1],
    },
    {
      name: "总计划量",
      type: "bar",
      stack: "total",
      barWidth: "50%",
      data: rawData[2],
    },
  ],
};
onMounted(() => {
  myChart = echarts.init(chartRef.value);
  if (myChart) {
    myChart.setOption(option);
  }
});
</script>

<template>
  <div
    ref="chartRef"
    class="container"
    :style="{ height: '192px', width: '487px' }"
  ></div>
</template>

<style scoped>
.container {
  background: #040b13;
}
</style>
