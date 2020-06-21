<template>
  <datePicker @handleClickDay="handleClickDay" />
</template>

<script>
import datePicker from "../components/date-picker";
export default {
  name: "date-picker",
  data() {
    return {
      calendarData: []
    };
  },
  components: {
    datePicker
  },
  methods: {
    handleClickDay() {}
  }
};
</script>

<style>
</style>

