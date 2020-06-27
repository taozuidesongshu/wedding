<template>
  <div>
    <!-- 个人信息设置 -->
    <van-nav-bar title="汉中相亲" left-text="返回" left-arrow @click-left="onClickLeft"/>

    <div style="padding:0 1rem;">
      <!--  -->
      <!-- 性别 -->
      <p>性别</p>
      <van-row gutter="20">
        <form>
          <van-col span="8">
            <label>
              <input name="sex" type="radio" v-model="sex" value>
              <span>不限</span>
            </label>
          </van-col>
          <van-col span="8">
            <label>
              <input name="sex" type="radio" v-model="sex" value="男">
              <span>男</span>
            </label>
          </van-col>
          <van-col span="8">
            <label>
              <input name="sex" type="radio" v-model="sex" value="女">
              <span>女</span>
            </label>
          </van-col>
        </form>
      </van-row>
      <p style="border-bottom:1px solid #c3c0c0;;"></p>
      <!-- 年龄 -->
      <p>年龄</p>
      <van-row gutter="20">
        <form>
          <div v-for="item in datas.ages" :key="item.id">
            <van-col span="8">
              <label>
                <input name="sex" type="radio" v-model="age" :value="item.value">
                <span>{{ item.name }}</span>
              </label>
            </van-col>
          </div>
        </form>
      </van-row>
      <p style="border-bottom:1px solid #c3c0c0;;"></p>
      <!--  -->
      <!-- 身高 -->
      <p>身高</p>
      <van-row gutter="20">
        <form>
          <div v-for="item in datas.items" :key="item.id">
            <van-col span="8">
              <label>
                <input name="sex" type="radio" v-model="height" :value="item.value">
                <span>{{item.name}}</span>
              </label>
            </van-col>
          </div>
        </form>
      </van-row>
      <p style="border-bottom:1px solid #c3c0c0;;"></p>
      <!--  -->
      <!-- 学历 -->
      <p>学历</p>
      <van-row gutter="20">
        <form>
          <div v-for="item in datas.educat" :key="item.id">
            <van-col span="8">
              <label>
                <input name="sex" type="radio" v-model="education" :value="item.value">
                <span>{{ item.name }}</span>
              </label>
            </van-col>
          </div>
        </form>
      </van-row>
      <p style="border-bottom:1px solid #c3c0c0;;"></p>
      <!--  -->
      <!-- 婚姻状况 -->
      <p>婚姻状况</p>
      <van-row gutter="20">
        <form>
          <van-col span="8">
            <label>
              <input name="sex" type="radio" v-model="marrige" value>
              <span>不限</span>
            </label>
          </van-col>
          <van-col span="8">
            <label>
              <input name="sex" type="radio" v-model="marrige" value="单身">
              <span>单身</span>
            </label>
          </van-col>
          <van-col span="8">
            <label>
              <input name="sex" type="radio" v-model="marrige" value="离异">
              <span>离异</span>
            </label>
          </van-col>
        </form>
      </van-row>

      <!--  -->
      <br>

      <!--  -->
      <van-button size="large" type="primary" @click="search">立即搜索</van-button>
      <!-- 婚姻状况 -->
    </div>
    <!--  -->
  </div>
</template>

<script>
import axios from "axios";
import urlapi from "@/components/API/URLapi";
import { Toast } from "vant";
export default {
  data() {
    return {
      datas: {
        items: [
          { name: "不限", value: "" },
          { name: "160-165cm", value: "160-165cm" },
          { name: "165-170cm", value: "165-170cm" },
          { name: "175-180cm", value: "175-180cm" },
          { name: "180-185cm", value: "180-185cm" },
          { name: "185-190cm", value: "185-190cm" }
        ],
        educat: [
          { name: "不限", value: "" },
          { name: "小学", value: "小学" },
          { name: "初中", value: "初中" },
          { name: "高中", value: "高中" },
          { name: "中专", value: "中专" },
          { name: "大学", value: "大学" },
          { name: "博士", value: "博士" }
        ],
        ages: [
          { name: "不限", value: "" },
          { name: "18-22", value: "18-22" },
          { name: "23-25", value: "23-25" },
          { name: "26-30", value: "26-30" },
          { name: "31-35", value: "31-35" },
          { name: "36-40", value: "36-40" },
          { name: "41-45", value: "41-45" },
          { name: "46-50", value: "46-50" },
          { name: "50岁以上", value: "50岁以上" }
        ]
      },
      sex: "", //性别
      height: "", //身高
      education: "", //学历
      age: "", //年龄
      marrige: "" //婚姻状况
    };
  },
  methods: {
    onClickLeft() {
      //返回
      this.$router.push({ name: "shoppingmall" });
    },
    search() {
      axios({
        url: urlapi.search,
        method: "post",
        data: {
          sex: this.sex,
          height: this.height,
          education: this.education,
          age: this.age,
          marrige: this.marrige
        }
      })
        .then(res => {
          // console.log(res.data.data);
          if (res.data.status == 0) {
            Toast.fail(res.data.message);
          } else {
            this.$router.push({
              name: "searchnew",
              params: { text: res.data.data }
            });
          }
        })
        .catch(err => {
          Toast.fail("搜索失败" + err);
        });
    }
  }
};
</script>

<style scoped>
.van-col {
  font-size: 0.8rem;
  padding: 15px;
}
label {
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
}
label input {
  display: none;
}
label span {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  height: 30px;
  margin: auto;
  text-align: center;
  padding: 0.2rem;
  line-height: 30px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  font-size: 0.6rem;
  overflow: hidden;
}

label input:checked + span {
  border-color: #f73d52;
  background: #f73d52;
  color: white;
  z-index: -1;
}
/* label input:checked + span:after {
  -webkit-transform: scale(1);
  transform: scale(1);
} */
</style>