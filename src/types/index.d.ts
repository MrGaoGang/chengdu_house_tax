export type HouseInfoType = Partial<{
  id: number;
  name: string;
  area: number;
  price: number;
  firstPay: number;
  env: number;
  priority: number | undefined | null;
  fiveOnly: null | undefined | number;
  wuye: number;
  xuewei: number;
  xueweiEnable: number;
  distance: number;
  caiguang: number;
  jiaotong: number;
  huxingOrChaoXiang: number;
  imgs: string;
  createdAt: string;
  updatedAt: string;
}>;
