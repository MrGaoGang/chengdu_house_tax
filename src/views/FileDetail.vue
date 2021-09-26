<template>
  <div class="steps-container">
    <van-nav-bar
      title="政策详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <img
      v-if="isImage(url)"
      :src="url"
      width="100%"
      data-action="zoom"
      height="auto"
      class="img-zoomable"
    />
    <iframe
      v-else
      width="100%"
      height="100%"
      :src="url"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { ImagePreview } from "vant";

export default {
  data() {
    return {
      url: "",
    };
  },
  mounted() {
    this.url = this.$route.query.url;
    if (this.isImage()) {
      this.$nextTick(() => {
        ImagePreview([this.url]);
      });
    } else if (this.url.startsWith("https") || this.url.startsWith("http")) {
      window.open(this.url);
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    isImage() {
      return (
        this.url.endsWith("jpg") ||
        this.url.endsWith("jpeg") ||
        this.url.endsWith("png") ||
        this.url.endsWith("gif")
      );
    },
  },
};
</script>

<style>
.steps-container {
  width: 100vw;
  height: 100vh;
}
</style>
