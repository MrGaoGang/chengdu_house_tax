<template>
  <div>
    <van-nav-bar
      title="房子清单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon name="add-o" size="24" @click="onCreateHouse" />
      </template>
    </van-nav-bar>
    <div class="houses" v-if="houses.length > 0">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list finished-text="没有更多了">
          <div
            v-for="(each, index) in houses"
            :key="each.id"
            @click="onItemClick(each, index)"
            :class="
              each._diff ? 'item-house-wrapper diff' : 'item-house-wrapper'
            "
          >
            <div class="num">
              <van-tag type="primary">{{ index + 1 }}</van-tag>
            </div>
            <van-icon
              size="18"
              name="ellipsis"
              class="show-more"
              @click="showActions(each)"
            />
            <ItemHouses :houseInfo="each">
              <van-field
                :value="formatDate(each.updatedAt)"
                label="看房时间"
                disabled
              >
              </van-field>
              <van-cell
                v-if="each.imgs !== '[]' && each.imgs !== ''"
                title="点击查看图片"
                @click="onPreviewImages(each)"
              />
            </ItemHouses>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
    <van-empty v-else description="抱歉,暂时没有数据" />
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      @select="onSelectChange"
      close-on-click-action
      @cancel="onCancel"
    />

    <div class="diff-house-btn" @click="showHouseDiff">对/比</div>
  </div>
</template>

<script>
import { deleteHouse, getAllHouses } from "@/servers/house";
import ItemHouses from "../components/ItemHouse.vue";
import { utc2beijing } from "@/utils";
import { ImagePreview, Toast } from "vant";
import { SET_DIFF_HOUSES, SET_SELECT_HOUSE } from "@/store/mutation-type";
export default {
  components: {
    ItemHouses,
  },
  data() {
    return {
      refreshing: false,
      houses: [],
      show: false,
      actions: [{ name: "编辑" }, { name: "删除", color: "#ed4014" }],
      selectInfo: {},
      isActiveDiff: false,
      diffSelectList: [],
    };
  },
  created() {
    getAllHouses().then((res) => {
      this.houses = res;
    });
  },
  methods: {
    onCreateHouse() {
      this.$router.push("/houes-add");
    },
    formatDate(data) {
      return utc2beijing(data);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    showActions(info) {
      this.selectInfo = info;
      this.show = true;
    },
    onCancel() {
      this.show = false;
    },
    onItemClick(each, index) {
      if (this.isActiveDiff) {
        this.diffSelectList.push(each);
        this.houses.splice(index, 1, {
          ...each,
          _diff: 1,
        });
        if (this.diffSelectList.length === 2) {
          this.$store.commit(SET_DIFF_HOUSES, {
            oneInfo: this.diffSelectList[0],
            twoInfo: this.diffSelectList[1],
          });
          this.$router.push("/houes-diff");
        }
      }
    },
    showHouseDiff() {
      this.isActiveDiff = true;
      const len = this.diffSelectList.length;
      if (len < 2) {
        Toast("请选择列表中的【两个】房子", {});
      }
    },
    onPreviewImages(each) {
      ImagePreview(JSON.parse(each.imgs).map((ele) => ele.url));
    },
    onSelectChange(action, index) {
      if (index === 1) {
        // 删除
        deleteHouse(this.selectInfo.id)
          .then(() => {
            Toast.success("删除成功!");
            this.onRefresh();
          })
          .catch(() => {
            Toast.success("删除失败!");
          });
      } else if (index === 0) {
        this.$store.commit(SET_SELECT_HOUSE, this.selectInfo);
        this.$router.push({ path: "/houes-add", query: { edit: 1 } });
      }
    },
    onRefresh() {
      this.refreshing = true;

      getAllHouses().then((res) => {
        this.houses = res;
        setTimeout(() => {
          this.refreshing = false;
        }, 1000);
      });
    },
  },
};
</script>

<style lang="less">
.diff-house-btn {
  width: 60px;
  height: 60px;
  bottom: 60px;
  right: 30px;
  position: fixed;
  background-color: #2b85e4;
  border-radius: 50%;
  color: white;
  line-height: 60px;
}
.houses {
  display: flex;
  flex-direction: column;
  .show-more {
  }

  .item-house-wrapper {
    position: relative;
    width: calc(100% - 30px);
    margin-left: 10px;
    margin-top: 20px;
    border-radius: 10px;
    padding: 5px;
    background-color: white;
    .show-more {
      position: absolute;
      top: 5px;
      right: 10px;
      z-index: 2;
    }
    .num {
      position: absolute;
      top: 0px;
      left: 5px;
      z-index: 2;
    }
    .item-house {
      .van-cell::after {
        border-bottom-width: 0px;
      }
      .van-radio-group {
        display: flex;
        .van-radio:nth-child(2) {
          margin-left: 10px;
        }
        .van-radio__icon--checked .van-icon {
          background-color: #1989fa;
          border-color: #1989fa;
          color: white;
        }
        .van-radio__label--disabled {
          color: #323233;
        }
      }
      .van-field--disabled .van-field__label {
        color: #646566;
      }
      .van-field__control:disabled {
        color: #646566;
        -webkit-text-fill-color: #646566;
      }
      .van-rate__icon--disabled {
        color: #ed4014;
      }
    }
  }

  .item-house-wrapper.diff {
    background-color: #2b85e4;
  }
}
</style>
