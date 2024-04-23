<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
let chartRef: any = ref();
let myChart: any = null;

const xData = ["15口", "16口", "17口", "18口", "19口", "20口", "21口"];
const yData = [250, 750, 600, 934, 250, 400, 300];

const option = {
  grid: {
    left: 40,
    right: 20,
    top: 20,
    bottom: 25,
  },
  tooltip: {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      color: "#7AD0FF",
      fontSize: 12,
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: [3, 8],
        color: ["#3b505b"],
        // dashOffset: 8
      },
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: xData,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#7AD0FF",
      fontSize: 12,
    },
  },
  series: [
    {
      data: yData,
      type: "line",
      smooth: true, // 平滑的线条
      showSymbol: false, // 是否显示 symbol
      lineStyle: {
        width: 3,
        color: "#8decfd",
      },
      areaStyle: {
        // 区域填充样式，设置后显示成区域面积图
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            // 渐变颜色
            {
              offset: 0,
              color: "#29D2FF",
            },
            {
              offset: 1,
              color: "#000000",
            },
          ],
        },
      },
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
  <div ref="chartRef" class="container"></div>
</template>

<style scoped>
.container {
  background: #040b13;
  width: 547px;
  height: 245px;
}
</style>
