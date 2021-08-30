<template>
  <van-form class="item-house">
    <van-field
      v-model="houseInfo.name"
      label="房子名称"
      placeholder="名称+楼层"
      :disabled="disabled"
    >
    </van-field>

    <van-field
      v-model="houseInfo.area"
      type="number"
      label="房子面积(m2)"
      placeholder="点击输入"
      :disabled="disabled"
    ></van-field>
    <van-field
      v-model="houseInfo.price"
      type="number"
      label="房子总价(万)"
      placeholder="点击输入"
      :disabled="disabled"
    ></van-field>
    <van-field
      v-model="houseInfo.firstPay"
      type="number"
      label="房子首付(万)"
      :disabled="disabled"
      placeholder="点击输入"
    ></van-field>

    <van-field name="env" label="小区环境">
      <template #input>
        <van-rate v-model="houseInfo.env" :disabled="disabled" />
      </template>
    </van-field>
    <van-field name="wuye" label="物业">
      <template #input>
        <van-rate v-model="houseInfo.wuye" :disabled="disabled" />
      </template>
    </van-field>
    <van-field name="xuewei" label="有学位">
      <template #input>
        <!-- <van-switch v-model="houseInfo.vuewei" :disabled="disabled" /> -->
        <van-radio-group v-model="houseInfo.xuewei" :disabled="disabled">
          <van-radio :name="1">是</van-radio>
          <van-radio :name="0">否</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field name="xueweiEnable" label="学位是否可用">
      <template #input>
        <van-radio-group v-model="houseInfo.xueweiEnable" :disabled="disabled">
          <van-radio :name="1">是</van-radio>
          <van-radio :name="0">否</van-radio>
        </van-radio-group>
        <!-- <van-switch v-model="houseInfo.xueweiEnable" :disabled="disabled" /> -->
      </template>
    </van-field>
    <van-field name="distance" label="离商场距离">
      <template #input>
        <van-rate v-model="houseInfo.distance" :disabled="disabled" />
      </template>
    </van-field>
    <van-field name="caiguang" label="采光">
      <template #input>
        <van-rate v-model="houseInfo.caiguang" :disabled="disabled" />
      </template>
    </van-field>
    <van-field name="jiaotong" label="交通">
      <template #input>
        <van-rate v-model="houseInfo.jiaotong" :disabled="disabled" />
      </template>
    </van-field>
    <van-field name="huxingOrChaoXiang" label="户型/朝向">
      <template #input>
        <van-rate v-model="houseInfo.huxingOrChaoXiang" :disabled="disabled" />
      </template>
    </van-field>
    <slot />
  </van-form>
</template>

<script>
//   id: number;
//   name: string;
//   area: number;
//   price: number;
//   firstPay: number;
//   env: number;
//   wuye: number;
//   xuewei: number;
//   xueweiEnable: number;
//   distance: number;
//   caiguang: number;
//   jiaotong: number;
//   huxingOrChaoXiang: number;
//   imgs: string;
//   createdAt: string;
//   updatedAt: string;
export default {
  props: {
    houseInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
    disabled: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="less">
.item-house {
  .van-radio-group {
    display: flex;
    .van-radio:nth-child(2) {
      margin-left: 10px;
    }
  }
}
</style>
