<template>
  <div style="background:#f3f3f3;">
    <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <!--  -->
    <!--  -->
    <div class="bodydiv" style="height:12rem;;">
      <div class="bodydiv-title">上传头像</div>
      <!-- 上传头像 -->
      <div class="bodydiv-img">
        <div>
          <div style=" text-align:center; height:100%;height:4rem">
            <img :src="nameimg" height="100%">
          </div>
        </div>
        <div>
          <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" accpet>
            <van-icon name="plus" class="icon"/>
          </van-uploader>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="bodydiv">
      <div class="bodydiv-title">基本信息</div>
      <van-cell-group>
        <van-field v-model="name" clearable label="用户名" placeholder="请输入用户名"/>
      </van-cell-group>

      <van-radio-group v-model="sex">
        <div class="setdiv">
          <div class="setdiv-title">性别</div>
          <div class="setdiv-value">
            <van-radio name="男">男</van-radio>
          </div>
          <div class="setdiv-value">
            <van-radio name="女">女</van-radio>
          </div>
        </div>
      </van-radio-group>
      <!-- 出生日期 -->
      <div class="setdiv">
        <div class="setdiv-title">出生日期</div>
        <div class="setdiv-value" @click="exiet()">
          {{born}}
          <van-popup v-model="show" position="bottom" :overlay="true" class="book-popup">
            <van-datetime-picker
              type="date"
              :formatter="formatter"
              :min-date="new Date(1990, 1, 1)"
              @confirm="confirm"
            />
          </van-popup>
          <!--  -->
        </div>
      </div>
      <!-- 年龄 -->
      <div class="setdiv">
        <div class="setdiv-title">年龄</div>
        <div class="setdiv-value">
          <vSelect v-model="age" :options="agefunct()"></vSelect>
        </div>
      </div>
      <!-- 身高 -->
      <div class="setdiv">
        <div class="setdiv-title">身高</div>
        <div class="setdiv-value">
          <vSelect
            v-model="height"
            :options="['160-165cm','165-170cm','170-175cm','175-180cm','180-185cm','185-190cm']"
          ></vSelect>
        </div>
      </div>
      <!-- 体重 -->
      <div class="setdiv">
        <div class="setdiv-title">体重</div>
        <div class="setdiv-value">
          <vSelect
            v-model="weight"
            :options="['40-45kg','45-50kg','50-55kg','55-60kg','60-65kg','70-75kg','80-85kg','85kg以上']"
          ></vSelect>
        </div>
      </div>
      <!-- 星座 -->
      <div class="setdiv">
        <div class="setdiv-title">星座</div>
        <div class="setdiv-value">
          <vSelect
            v-model="conset"
            :options="['金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座']"
          ></vSelect>
        </div>
      </div>
      <!-- 属相 -->
      <div class="setdiv">
        <div class="setdiv-title">属相</div>
        <div class="setdiv-value">
          <vSelect v-model="singz" :options="['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪']"></vSelect>
        </div>
      </div>
      <!-- 血型 -->
      <div class="setdiv">
        <div class="setdiv-title">血型</div>
        <div class="setdiv-value">
          <vSelect v-model="blood" :options="['A型','B型','AB型','O型','其他型']"></vSelect>
        </div>
      </div>
      <!-- 民族 -->
      <div class="setdiv">
        <div class="setdiv-title">民族</div>
        <div class="setdiv-value">
          <vSelect v-model="natia" :options="['汉族','回族','满族','壮族','其他少数民族']"></vSelect>
        </div>
      </div>
      <!-- 工作单位 -->
      <div class="setdiv">
        <div class="setdiv-title">工作单位</div>
        <div class="setdiv-value">
          <vSelect v-model="employer" :options="['自由职业','无业','事业单位','公务员','私人企业']"></vSelect>
        </div>
      </div>
      <!-- 学历 -->
      <div class="setdiv">
        <div class="setdiv-title">学历</div>
        <div class="setdiv-value">
          <vSelect v-model="education" :options="['小学','初中','高中','大学','博士']"></vSelect>
        </div>
      </div>
      <!-- 籍贯所在地 -->
      <van-field v-model="location" clearable label="籍贯所在地" placeholder="籍贯所在地"/>

      <!-- 婚姻状况 -->
      <div class="setdiv">
        <div class="setdiv-title">婚姻状况</div>
        <div class="setdiv-value">
          <vSelect v-model="marrige" :options="['单身','离异']"></vSelect>
        </div>
      </div>
    </div>
    <!-- 联系方式div -->
    <div class="bodydiv">
      <div class="bodydiv-title">联系方式</div>
      <!-- 手机 -->
      <van-field v-model="phonenumber" required clearable label="手机" placeholder="手机"/>

      <!-- 微信 -->
      <van-field v-model="weixin" required clearable label="微信" placeholder="微信"/>
    </div>
    <!-- 资产状况 -->
    <div class="bodydiv">
      <div class="bodydiv-title">资产状况</div>
      <!-- 月薪 -->
      <div class="setdiv">
        <div class="setdiv-title">月薪</div>
        <div class="setdiv-value">
          <vSelect v-model="salary" :options="['3000以下','3千-6千','6千-1万','1-2万','2万以上']"></vSelect>
        </div>
      </div>
      <!-- 居住情况 -->
      <div class="setdiv">
        <div class="setdiv-title">住房情况</div>
        <div class="setdiv-value">
          <vSelect v-model="housing" :options="['有房','无房','自建']"></vSelect>
        </div>
      </div>
    </div>
    <!-- 自我介绍 -->
    <div class="bodydiv" style="margin-bottom:2rem;">
      <div class="bodydiv-title">自我介绍</div>
      <!-- 介绍 -->
      <van-field v-model="lntroduc" type="textarea" placeholder="介绍" style="height:100px;"/>
    </div>
    <div class="bodybuttom">
      <van-button size="large" @click="submit" type="primary">提交</van-button>
    </div>
    <!--  -->
  </div>
