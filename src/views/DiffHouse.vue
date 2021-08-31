<template>
  <div>
    <nav-bar title="房子对比" />
    <div class="diff-list-container">
      <div v-for="each in items" :key="each.name" class="item-diff-ctr">
        <div class="item-diff name">{{ each.name }}</div>
        <div
          :class="each.left.win ? 'item-diff left active' : 'item-diff left'"
        >
          {{ each.left.num }}
        </div>
        <div
          :class="each.right.win ? 'item-diff right active' : 'item-diff right'"
        >
          {{ each.right.num }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HOUSE_NAME_MAP } from "../utils/const";
export default {
  data() {
    return {
      items: [],
    };
  },
  computed: {
    oneInfo: function () {
      return this.$store.state.oneInfo;
    },
    twoInfo: function () {
      return this.$store.state.twoInfo;
    },
  },
  created() {
    const oneInfo = this.$;
    this.items.push({
      name: "",
      left: {
        num: this.oneInfo.name,
      },
      right: {
        num: this.twoInfo.name,
      },
    });
    Object.keys(HOUSE_NAME_MAP).forEach((ele) => {
      if (ele === "imgs" || ele === "name" || ele === "desc") {
        return;
      }
      if (["price", "firstPay"].indexOf(ele) !== -1) {
        // 越小越好

        this.items.splice(1, 0, {
          name: HOUSE_NAME_MAP[ele],
          left: {
            num: this.oneInfo[ele],
            win: this.oneInfo[ele] < this.twoInfo[ele],
          },
          right: {
            num: this.twoInfo[ele],
            win: this.oneInfo[ele] > this.twoInfo[ele],
          },
        });
      } else {
        // 越大越好
        this.items.push({
          name: HOUSE_NAME_MAP[ele],
          left: {
            num: this.oneInfo[ele],
            win: this.oneInfo[ele] > this.twoInfo[ele],
          },
          right: {
            num: this.twoInfo[ele],
            win: this.oneInfo[ele] < this.twoInfo[ele],
          },
        });
      }
    });
    this.items.push({
      name: "其他信息",
      left: {
        num: this.oneInfo.desc,
      },
      right: {
        num: this.twoInfo.desc,
      },
    });
  },
};
</script>

<style lang="less">
.diff-list-container {
  display: flex;
  flex-direction: column;
  background-color: white;
  .item-diff-ctr {
    display: flex;
    width: 100%;
    align-items: center;
    .item-diff {
      flex: 1;
      text-align: center;
      margin-top: 5px;
      min-height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .active {
      background-color: #19be6b;
      border-radius: 5px;
      color: white;
      font-weight: bold;
    }
    .name {
    }
    .left {
    }
    .right {
    }
  }
}
</style>
