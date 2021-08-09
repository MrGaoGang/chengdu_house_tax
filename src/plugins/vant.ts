import Vue from 'vue';
import 'vant/lib/index.css';

import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';
import { Field } from 'vant';
import { Form } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Switch } from 'vant';
import { Stepper } from 'vant';
import { PullRefresh } from 'vant';
import { Grid, GridItem } from 'vant';
import { Image as VanImage } from 'vant';

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
