<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
const chartRef = ref();
let myChart = null;
const Color = ["#5B8FF9", "#5AD8A6", "#F6BD16"];
const option = {
  backgroundColor: "#040b13",
  title: {
    text: "总库存量：700000",
    right: 0,
    top: 5,
    textStyle: {
      fontSize: 16,
      color: "#A3F0F9",
      fontWeight: "bold",
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    show: true,
    backgroundColor: "#4D4D4D",
    borderWidth: 0,
    padding: 4,
    textStyle: {
      fontSize: "0.08rem",
    },
    formatter: function (params) {
      console.log("params", params);
      const { marker, value, name } = params;
      return `<div>
        <div>${marker}<span style="color: #CCCCCC;">${name}：</span><span style="color: #fff;">${value}T</span></div>
        </div>`;
    },
  },
  series: [
    {
      name: "堆场作业",
      type: "pie",
      radius: ["40%", "67%"],
      selectedMode: "single",
      selectedOffset: 8,
      clockwise: true,
      itemStyle: {
        borderWidth: 0,
        borderRadius: 0,
      },
      label: {
        fontSize: 14,
        formatter: function (params) {
          const { dataIndex, name, value } = params;
          const arr = ["a", "b", "c"];
          return `{${arr[dataIndex]}|${name}}\n {d|${value}}`;
        },
        rich: {
          a: {
            color: Color[0],
          },
          b: {
            color: Color[1],
          },
          c: { color: Color[2] },
          d: {
            color: "#fff",
          },
        },
      },
      labelLine: {
        length: 10,
        length2: 35,
      },
      padAngle: 0,
      color: Color,
      data: [
        { value: 30000, name: "矿石" },
        { value: 25000, name: "煤" },
        { value: 15000, name: "其他" },
      ],
    },
  ],
};

// 设置自动循环选中
const autoSelected = () => {
  let count = 0;
  if (myChart) {
    setInterval(() => {
      myChart.dispatchAction({
        type: "select",
        dataIndex: count % 3,
      });
      count++;
    }, 1000);
  }
};
onMounted(() => {
  myChart = echarts.init(chartRef.value, null, {
    height: 200,
    width: 350,
  });
  myChart.setOption(option);
  autoSelected();
});
</script>
<template>
  <div ref="chartRef" class="container"></div>
</template>
<style scoped></style>
