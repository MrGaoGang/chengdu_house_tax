import Vue from "vue";
import "vant/lib/index.css";
import NavBarCustom from "../components/NavBar.vue";
import { Button } from "vant";
import { Cell, CellGroup } from "vant";
import { Icon } from "vant";
import { Field } from "vant";
import { Form } from "vant";
import { RadioGroup, Radio } from "vant";
import { Switch } from "vant";
import { Stepper } from "vant";
import { PullRefresh } from "vant";
import { Grid, GridItem } from "vant";
import { Image as VanImage } from "vant";
import { NavBar } from "vant";
import { Step, Steps } from "vant";
import { Swipe, SwipeItem } from "vant";
import { List } from "vant";
import { Empty } from "vant";
import { Rate } from "vant";
import { Tag } from "vant";
import { Toast } from "vant";
import { ActionSheet } from "vant";
import { ImagePreview } from "vant";
import { Uploader } from "vant";

Vue.use(Uploader);
// 全局注册
Vue.use(ImagePreview);
Vue.use(ActionSheet);
Vue.use(Toast);
Vue.use(Tag);
Vue.use(Rate);
Vue.use(Empty);
Vue.use(List);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Step);
Vue.use(Steps);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(PullRefresh);
Vue.use(Stepper);
Vue.use(Switch);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Form);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Field);
Vue.component(NavBarCustom.name, NavBarCustom);
