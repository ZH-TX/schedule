<template>
  <div>
    <div>记录数据页面</div>
    <div class="logLine" v-for="(item,index) in $store.state.logList" :key="item.time">
     {{index+1}}. {{ item.time }}  {{item.action}} {{item.content}}
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
       
      }
    },
  }
</script>

<style lang="scss" scoped>
.logLine{
  padding:10px 20px;
}
</style>
