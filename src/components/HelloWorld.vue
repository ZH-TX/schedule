<template>
  <!--index.wxml-->
  <div class="page">
    <!-- 头部 -->
    <div class="top">
      <div v-for="(item,index) in calendarTitleArr" :key="index" class="top-text">{{item}}</div>
    </div>
    <div class="scroll">
      <div style="display:flex;">
        <!-- 侧边 -->
        <div >
          <div class="left" v-for="(item,index) in calendarTime" :key="index">{{item}}</div>
        </div>

        <div v-for="(item,index) in calendarTime" :key="index+item">
          <div
            style="width:750px;  position: absolute;border-bottom:1px solid;"
            :style="addStyle(index)"
          ></div>
        </div>

        <!--日程表-->
        <div v-for="(item,index) in wlist" :key="index">
          <div
            class="flex-item kcb-item"
            @click="showCarddiv"
            :style="changeStyle(item,index)"
            :data-index="index"
          >
            <div class="smalltext">{{item.kcmc}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/reset.min.css";


export default {
  props: {
    options: Object
  },
  components: {},
  created() {
    // this.calendarList = this.visibleCalendar;
    // this.calendarType = this.options.calendarType;
  },
  data() {
    return {
      calendarTitleArr: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN "],
      calendarTime: [
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00"
      ],

      colorArrays: [
        "#85B8CF",
        "#90C652",
        "#D8AA5A",
        "#FC9F9D",
        "#0A9A84",
        "#61BC69",
        "#12AEF3",
        "#E29AAD"
      ],
      wlist: [
        { xqj: 1, skjc: 1, skcd: 3, kcmc: "高等数学@教A-301" },
        { xqj: 1, skjc: 5, skcd: 3, kcmc: "高等数学@教A-301" },
        { xqj: 2, skjc: 1, skcd: 2, kcmc: "高等数学@教A-301" },
        { xqj: 2, skjc: 8, skcd: 2, kcmc: "高等数学@教A-301" },
        { xqj: 3, skjc: 4, skcd: 1, kcmc: "高等数学@教A-301" },
        { xqj: 3, skjc: 8, skcd: 1, kcmc: "高等数学@教A-301" },
        { xqj: 3, skjc: 5, skcd: 2, kcmc: "高等数学@教A-301" },
        { xqj: 4, skjc: 2, skcd: 3, kcmc: "高等数学@教A-301" },
        { xqj: 4, skjc: 8, skcd: 2, kcmc: "高等数学@教A-301" },
        { xqj: 5, skjc: 1, skcd: 2, kcmc: "高等数学@教A-301" },
        { xqj: 6, skjc: 3, skcd: 2, kcmc: "高等数学@教A-301" },

        { xqj: 7, skjc: 5, skcd: 3, kcmc: "高等数学@教A-301" }
      ]
    };
  },
  computed: {
    
    
  },
  methods: {
    showCarddiv() {},
    addStyle(index){
      return  `margin-top:${(index+1)*100}px;`
    },
    changeStyle(item,index){
     return `margin-left:${(item.xqj-1)*100}px;margin-top:${(item.skjc-1)*100+5}px;height:${item.skcd*100-5}px;background-color:${this.colorArrays[index%9]}`
    },
    handleClickDay(item) {
      this.$forceUpdate();
      this.$emit("handleClickDay", item);

      this.calendarList.map(x => {
        x.clickDay = false;
      });
      this.$set(item, "clickDay", true);
    }
  }
};
</script>

<style lang="scss" scope>

.page{
  position: relative;
  margin:50px 100px;
}
.flex-item {
  width: 95px;
  height: 100px;
}

.kcb-item {
  position: absolute;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 5px;
}

.smalltext {
  font-size: 8pt;
  color: #fff;
  padding-left: 2px;
}

.top {
  display:flex;
  // width: 900px;
  flex-direction: row;
  margin-left: 35px;
  background-color: #eee;
  color: #7cba23;
}

.top-text {
  width: 100px;
  height: 35px;
  font-size: 12px;
  justify-content: center;
  display: flex;
  align-items: center;
}

.scroll {
  // height: 1170px;
  // z-index: 101;
  // position: fixed;
}

.left {
  width: 35px;
  height: 100px;
  font-size: 9pt;
  justify-content: center;
  display: flex;
  align-items: center;
}
</style>