<template>
  <div>
    <van-nav-bar
      title="购房政策"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-list>
      <van-cell
        v-for="item in list"
        :key="item.name"
        icon="volume-o"
        :title="item.name"
        @click="goToDetail(item)"
      />
    </van-list>
  </div>
</template>

<script>
const publicPath =
  process.env.NODE_ENV === "production" ? "/chengdu-house-tax" : "";
export default {
  data() {
    return {
      list: [
        {
          name: "增值税政策",
          url: `${publicPath}/files/增值税.html`,
        },
        {
          name: "关于2021.9.1契税上调问题",
          url: "https://ly.scol.com.cn/thread?tid=2850928&act=type",
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goToDetail(item) {
      this.$router.push({ path: `file-detail`, query: { url: item.url } });
    },
  },
};
</script>

<style></style>
