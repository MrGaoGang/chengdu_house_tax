<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  >
    <slot />
  </van-nav-bar>
</template>

<script>
export default {
  name: "nav-bar",
  props: {
    title: String,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