</template>

<script>
import vSelect from "vue-select";
import Calendar from "vue-mobile-calendar";
import axios from "axios";
import urlapi from "@/components/API/URLapi";
import { Toast } from "vant";
export default {
  data() {
    return {
      id: "",
      nameimg: "",
      name: "",
      sex: "",
      born: "",
      age: "",
      height: "",
      weight: "",
      conset: "",
      singz: "",
      blood: "",
      natia: "",
      employer: "",
      education: "",
      location: "",
      marrige: "",
      phonenumber: "",
      weixin: "",
      salary: "",
      housing: "",
      lntroduc: "",

      show: false //弹出
    };
  },
  mounted() {
    //获取用户资料
    if (this.$store.state.id != "") {
      axios({
        url: urlapi.sttingGet,
        method: "post",
        data: {
          user_id: this.$store.state.id
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.status == 1) {
            this.id = res.data.data.id;
            this.nameimg = res.data.data.nameimg;
            this.name = res.data.data.name;
            this.sex = res.data.data.sex;
            this.born = res.data.data.born;
            this.age = res.data.data.age;
            this.height = res.data.data.height;
            this.weight = res.data.data.weight;
            this.conset = res.data.data.conset;
            this.singz = res.data.data.singz;
            this.blood = res.data.data.blood;
            this.natia = res.data.data.natia;
            this.employer = res.data.data.employer;
            this.education = res.data.data.education;
            this.location = res.data.data.location;
            this.marrige = res.data.data.marrige;
            this.phonenumber = res.data.data.phonenumber;
            this.weixin = res.data.data.weixin;
            this.salary = res.data.data.salary;
            this.housing = res.data.data.housing;
            this.lntroduc = res.data.data.lntroduc;
            Toast.success("获取资料成功");
          } else {
            Toast.fail(res.data.message);
          }
        })
        .catch(err => {
          Toast.fail("获取资料失败" + err);
        });
    } else {
    }
  },
  methods: {
    confirm(val) {
      let d = new Date(val);
      let datetime =
        d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      this.born = datetime;
    },
    agefunct() {
      let arr = [];
      for (let index = 18; index < 50; index++) {
        arr.push(index);
      }
      return arr;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    exiet() {
      //推出方法
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    onClickLeft() {
      //回退
      this.$router.go(-1);
    },
    onRead(file) {
      //头像回调
      // console.log(file);
      this.nameimg = file.content;
    },
    submit() {
      // console.log(this.nameimg);
      //提交
      axios({
        url: urlapi.setting,
        method: "post",
        data: {
          user_id: this.$store.state.id,
          id: this.id,
          nameimg: this.nameimg,
          name: this.name,
          sex: this.sex,
          born: this.born,
          age: this.age,
          height: this.height,
          weight: this.weight,
          conset: this.conset,
          singz: this.singz,
          blood: this.blood,
          natia: this.natia,
          employer: this.employer,
          education: this.education,
          location: this.location,
          marrige: this.marrige,
          phonenumber: this.phonenumber,
          weixin: this.weixin,
          salary: this.salary,
          lntroduc: this.lntroduc
        }
      })
        .then(res => {
          if (res.status == 200) {
            Toast.success("提交成功");
            this.$router.push({ name: "personal" });
          }
        })
        .catch(err => {
          Toast.fail("获取资料失败" + err);
        });
    }
  },
  components: {
    vSelect,
    Calendar
  }
};
function dateFormat(date, fmt) {
  var o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate()
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
}
</script>

<style scoped>
.icon {
  border: 1px dashed #cac7c7;
  width: 4rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  font-size: 3rem;
  color: #cac7c7;
}
.bodydiv {
  width: 98%;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 1rem;
}
.bodydiv-title {
  text-align: center;
  padding: 0.5rem 0;
}
.bodydiv-img {
  padding: 0 1rem;
  display: flex;
  height: 10rem;
}
/**/
.setdiv {
  display: flex;
  /* display: -webkit-box; */
  color: #333;
  font-size: 14px;
  padding: 0.5rem 15px;
}
.setdiv-title {
  max-width: 90px;
  flex: 1;
  line-height: 1.5rem;
  text-align: left;
}
.setdiv-value {
  text-align: left;
  flex: 2;
  vertical-align: middle;
  line-height: 1.5rem;
}
</style>