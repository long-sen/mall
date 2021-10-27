<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      // home: require("../../assets/img/tabbar/首页.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
#tab-bar {
  display: flex;
  background-color: #b6b6b6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>