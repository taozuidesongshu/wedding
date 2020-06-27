
<template>
  <!-- 结婚任务 -->
  <div>
    <van-nav-bar
      left-text="返回"
      right-text="记任务"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <div class="title">
      <div class="title-1">结婚任务</div>
      <div class="title-2">已完成{{this.result.length}}/{{this.list.length + this.result.length}}</div>
      <div class="title-3">
        <van-progress pivot-text color="#f2826a" :percentage="jisuan()" style="height:0.6rem;"/>
      </div>
      <div class="title-2">婚礼在即，继续加油哦！</div>
    </div>
    <!--  -->
    <div class="task-body">
      <div class="task-body-title">近期任务</div>
      <div class="task-body-riou">
        <van-checkbox-group>
          <van-cell-group label-position="right">
            <van-cell
              v-for="(item, index) in list"
              :key="index"
              @click="toclin(item)"
              :title="`${item.mission}`"
            >
              <van-checkbox :name="item.id" ref="checkboxes"/>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div class="task-body">
      <div class="task-body-title">已完成任务</div>
      <div class="task-body-riou">
        <van-cell-group label-position="right">
          <van-cell
            v-for="(item, index) in result"
            :key="index"
            @click="onClickAlert(item)"
            :title="`${item.mission}`"
            class="van-cell-color"
          ></van-cell>
        </van-cell-group>
      </div>
    </div>
    <!--  -->
    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :overlay="true" class="popup">
      <van-nav-bar left-text="关闭" left-arrow @click-left="exiet"/>
      <!-- 内容 -->
      <van-cell-group>
        <van-field v-model="group.mission" placeholder="你准备做什么"/>

        <van-field v-model="group.expire" placeholder="到期时间"/>
      </van-cell-group>
      <!--  -->
      <div class="popup-bottom">
        <div>
          <van-button size="large" @click="exiet()">取消</van-button>
        </div>
        <div>
          <van-button size="large" type="danger" @click="taskpopup()">保存</van-button>
        </div>
      </div>
    </van-popup>
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
      radio: "",
      list: [],
      result: [],
      show: false,
      group: {
        mission: "",
        expire: ""
      }
    };
  },
  created() {
    if (this.$store.state.id != null) {
      this.tasklists(); //任务列表
    } else {
      Toast.fail("请验证");
      this.$router.push({ name: "personal" });
    }
  },
  // watch: {
  //   result: function(newQuestion, oldQuestion) {
  //     //监听变动
  //     console.log(newQuestion);
  //     console.log(oldQuestion);
  //     axios({
  //       url: urlapi.taskstatus,
  //       method: "post",
  //       data: {
  //         user_id: this.$store.state.user_id,
  //         mission: this.newQuestion,
  //         status: 0
  //       }
  //     })
  //       .then(res => {
  //         console.log(res);
  //       })
  //       .catch(err => {
  //         this.jisuan();
  //         Toast.fail("网络错误失败");
  //       });
  //   }
  // },
  methods: {
    toclin(item) {
      //完成选择
      // console.log(item);
      axios({
        url: urlapi.taskstatus,
        method: "post",
        data: {
          user_id: this.$store.state.id,
          id: item.id,
          status: "done"
        }
      })
        .then(res => {
          // console.log(res);
          this.tasklists();
        })
        .catch(err => {
          this.jisuan();
          Toast.fail("网络错误失败");
        });
    },
    onClickAlert(item) {
      //弹出消息
      this.$dialog.alert({
        message: `${item.expire}`
      });
    },
    onClickLeft() {
      //回退
      this.$router.go(-1);
    },
    onClickRight() {
      //弹出层按钮
      this.show = true;
      Toast.fail("获取资料失败");
      // console.log(this);
    },
    taskpopup() {
      //新任务提交
      axios({
        url: urlapi.task,
        method: "post",
        data: {
          user_id: this.$store.state.id,
          mission: this.group.mission,
          expire: this.group.expire,
          status: "undone"
        }
      })
        .then(res => {
          // console.log(res);
          this.exiet();
          this.tasklists();
        })
        .catch(err => {
          Toast.fail("网络错误失败");
        });
    },
    tasklists() {
      //任务列表
      axios({
        url: urlapi.tasklist,
        method: "post",
        data: {
          user_id: this.$store.state.id
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.status == 1) {
            let okcheng = [];
            let nocheng = [];
            for (const iterator of res.data.data) {
              // console.log(iterator);
              if (iterator.status == "undone") {
                nocheng.push(iterator);
              } else {
                okcheng.push(iterator);
              }
            }
            this.list = nocheng;
            this.result = okcheng;
          } else {
            Toast.fail("暂无任务");
          }
        })
        .catch(err => {
          Toast.fail("网络错误失败");
        });
    },

    // toggle(index) {
    //   this.$refs.checkboxes[index].toggle();
    // },
    exiet() {
      //推出方法

      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    jisuan() {
      let zon = this.list.length + this.result.length;
      let size = parseInt((this.result.length / zon) * 100);
      return size;
    }
  }
};
</script>

<style scoped>
.title {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  padding: 1rem;
  background: #fe5723;
  color: white;
}
.title-3 {
  margin: 1rem 0;
}
/* 选择 */
.task-body-title {
  padding: 10px 15px;
  font-weight: normal;
}
/* 已完成任务 */
.van-cell-color {
  color: #ababab;
  text-decoration: line-through;
}

/* 弹出层 */
.popup {
  height: 100%;
}
.popup-bottom {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
}
.popup-bottom div {
  flex: 1;
}
</style>