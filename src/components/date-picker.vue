<template>
  <!--index.wxml-->
  <div class="page">
    <!-- 头部 -->
    <input type="button" class="add" @click="add" value="添加" />
    <div class="top">
      <div v-for="(item,index) in calendarTitleArr" :key="index" class="top-text">{{item}}</div>
    </div>
    <div class="scroll">
      <div style="display:flex;">
        <!-- 侧边 -->
        <div class="aside">
          <div class="left" v-for="(item,index) in calendarTime" :key="index">{{item}}</div>
        </div>

        <div v-for="(item,index) in calendarTime" :key="index+item">
          <div
            style="width:1100px;position:absolute;border-bottom:1px solid #ccc;"
            :style="addStyle(index)"
          ></div>
        </div>

        <!--日程表-->
        <div v-for="(item,index) in wlist" :key="index">
          <div
            class="flex-item kcb-item"
            @click="showCarddiv(item,index)"
            :style="changeStyle(item,index)"
            :data-index="index"
          >
            <div>
              <div class="time">{{showTime(item)}}</div>
              <div class="smalltext">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <popup
      v-show="isShow"
      :option.sync="selectList"
      @change="handleShow"
      @modify="modify"
      @del="del"
    />
  </div>
</template>

<script>
import "../assets/css/reset.min.css";
import popup from "./pop-model.vue";

export default {
  components: {
    popup
  },
  computed: {},
  created() {
    // this.calendarList = this.visibleCalendar;
    // this.calendarType = this.options.calendarType;
  },
  data() {
    return {
      isShow: false,
      selected: -1,
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
        "#0A0B84",
        "#0A4C84",
        "#60AC69",
        "#12AEF3",
        "#E29AAD"
      ],
      wlist: [
        { day: 1, start: 1.5, len: 2.5, name: "任务A-301", dec: "具体事项1" },
        { day: 1, start: 5, len: 3.5, name: "任务C-401", dec: "具体事项2" },
        { day: 2, start: 1, len: 2, name: "任务A-501", dec: "具体事项3" },
        { day: 2, start: 8, len: 2, name: "任务A-701", dec: "具体事项4" },
        { day: 3, start: 4, len: 1, name: "任务B-301", dec: "具体事项5" },
        { day: 3, start: 8, len: 1, name: "任务A-306", dec: "具体事项6" },
        { day: 3, start: 5, len: 2, name: "任务A-351", dec: "具体事项7" },
        { day: 4, start: 2, len: 3, name: "任务C-501", dec: "具体事项8" },
        { day: 4, start: 8, len: 2, name: "任务A-301", dec: "具体事项9" },
        { day: 5, start: 1, len: 2, name: "任务A-901", dec: "具体事项10" },
        { day: 6, start: 3, len: 2, name: "任务D-401", dec: "具体事项11" },
        { day: 7, start: 5, len: 3, name: "任务A-601", dec: "具体事项12" }
      ],
      selectList: {}
    };
  },

  methods: {
    //增删改查, 以及操作记录
    //增加,  在保存与删除,添加的时候记录一条数据
    add() {
      this.selectList = {
        day: 1,
        start: "",
        len: "",
        name: "任务",
        dec: ""
      };
      this.selected = -1;
      this.isShow = true;
      this.recordList({
        time: this.time(),
        action: "添加",
        content: this.selectList.name
      });
    },
    //取消
    handleShow() {
      this.isShow = !this.isShow;
    },
    //保存
    modify(arr) {
      if (this.selected > -1) {
        this.$set(this.wlist, this.selected, arr);
        this.selected = -1;
      } else {
        this.wlist.push(arr);
      }
      this.handleShow();
      this.recordList({
        time: this.time(),
        action: "保存",
        content: arr.name
      });
    },
    //删除
    del() {
      // console.log(this.selected);
      if (this.selected == -1) return;
      this.wlist.splice(this.selected, 1);
      this.handleShow();
      this.recordList({
        time: this.time(),
        action: "保存",
        content: "删除了一条数据"
      });
    },

    //弹出
    showCarddiv(item, index) {
      // console.log(item.time);
      this.isShow = true;
      this.selected = index;
      this.selectList = item;
    },
    //记录数据
    recordList(data) {
      this.$store.commit("pushData", data);
    },
    time() {
      let d = new Date();
      return d.toJSON().substr(0, 10) + " " + d.toTimeString().substr(0, 8);
    },
    //时间格式处理
    showTime(item) {
      //item.start, item.len
      // console.log(event);

      let min = m => {
        return (m - 1 + 9) % 1 === 0 ? "00" : ((m - 1 + 9) % 1) * 60;
      };
      let hour = h => {
        return (h - 1 + 9) % 1 === 0
          ? h - 1 + 9
          : h - 1 + 9 - ((h - 1 + 9) % 1);
      };
      item.time = `${hour(item.start)}:${min(item.start)}-${hour(
        item.start + item.len
      )}:${min(item.start + item.len)}`;
      // console.log(item.time);

      return `${hour(item.start)}:${min(item.start)}-${hour(
        item.start + item.len
      )}:${min(item.start + item.len)}`;
    },

    //样式处理
    addStyle(index) {
      return `margin-top:${(index + 1) * 60}px;`;
    },
    changeStyle(item, index) {
      return `margin-left:${(item.day - 1) * 160}px;margin-top:${(item.start -
        1) *
        60 +
        2}px;height:${item.len * 60 - 5}px;background-color:${
        this.colorArrays[index % 9]
      }`;
    }
  }
};
</script>

<style lang="scss" scope>
.page {
  position: relative;
  margin: 50px 100px;
}
.flex-item {
  width: 155px;
  height: 100px;
}
.add {
  padding: 10px 20px;
}
.aside {
  position: relative;
  margin-top: -30px;
}
.kcb-item {
  position: absolute;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 5px;
}

.smalltext {
  font-size: 14px;
  color: #fff;
  padding-left: 2px;
}

.top {
  display: flex;
  width: 1100px;
  flex-direction: row;
  margin-left: 35px;
  background-color: #eee;
  color: #7cba23;
}

.top-text {
  width: 160px;
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
  height: 60px;
  font-size: 9pt;
  justify-content: center;
  display: flex;
  align-items: center;
}
</style>