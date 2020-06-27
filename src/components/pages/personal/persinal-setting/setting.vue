<template>
  <div style="background:#f3f3f3;">
    <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <!--  -->
    <!--  新建用户完善资料 -->
    <div class="bodydiv" style="height:14rem;">
      <div class="bodydiv-title">个人照片</div>
      <!-- 上传头像 -->
      <div class="bodydiv-img">
        <!-- <div>
          <div style=" text-align:center; height:100%;height:4rem">
            <img :src="newdata.nameimg" height="100%">
          </div>
        </div>
        <div>
          <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" accpet>
            <van-icon name="plus" class="icon"/>
          </van-uploader>
        </div>-->
        <div class="box">
          <input id="0" type="file" @change="onChange0">
          <label for="0"></label>
          <img :src="newdata.nameimg" v-if="newdata.nameimg">
          <i class="iconfont" v-else>选择图片</i>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="bodydiv">
      <div class="bodydiv-title">基本信息</div>

      <div class="setdiv">
        <div class="setdiv-title" required>用户名</div>
        <div class="setdiv-value">
          <input type="text" v-model="newdata.name" class="setdiv-value-input" placeholder="请输入用户名">
        </div>
      </div>

      <div class="setdiv">
        <div class="setdiv-title" required>验证口令</div>
        <div class="setdiv-value">
          <input
            type="password"
            v-model="newdata.password"
            class="setdiv-value-input"
            placeholder="验证口令"
          >
        </div>
      </div>

      <van-radio-group v-model="newdata.sex">
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
        <div class="setdiv-value setdiv-value-input" @click="exiet()">
          {{newdata.born}}
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
          <vSelect v-model="newdata.age" :options="agefunct()"></vSelect>
        </div>
      </div>
      <!-- 身高 -->
      <div class="setdiv">
        <div class="setdiv-title">身高</div>
        <div class="setdiv-value">
          <vSelect
            v-model="newdata.height"
            :options="['160-165cm','165-170cm','170-175cm','175-180cm','180-185cm','185-190cm']"
          ></vSelect>
        </div>
      </div>
      <!-- 体重 -->
      <div class="setdiv">
        <div class="setdiv-title">体重</div>
        <div class="setdiv-value">
          <vSelect
            v-model="newdata.weight"
            :options="['40-45kg','45-50kg','50-55kg','55-60kg','60-65kg','70-75kg','80-85kg','85kg以上']"
          ></vSelect>
        </div>
      </div>
      <!-- 星座 -->
      <div class="setdiv">
        <div class="setdiv-title">星座</div>
        <div class="setdiv-value">
          <vSelect
            v-model="newdata.conset"
            :options="['金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座']"
          ></vSelect>
        </div>
      </div>
      <!-- 属相 -->
      <div class="setdiv">
        <div class="setdiv-title">属相</div>
        <div class="setdiv-value">
          <vSelect
            v-model="newdata.singz"
            :options="['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪']"
          ></vSelect>
        </div>
      </div>
      <!-- 血型 -->
      <div class="setdiv">
        <div class="setdiv-title">血型</div>
        <div class="setdiv-value">
          <vSelect v-model="newdata.blood" :options="['A型','B型','AB型','O型','其他型']"></vSelect>
        </div>
      </div>
      <!-- 民族 -->
      <div class="setdiv">
        <div class="setdiv-title">民族</div>
        <div class="setdiv-value">
          <vSelect v-model="newdata.natia" :options="['汉族','回族','满族','壮族','其他少数民族']"></vSelect>
        </div>
      </div>
      <!-- 工作单位 -->
      <div class="setdiv">
        <div class="setdiv-title">工作单位</div>
        <div class="setdiv-value">
          <vSelect v-model="newdata.employer" :options="['自由职业','无业','事业单位','公务员','私人企业']"></vSelect>
        </div>
      </div>
      <!-- 学历 -->
      <div class="setdiv">
        <div class="setdiv-title">学历</div>
        <div class="setdiv-value">
          <vSelect v-model="newdata.education" :options="['小学','初中','高中','大学','博士']"></vSelect>
        </div>
      </div>
      <!-- 籍贯所在地 -->
      <div class="setdiv">
        <div class="setdiv-title">籍贯所在地</div>
        <div class="setdiv-value">
          <input
            type="text"
            placeholder="籍贯所在地"
            v-model="newdata.location"
            class="setdiv-value-input"
          >
        </div>
      </div>

      <!-- 婚姻状况 -->
      <div class="setdiv">
        <div class="setdiv-title">婚姻状况</div>
        <div class="setdiv-value">
          <vSelect v-model="newdata.marrige" :options="['单身','离异']"></vSelect>
        </div>
      </div>
    </div>
    <!-- 联系方式div -->
    <div class="bodydiv">
      <div class="bodydiv-title">联系方式</div>
      <!-- 手机 -->
      <!-- <van-field
        v-model="newdata.phonenumber"
        required
        clearable
        label="手机"
        placeholder="手机"
        onkeyup="this.value=this.value.replace(^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$,'')"
      />-->
      <div class="setdiv">
        <div class="setdiv-title">手机</div>
        <div class="setdiv-value">
          <input
            type="text"
            placeholder="手机"
            v-model="newdata.phonenumber"
            onkeyup="this.value=this.value.replace(/\D/g,'')"
            class="setdiv-value-input"
          >
        </div>
      </div>
      <!-- 微信 -->
      <div class="setdiv">
        <div class="setdiv-title">微信</div>
        <div class="setdiv-value">
          <input type="text" placeholder="微信" v-model="newdata.weixin" class="setdiv-value-input">
        </div>
      </div>
    </div>
    <!-- 资产状况 -->
    <div class="bodydiv">
      <div class="bodydiv-title">资产状况</div>
      <!-- 月薪 -->
      <div class="setdiv">
        <div class="setdiv-title">月薪</div>
        <div class="setdiv-value">
          <vSelect v-model="newdata.salary" :options="['3000以下','3千-6千','6千-1万','1-2万','2万以上']"></vSelect>
        </div>
      </div>
      <!-- 居住情况 -->
      <div class="setdiv">
        <div class="setdiv-title">住房情况</div>
        <div class="setdiv-value">
          <vSelect v-model="newdata.housing" :options="['有房','无房','自建']"></vSelect>
        </div>
      </div>
    </div>
    <!-- 自我介绍 -->
    <div class="bodydiv" style="margin-bottom:2rem;">
      <div class="bodydiv-title">自我介绍</div>
      <!-- 介绍 -->
      <van-field v-model="newdata.lntroduc" type="textarea" placeholder="介绍" style="height:100px;"/>
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
      newdata: {
        nameimg: "", //上传头像
        name: "", //用户名
        password: "", //密码
        sex: "", //性别
        born: "", //出生日期
        age: "", //年龄
        height: "", //身高
        weight: "", //体重
        conset: "", //星座
        singz: "", //属相
        blood: "", //血型
        natia: "", //民族
        employer: "", //工作单位
        education: "", //学历
        location: "", //籍贯所在地
        marrige: "", //婚姻状况
        phonenumber: "", //手机
        weixin: "", //微信
        salary: "", //月薪
        housing: "", //住房情况
        lntroduc: "" //自我介绍
      },

      show: false //弹出
    };
  },
  created() {
    //获取用户资料
    console.log(this.$store.state.id);
    if (this.$store.state.id != null) {
      axios({
        url: urlapi.sttingGet,
        method: "post",
        data: {
          user_id: this.$store.state.id
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.status == 1 && res.data.data != null) {
            this.newdata = res.data.data;
          } else {
            Toast.fail("获取资料失败");
            this.$router.push({ name: "personal" });
          }
        })
        .catch(err => {
          Toast.fail("获取资料失败" + err);
        });
    } else {
      Toast.fail("请验证口令");
      this.$router.push({ name: "personal" });
    }
  },

  methods: {
    onkey() {
      console.og(2);
    },
    onChange0(e) {
      //图片赋值
      console.log(e);
      const _self = this;
      var files = e.target.files[0];
      var size = Math.floor(files.size / 1024); //计算图片尺寸
      if (size > 1000) {
        //超过500k提示
        // this.$message.error("缩略图文件大小不得超过500k");
        return false;
      } else {
        if (!e || !window.FileReader) return; // 看支持不支持FileReader
        let reader = new FileReader();
        reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
        reader.onloadend = function() {
          //  这个时候_self.avatar中存的就是编码过后的图片了
          _self.newdata.nameimg = this.result;
        };
      }
    },
    confirm(val) {
      let d = new Date(val);
      let datetime =
        d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      this.newdata.born = datetime;
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
      this.newdata.nameimg = file.content;
    },
    submit() {
      //提交

      axios({
        url: urlapi.setting,
        method: "post",
        data: {
          user_id: this.$store.state.id,
          nameimg: this.newdata.nameimg,
          name: this.newdata.name,
          password: this.newdata.password,
          sex: this.newdata.sex,
          born: this.newdata.born,
          age: this.newdata.age,
          height: this.newdata.height,
          weight: this.newdata.weight,
          conset: this.newdata.conset,
          singz: this.newdata.singz,
          blood: this.newdata.blood,
          natia: this.newdata.natia,
          employer: this.newdata.employer,
          education: this.newdata.education,
          location: this.newdata.location,
          marrige: this.newdata.marrige,
          phonenumber: this.newdata.phonenumber,
          weixin: this.newdata.weixin,
          salary: this.newdata.salary,
          housing: this.newdata.housing,
          lntroduc: this.newdata.lntroduc
        }
      })
        .then(res => {
          if (res.data.status == 1) {
            Toast.success("提交成功");
            this.$router.push({ name: "personal" });
          } else {
            Toast.fail("提交失败" + err);
          }
        })
        .catch(err => {
          Toast.fail("网络错误" + err);
        });
    }
    // panduan() {
    //   for (const itm in this.newdata) {
    //     if (this.newdata[itm] == null || this.newdata[itm] == "") {
    //       console.log(itm + this.newdata[itm]);
    //       return false;
    //     }
    //     console.log(this.newdata[itm]);
    //   }

    //   return true;
    // }
  },
  components: {
    vSelect,
    Calendar
  }
};
</script>

<style scoped>
.box {
  position: relative;
  border: 1px dashed #d9d9d9;
  width: 200px;
  height: 200px;
  overflow: hidden;
  text-align: center;
  line-height: 200px;
  margin: 0 auto;
}
.box img {
  width: 100%;
}
.box input {
  position: absolute;
  left: -9999px;
}
/* 使label充满整个box*/
label {
  position: absolute;
  top: 35%;
  left: 35%;
  right: 0;
  bottom: 0;
  z-index: 10; /* 这个z-index之后说到*/
}
/*  */
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
}
.icon {
  border: 1px dashed #cac7c7;
  width: 4rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  font-size: 3rem;
  color: #cac7c7;
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

.setdiv-value-input {
  width: 100%;
  border: 1px solid rgba(60, 60, 60, 0.26);
  border-radius: 4px;
}
</style>