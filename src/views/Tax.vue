<template>
  <div>
    <van-nav-bar
      title="首付计算"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-steps :active="steps" active-icon="success" active-color="#38f">
      <van-step>填写基本信息</van-step>
      <van-step>确定中介费用</van-step>
      <van-step>其他费用</van-step>
      <van-step>查看结果</van-step>
    </van-steps>
    <!-- 基本信息 -->
    <van-form v-if="steps === 0">
      <van-field name="houseNum" label="购房性质">
        <template #input>
          <van-radio-group v-model="houseNum" direction="horizontal">
            <van-radio name="1">首套房</van-radio>
            <van-radio name="2">第二套</van-radio>
            <!-- <van-radio name="3">第三套</van-radio> -->
          </van-radio-group>
        </template>
      </van-field>

      <van-field
        v-model="houseArea"
        name="houseArea"
        type="number"
        label="房屋面积(m2)"
        placeholder="单位m2"
        input-align="right"
        required
      />

      <van-field
        v-model="housePrice"
        name="housePrice"
        type="number"
        label="房屋总价(万)"
        placeholder="单位/万"
        input-align="right"
        required
      />

      <van-field
        v-model="houseBankPrice"
        name="houseBankPrice"
        type="number"
        label="银行评估总价(万)"
        placeholder="单位/万"
        input-align="right"
      />

      <van-field
        v-model="housePrePay"
        name="housePrePay"
        type="number"
        label="首付比例(%)"
        placeholder="单位%"
        input-align="right"
      />

      <van-field name="houseFiveYear" label="满五年">
        <template #input>
          <van-radio-group v-model="houseFiveYear" direction="horizontal">
            <van-radio name="true">YES</van-radio>
            <van-radio name="false">NO</van-radio>
            <!-- <van-radio name="3">第三套</van-radio> -->
          </van-radio-group>
        </template>
      </van-field>

      <van-field name="houseSellOnly" label="是否卖家唯一住宅">
        <template #input>
          <van-radio-group v-model="houseSellOnly" direction="horizontal">
            <van-radio name="true">YES</van-radio>
            <van-radio name="false">NO</van-radio>
            <!-- <van-radio name="3">第三套</van-radio> -->
          </van-radio-group>
        </template>
      </van-field>
    </van-form>

    <!-- 中介相关费用 -->

    <van-form v-if="steps === 1">
      <van-field
        v-model="houseMedCost"
        name="houseMedCost"
        type="number"
        label="中介费(%)"
        placeholder="单位%"
        input-align="right"
      />
      <van-field
        v-model="houseMedBankCost"
        name="houseMedBankCost"
        type="number"
        label="中介按揭服务费(元)"
        placeholder="单位/元"
        input-align="right"
        left-icon="warning-o"
        @click-left-icon="showShuLouTips('houseMedBankCost')"
      />
    </van-form>
    <!-- 其他费用 -->
    <van-form v-if="steps === 2">
      <van-field
        v-model="houseShuLou"
        name="houseShuLou"
        type="number"
        label="赎楼费(%)"
        placeholder="单位%"
        left-icon="warning-o"
        @click-left-icon="showShuLouTips('houseShuLou')"
        input-align="right"
      />

      <van-field
        :value="houseWeiXiu"
        name="houseWeiXiu"
        type="number"
        label="维修基金(元)/自动计算"
        placeholder="单位/元"
        left-icon="warning-o"
        readonly
        @click-left-icon="showShuLouTips('houseWeiXiu')"
        input-align="right"
      />
      <van-field
        v-model="houseOther"
        name="houseOther"
        type="number"
        label="其他费用(元)"
        placeholder="单位/元"
        left-icon="warning-o"
        @click-left-icon="showShuLouTips('houseOther')"
        input-align="right"
      />
    </van-form>
    <!-- 展示结果 -->
    <div v-if="steps === 3">
      <div class="tax-result">
        <div class="top-panel">
          二手房总首付
          <div class="total-money">
            {{ numberConversion(results.total) }}万元
          </div>
        </div>
        <div class="total-detail-title">明细如下:</div>
        <div class="item-cost" v-for="each in results.details" :key="each.name">
          <div class="item-cost-label">
            {{ each.name + "【" + getItemTotals(each.items) + "】" }}
          </div>
          <van-field
            v-for="item in each.items"
            :value="toThree(item.num) + '元'"
            :key="item.name"
            readonly
            :left-icon="item.tips ? 'warning-o' : ''"
            @click-left-icon="showTips(item.tips)"
            input-align="right"
            :label="item.name"
          />
        </div>
      </div>
    </div>

    <!-- 按钮区域 -->
    <div style="margin: 16px">
      <van-button block v-if="steps !== 0" @click="goLastStep"
        >上一步</van-button
      >

      <van-button class="next-btn" v-if="steps !== 3" block type="info" @click="goNextStep"
        >下一步</van-button
      >
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { taxCost, bankPreCost, middleCost, fisrtPayCost } from "../utils/index";
import { getItem, setItem } from "../utils/url";
const tips = {
  houseShuLou:
    "赎楼费一般出现在所购买的房屋同为贷款买房的情况，购房时卖方仍处在还贷状态。想要购买房屋，就需要先还清房屋贷款,赎楼分为担保赎楼和现金赎楼两种，担保赎楼是比较常用的赎楼方式，一般由担保公司提供担保或垫资赎楼，原则上，想要顺利卖房，赎楼费应由卖家支付，由于深圳是一个卖方市场，因此赎楼费用都是由买家支付，但在深圳以外的城市，赎楼费大抵是一笔可以节省下来的开支，将由卖家支付。在中介向银行提交提前偿还贷款请求后，买家就需要支付2笔款项，1.2%的赎楼担保费和大约1%的短贷利息",
  houseWeiXiu:
    "购房者如果购买的二手房，原房主已经缴纳齐了维修基金的话，那在在办理房屋过户手续的时候只要办理房屋维修基金转移手续就可以了，专用房屋维修基金实行“钱随房走”的原则,公共维修基金此项基金不同于物业管理费，只用于住宅共用部位、共用设施设备保修期满后的大修、更新、改造。全国税率为房屋成交价的2－3％，如果是电梯公寓则是按4％缴纳。<strong>成都主城区电梯房为27．5元／㎡，不带电梯22元／㎡</strong>",
  houseOther:
    "购买二手房所要涉及的全部重头费用，除此之外，<strong>二手房买卖中还有一些小额的费用产出，如房本费、贴花、产权登记费等</strong>，费用几元到几十元不等",
  houseMedBankCost:
    "按揭服务费没有固定标准，因为银行办理贷款并不需要收取服务费！且办理贷款的每个环节都需买家的参与，中介一路陪跑，但是中介会告诉你这笔莫名其妙的费用，是他们的按揭员为整个买卖交易流程服务的所得，你怎么可以不交纳？这里仍然以深圳为例，按揭服务费的收费区间在1000-5000元不等",
};

