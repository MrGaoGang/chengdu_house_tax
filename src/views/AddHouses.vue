<template>
  <div>
    <nav-bar :title="isEdit ? '编辑' : '创建'" />
    <ItemHouses :houseInfo="houseInfo" :disabled="false" />

    <van-uploader multiple="true" v-model="fileList" :after-read="afterRead" />

    <van-button type="info" size="large" @click="onSubmit">提交</van-button>
  </div>
</template>

<script>
import { addHouses, updateHouses } from "@/servers/house";
import { getCosInfo } from "@/servers/cos";

import ItemHouses from "../components/ItemHouse.vue";
import { Toast } from "vant";
import { getQuery } from "@/utils/url";
import COS from "cos-js-sdk-v5";
let cos = null;
export default {
  components: {
    ItemHouses,
  },

  data() {
    return {
      fileList: [],
      isEdit: false,
      houseInfo: {
        area: null,
        caiguang: 0,
        distance: 0,
        env: 0,
        firstPay: null,
        huxingOrChaoXiang: 0,
        fiveOnly: 0,
        priority: 0,
        imgs: "[]",
        jiaotong: 0,
        name: "",
        price: null,
        wuye: 0,
        xuewei: 0,
        xueweiEnable: 0,
        desc: "",
      },
      cosInfo: {},
    };
  },
  created() {
    if (getQuery("edit") === "1") {
      this.isEdit = true;
      this.houseInfo = {
        ...this.$store.state.selectHouseInfo,
      };
      this.fileList = JSON.parse(this.houseInfo.imgs || "[]");
    }
  },
  mounted() {
    cos = new COS({
      getAuthorization: function (options, callback) {
        console.log(options);
        // 异步获取临时密钥
        getCosInfo().then((res) => {
          callback({
            TmpSecretId: res.TmpSecretId,
            TmpSecretKey: res.TmpSecretKey,
            SecurityToken: res.SecurityToken,
            ExpiredTime: res.ExpiredTime, // 时间戳，单位秒，如：1580000900
          });
        });
      },
    });
  },
  methods: {
    afterRead(file) {
      if (Array.isArray(file)) {
        file.forEach((ele, index) => {
          this.updateFileList(ele, index);
        });
      } else {
        this.updateFileList(file, 0);
      }
    },

    updateFileList(ele, index) {
      ele = {
        ...ele,
        status: "uploading",
        message: "上传中...",
        tmpIndex: index,
      };
      if (ele.file !== null) {
        const fileIndex = this.fileList.findIndex((item) => {
          return item.file && item.file.name === ele.file.name;
        });
        this.$set(this.fileList, fileIndex, ele);
        this.uploadFile(ele.file, index)
          .then((res) => {
            const infoIndex = this.fileList.findIndex((ele) => {
              console.log("iteminfo:", ele);
              return ele.tmpIndex === res.index;
            });
            if (infoIndex !== -1) {
              this.fileList.splice(infoIndex, 1, {
                url: `https://${res.url}`,
              });
            }
          })
          .catch((res) => {
            const infoIndex = this.fileList.findIndex((ele) => {
              return ele.tmpIndex === res.index;
            });

            if (infoIndex !== -1) {
              this.fileList.splice(infoIndex, 1, {
                url: "",
                status: "failed",
                message: "上传失败",
              });
            }
          });
      }
    },

    uploadFile(file, index) {
      const folder = "chengdu-house-tax/cdn/";
      return new Promise((resolve, reject) => {
        cos.uploadFile(
          {
            Bucket: "ui-builder-1252273386" /* 必须 */,
            Region: "ap-nanjing" /* 存储桶所在地域，必须字段 */,
            Key:
              folder +
              Date.now() +
              file.name.substring(file.name.lastIndexOf(".")) /* 必须 */,
            StorageClass: "STANDARD",
            Body: file, // 上传文件对象
            SliceSize:
              1024 *
              1024 *
              2 /* 触发分块上传的阈值，超过5MB使用分块上传，非必须 */,

            onProgress: function (progressData) {
              console.log(JSON.stringify(progressData));
            },
          },
          (err, data) => {
            // console.log(err || data);
            if (err) {
              reject({
                url: "",
                index,
              });
            } else {
              resolve({
                url: data.Location,
                index: index,
              });
            }
          }
        );
      });
    },
    onSubmit() {
      if (!this.isEdit) {
        addHouses({
          ...this.houseInfo,
          imgs: JSON.stringify(this.fileList.filter((ele) => ele.url)),
        })
          .then((res) => {
            Toast.success("添加成功！");
          })
          .catch((res) => {
            Toast.fail(res);
          });
      } else {
        updateHouses({
          ...this.houseInfo,
          imgs: JSON.stringify(this.fileList.filter((ele) => ele.url)),
        })
          .then((res) => {
            Toast.success("更新成功！");
          })
          .catch((res) => {
            Toast.fail(res);
          });
      }
    },
  },
};
</script>

<style lang="less">
.van-button--large {
  margin-top: 10px;
  width: 90%;
  border-radius: 30px;
}
</style>
