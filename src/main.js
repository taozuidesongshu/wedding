// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./vuex/store.js";
import {
  Button,
  Row,
  Col,
  icon,
  Swipe,
  SwipeItem,
  Lazyload,
  List,
  NavBar,
  Tabbar,
  TabbarItem,
  RadioGroup, //
  Radio, //
  field,
  Uploader,
  DatetimePicker, //日期选择器
  Popup,
  Tag,
  Collapse,
  CollapseItem,
  Progress,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Tab, //切换选项卡
  Tabs, //切换选项卡
  Dialog //提示消息
} from "vant";

Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(icon)
  .use(Swipe)
  .use(SwipeItem)
  .use(List)
  .use(Lazyload)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(RadioGroup)
  .use(Radio)
  .use(field)
  .use(Uploader)
  .use(DatetimePicker)
  .use(Popup)
  .use(Tag)
  .use(Collapse)
  .use(CollapseItem)
  .use(Progress)
  .use(Cell)
  .use(CellGroup)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Tab)
  .use(Tabs)
  .use(Dialog);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
