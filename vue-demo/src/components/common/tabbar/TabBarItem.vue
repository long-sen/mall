<template>
  <div class="tab-bar-item" @click="itemclick()">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'chartreuse',
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
};
</script>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
}
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    color:black;
  }

  // .tab-bar-item {
  //   flex: 1;
  //   text-align: center;
  //   height: 49px;
  //   font-size: 14px;
  //   color:black;
  // }

  // .tab-bar-item img {
  //   width: 24px;
  //   height: 24px;
  //   vertical-align: middle;
  //   margin: 4px 0 2px 0;
  // }

  // .actived {
  //   color:coral;
  //   font-weight: bolder;
  // }

</style>