export default {
  data() {
    return {
      steps: 0,
      houseNum: "1",
      houseArea: getItem("houseArea") || "",
      housePrice: getItem("housePrice") || "",
      houseBankPrice: getItem("houseBankPrice") || "",
      houseFiveYear: getItem("houseFiveYear") || "false",
      houseSellOnly: getItem("houseSellOnly") || "false",
      housePrePay: getItem("housePrePay") || 30,

      // 中介相关
      houseMedCost: getItem("houseMedCost") || 1.6, // 中介费用
      houseMedBankCost: getItem("houseMedBankCost") || 2000, // 中介去银行跑腿的费用
      // 其他费用
      houseShuLou: getItem("houseShuLou") || 0, // 赎楼费
      houseOther: getItem("houseOther") || 500, // 其他额外费用
    };
  },
  computed: {
    houseWeiXiu: function () {
      return (this.houseArea || 0) * 27.5;
    },

    results() {
      const all = [
        {
          name: "首付房款费用",
          items: fisrtPayCost(
            Number(this.housePrice || "0"),
            this.housePrePay / 100
          ),
        },
        {
          name: "中介费用",
          items: middleCost(
            Number(this.housePrice || "0"),
            this.houseMedCost / 100,
            this.houseMedBankCost
          ),
        },
        {
          name: "银行预评估费用",
          items: bankPreCost(
            Number(this.housePrice || "0"),
            Number(this.houseBankPrice || "0")
          ),
        },
        {
          name: "税费",
          items: taxCost(
            Number(this.houseNum || "0"),
            Number(this.houseArea || "0"),
            Number(this.housePrice || "0"),
            this.houseFiveYear,
            this.houseSellOnly
          ),
        },
      ];
      let total = 0;
      all.forEach((ele) => {
        ele.items.forEach((e) => {
          total = total + Number(e.num);
        });
      });
      return {
        total: total,
        details: all,
      };
    },
  },
  methods: {
    onClickLeft() {
      this.$router.replace("/");
    },
    goLastStep() {
      if (this.steps === 0) {
        return;
      }
      this.steps = this.steps - 1;
    },
    goNextStep() {
      if (this.steps === 3) {
        return;
      }

      this.steps = this.steps + 1;
      switch (this.steps) {
        case 1:
          setItem("houseArea", this.houseArea);
          setItem("housePrice", this.housePrice);
          setItem("houseBankPrice", this.houseBankPrice);
          setItem("houseFiveYear", this.houseFiveYear);
          setItem("houseSellOnly", this.houseSellOnly);
          setItem("housePrePay", this.housePrePay);
          break;
        case 2:
          setItem("houseMedCost", this.houseMedCost);
          setItem("houseMedBankCost", this.houseMedBankCost);
          break;
        case 3:
          setItem("houseShuLou", this.houseShuLou);
          setItem("houseOther", this.houseOther);
          break;
      }
    },
    showShuLouTips(key) {
      Dialog({
        message: tips[key],
      });
    },
    showTips(tip) {
      Dialog({
        message: tip,
      });
    },
    toThree(value) {
      const val = String(value);
      return val.replace(/(\d{1,3})(?=(\d{3})+)/g, function (el) {
        return el + ",";
      });
    },

    numberConversion(value) {
      return (value / 10000).toFixed(3);
    },
    getItemTotals(items = []) {
      return (
        this.toThree(
          items.reduce((pre, now) => {
            return pre + Number(now.num);
          }, 0)
        ) + "元"
      );
    },
  },
};
</script>

<style lang="less">
.van-field__label {
  width: 150px;
}
.van-field__control--custom {
  flex-direction: row-reverse;
}

.next-btn {
  margin-top: 20px;
}

.tax-result {
  color: #515a6e;
  text-align: left;
  .total-detail-title {
    padding-top: 10px;
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    // margin-bottom: 10px;
  }
  .item-cost-label {
    padding: 12px 10px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    text-align: left;
    line-height: 16px;
  }
  .top-panel {
    margin-top: 30px;
    width: calc(100% - 40px);
    background-color: white;
    margin-left: 10px;
    border-radius: 10px;
    padding: 20px 10px;
    text-align: left;
    .is-senond {
      color: white;
      background-color: #5cadff;
      padding: 5px;
      font-size: 12px;
      border-radius: 5px;
    }
    .total-money {
      font-size: 24px;
      color: #2b85e4;
      font-weight: bold;
      margin-top: 10px;
    }
  }
}
</style>