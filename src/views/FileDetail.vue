<template>
  <div class="steps-container">
    <van-nav-bar
      title="政策详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <img v-if="isImage(url)"  :src="url" width="100%" height="100%" />
    <iframe v-else width="100%" height="100%" :src="url" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
    };
  },
  mounted() {
    this.url = this.$route.query.url;
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    isImage(){
      return this.url.endsWith('jpg') || this.url.endsWith('jpeg') || this.url.endsWith('png') || this.url.endsWith('gig')
    }
  },
};
</script>

<style>
.steps-container {
  width: 100vw;
  height: 100vh;
}
</style>
