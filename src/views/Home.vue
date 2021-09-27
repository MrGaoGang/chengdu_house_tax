<template>
  <div class="home">
    <div class="tools-item-title">成都二手房工具集</div>
    <van-grid :column-num="3" class="tools-group">
      <van-grid-item
        v-for="each in menus"
        :key="each.url"
        :icon="each.icon"
        class="menu-item"
        :text="each.name"
        @click="goTo(each.url)"
      >
        <!-- <van-image :src="each.icon" />
        <span class="menu-item-label">{{ each.name }}</span> -->
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getQuery, setItem } from "@/utils/url";
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      menus: [
        {
          icon: "discount",
          name: "首付计算",
          url: "/tax",
        },
        {
          icon: "balance-list-o",
          name: "买房步骤",
          url: "/steps",
        },
        {
          icon: "newspaper-o",
          name: "政策文件",
          url: "/file",
        },

        {
          icon: "cart-circle-o",
          name: "房子清单",
          url: "/houses",
        },
        {
          icon: "shop-o",
          name: "买卖流程",
          url: "https://dora.jiaoyi.ke.com/dorami/home/flow?dora_source=dorami&sharePageSource=share_from_beike&cityCode=510100&cityName=%E6%88%90%E9%83%BD&houseCityCode=510100&parentSceneId=5768502105532950272&duid=DuH7mHTWmAv%2Fy2jLW7xH6lYSdoU6y%2B%2Fj5QgiI6j9aUNokbicY02%2FW0oFKdv546lC6v51wjwbrmci0f2Hkh3dPzzw",
        },
        {
          icon: "records",
          name: "注意事项列表",
          url: "https://docs.qq.com/sheet/DSGVkRVhiUHd5Snh3?tab=BB08J2",
        },
      ],
    };
  },
  created() {
    const phone = getQuery("phone");
    if (!phone) {
      this.menus.splice(3, 1);
    }
    setItem("iphone_num", phone);
  },
  methods: {
    goTo(url = "") {
      if (url.startsWith("http") || url.startsWith("https")) {
        this.$router.push({ path: `file-detail`, query: { url: url } });
      } else {
        this.$router.push({ path: url });
      }
    },
  },
};
</script>

<style lang="less">
body {
  background-color: #f7f8fa;
}
.home {
  .tools-item-title {
    padding: 32px 16px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    text-align: left;
    line-height: 16px;
  }

  .tools-group {
    background-color: white;
    border-radius: 10px;
    width: calc(100% - 20px);
    margin-left: 10px;
    .van-grid-item__content {
      background-color: transparent;
    }
  }
  .menu-item {
    // width: 30%;
    // background-color: white;
    // border: 1px solid white;
    // border-radius: 10px;
    .van-image {
      width: 48px;
      height: 48px;
    }
    .menu-item-label {
      color: #646566;
      font-size: 14px;
      line-height: 1.5;
      margin-top: 10px;
      word-break: break-all;
    }
  }
}
</style>
