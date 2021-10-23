export type CostItem = {
  name: string;
  num: number | string;
  tips?: string;
}[];

export function utc2beijing(utc_datetime: string) {
  // 转为正常的时间格式 年-月-日 时:分:秒
  const T_pos = utc_datetime.indexOf("T");
  const Z_pos = utc_datetime.indexOf("Z");
  const year_month_day = utc_datetime.substr(0, T_pos);
  const hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1);
  const new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06

  // 处理成为时间戳
  const d = new Date(Date.parse(new_datetime));
  let timestamp = d.getTime();
  timestamp = timestamp / 1000;

  // 增加8个小时，北京时间比utc时间多八个时区
  timestamp = timestamp + 8 * 60 * 60;

  // 时间戳转为时间
  const beijing_datetime = new Date(timestamp * 1000)
    .toLocaleString()
    .replace(/年|月/g, "-")
    .replace(/日/g, " ");
  return beijing_datetime; // 2017-03-31 16:02:06
}

/**
 * 首付
 * @param totalPrice
 * @param percent
 * @returns
 */
export function fisrtPayCost(
  totalPrice: number,
  percent: number,
  dingJin: number
): CostItem {
  return [
    {
      name: "定金",
      num: Number(dingJin + "").toFixed(0),
    },
    {
      name: "剩余首付金额",
      num:
        Number((totalPrice * percent * 10000).toFixed(0)) -
        Number(dingJin + ""),
    },
  ];
}

/**
 * 中介费
 * @param totalPrice
 * @param percent
 * @returns
 */
export function middleCost(
  totalPrice: number,
  percent: number,
  houseMedBankCost: number
): CostItem {
  return [
    {
      name: "中介费",
      num: Number((totalPrice * 10000 * percent).toFixed(0)),
    },
    {
      name: "中介按揭服务费",
      num: houseMedBankCost,
      tips: "按揭服务费没有固定标准，因为银行办理贷款并不需要收取服务费！且办理贷款的每个环节都需买家的参与，中介一路陪跑，但是中介会告诉你这笔莫名其妙的费用，是他们的按揭员为整个买卖交易流程服务的所得，你怎么可以不交纳？这里仍然以深圳为例，按揭服务费的收费区间在1000-5000元不等",
    },
  ];
}

/**
 * 银行评估的差值
 * @param totalPrice
 * @param percent
 * @returns
 */
export function bankPreCost(
  totalPrice: number,
  bankPrice: number,
  percent: number
): CostItem {
  return [
    {
      name: "首付差价",
      num: Number((totalPrice - bankPrice) * (1 - percent) * 10000).toFixed(2),
      tips: "房屋评估是银行批贷的必要动作，因为银行是不以成交价格为参考发放贷款的，通常银行会指定评估公司来进行房屋估价，然后根据估价给出贷款额度，也就是说当你的成交价是300万，房屋评估价是280万，你要贷款70%，也就是280万×70%=196万，那么你就要准备300万-196万=104万的首付，之前已经支付了300*0.3=90万的首付款，也就是需要补差价104-90=14万的首付款差价，而最终的评估费，根据评估价的万分之一到万分之五进行收取",
    },
  ];
}

export function taxCost(
  houseNum: number,
  houseArea: number,
  housePrice: number,
  houseFiveYear: string, // 满五年
  houseSellOnly: string //唯一住宅
): CostItem {
  let qiTax = 0;

  if (houseNum === 1) {
    qiTax =
      houseArea <= 90 ? housePrice * 10000 * 0.01 : housePrice * 10000 * 0.015;
  } else {
    qiTax =
      houseArea <= 90 ? housePrice * 10000 * 0.01 : housePrice * 10000 * 0.02;
  }

  const personTax =
    houseFiveYear === "true" && houseSellOnly === "true"
      ? 0
      : 0.01 * housePrice * 10000;

  const zengZhiTax = houseFiveYear === "true" ? 0 : 0.053 * housePrice * 10000;

  return [
    {
      name: "契税",
      num: qiTax,
      tips: `1、购买的房产超过144平米的（包括别墅，非住宅等）需要缴纳的契税是：房款的3%；</br>
        2、购买的房产不超过144平米的需要缴纳的契税是：房款的1.5%；</br>
        3、在首套房的情况下，购买的房产不超过90平米的需要缴纳的契税是：房款的1%。
        `,
    },
    {
      name: "个人所得税",
      num: personTax,
      tips: `这笔费用是需要根据卖方情况来决定的，当卖方出售的房屋满足满五唯一，即可免征个人所得税，若不满足，则需要缴纳成交价的1%个人所得税。`,
    },
    {
      name: "增值税",
      num: zengZhiTax,
      tips: `满五唯一，增值税为0，否则为房子的总价5.3%`,
    },
    {
      name: "转移登记费",
      num: 80,
    },
    {
      name: "印花税",
      num: (housePrice * 10000 * 0.05) / 100,
      tips: "印花税，购房总价的0.05%",
    },
  ];
}
