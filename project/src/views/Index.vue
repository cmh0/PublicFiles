<template>
  <div class="first">
    <h3>Echarts入门示例</h3>
    <div class="second">
      <v-chart class="s1" :options="polar1" />
      <v-chart :options="polar2" />
    </div>
  </div>
</template>

<script>
// 导入
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/component/polar";
// 上角标的表示数据 应该引入此文件
import "echarts/lib/component/legend";
// 配置选项
let polar1 = {
  title: {
    text: "某站点用户访问来源",
    subtext: "纯属虚构",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    // 纵向排布
    // orient: 'vertical',
    left: "left",
    data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      label: {
        formatter: "{b}:{c}({d}%)",
      },
      data: [],
      emphasis: {
        label: {
          show: true,
        },
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

let polar2 = {
  xAxis: {
    type: "category",
    data: ["衬衫", "羊毛衫", "裤子", "袜子", "连衣裙", "风衣", "鞋"],
  },
  //  legend: {
  //     left: 'left',
  //     data: ['衬衫']
  // },

  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [],

      type: "bar",
    },
  ],
};

export default {
  data() {
    return {
      polar1: polar1,
      polar2: {},
    };
  },
  components: {
    "v-chart": ECharts,
  },
  created() {
    setTimeout(() => {
      this.polar1.series[0].data = [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" },
      ];
      polar2.series[0].data = [120, 200, 150, 80, 70, 110, 130];
      this.polar2 = polar2;
    }, 3000);
  },
  methods: {},
  components: {
    "v-chart": ECharts,
  },
};
</script>
<style scoped>
.first {
  width: 100%;
  height: auto;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
}
.first h3 {
  font: blod 60px/48px "微软雅黑";
  color: #262626;
  padding: 30px 30px;
}
.first .second {
  display: flex;
  justify-content: space-between;
}
.s1 {
  width: 500px;
}
</style>