//const BASEURL =
//"https://www.easy-mock.com/mock/5bdab4d0f1739457034b9487/example/";
//const BASEURL = "";
const BASEURL = "http://www.hunruyi.com";

const URL = {
  sttingGet: BASEURL + "/index.php/Home/Api/user_xq", //个人资料修改页面获取
  home: BASEURL + "/index.php/Home/Api/user_list", //首页
  register: BASEURL + "/index.php/Home/Api/user_add", //注册
  login: BASEURL + "/index.php/Home/Api/Login", //登陆
  setting: BASEURL + "/index.php/Home/Api/user", //修改完善用户资料接口
  wedding: BASEURL + "/index.php/Home/Tb/tblist", //列表页面
  weddingData: BASEURL + "/index.php/Home/Tb/tbcontent", //列表详情页
  search: BASEURL + "/index.php/Home/Api/search", //首页搜索
  banner: BASEURL + "/index.php/Home/Api/banner", //轮播
  buttondetails: BASEURL + "/index.php/Home/Api/buttondetails", //按钮
  inform: BASEURL + "/index.php/Admin/Main/inform", //站内消息获取
  checkin: BASEURL + "/index.php/Admin/Index/checkin", //结婚登记列表
  contact: BASEURL + "/index.php/Admin/Index/contactelist", //我是红娘
  gift: BASEURL + "/index.php/Home/Index/gift", //送礼登记
  giftlist: BASEURL + "/index.php/Home/Index/giftlist", //送礼登记列表
  category: BASEURL + "/index.php/Home/Index/category", //记账
  categorylist: BASEURL + "/index.php/Home/Index/categorylist", //记账列表
  giftlist: BASEURL + "/index.php/Home/Index/giftlist", //礼金列表
  task: BASEURL + "/index.php/Home/Index/task", //结婚任务
  tasklist: BASEURL + "/index.php/Home/Index/tasklist", //结婚任务列表
  taskstatus: BASEURL + "/index.php/Home/Index/taskstatus" //结婚任务状态修改
};

export default URL;
