<template>
  <div class="steps-container">
    <van-nav-bar
      title="买房步骤"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <iframe
      width="100%"
      height="100%"
      src="https://docs.qq.com/desktop/"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  methods:{
    onClickLeft(){
      this.$router.replace("/")
    }
  }
};
</script>

<style>
.steps-container {
  width: 100vw;
  height: 100vh;
}
</style>