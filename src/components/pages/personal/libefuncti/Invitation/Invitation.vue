<template>
  <div style="overflow:hidden">
    <van-nav-bar left-text="返回" title="选择模板" left-arrow @click-left="onClickLeft"/>
    <van-tabs v-model="active">
      <van-tab title="推荐">
        <van-row class="lnvi-row">
          <van-col span="12" class="lnvi-col" v-for="(item, index) in newtitleimg" :key="index">
            <div class="lnvi-div">
              <a :href="item.to">
                <img :src="item.url" alt>
              </a>
            </div>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="清新">
        <van-row class="lnvi-row">
          <van-col span="12" class="lnvi-col" v-for="(item, index) in newtitleimg1" :key="index">
            <div class="lnvi-div">
              <a :href="item.to">
                <img :src="item.url" alt>
              </a>
            </div>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="中国">
        <van-row class="lnvi-row">
          <van-col span="12" class="lnvi-col" v-for="(item, index) in newtitleimg2" :key="index">
            <div class="lnvi-div">
              <a :href="item.to">
                <img :src="item.url" alt>
              </a>
            </div>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="时尚">
        <van-row class="lnvi-row">
          <van-col span="12" class="lnvi-col" v-for="(item, index) in newtitleimg3" :key="index">
            <div class="lnvi-div">
              <a :href="item.to">
                <img :src="item.url" alt>
              </a>
            </div>
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "0",
      newtitleimg: [
        {
          url:
            "http://qnm.hunliji.com/o_1cs6isj4kcc61gqpvpm16fm1boq1t.jpg?imageView2/2/w/375",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=283&type=app&preview=true"
        },
        {
          url:
            "http://qnm.hunliji.com/o_1cqdq0ns41psi14fbocn1pa06kjn.jpg?imageView2/2/w/375",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=277&type=app&preview=true"
        },
        {
          url:
            "http://qnm.hunliji.com/o_1c5895m6pedd1j3nkse1n5heuqs.jpg?imageView2/2/w/375",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=250&type=app&preview=true"
        },
        {
          url:
            "http://qnm.hunliji.com/o_1cjnlu96s8feh8ab651a9ngqkn.jpg?imageView2/2/w/375",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=268&type=app&preview=true"
        }
      ],
      newtitleimg1: [
        {
          url: "http://qnm.hunliji.com/o_1cqdiinj517131e351npipmi1kol1c.jpg",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=276&type=app&preview=true"
        },
        {
          url: "http://qnm.hunliji.com/FrqZeRR-ksB21N_jirVBcGq4n-Dk",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=166&type=app&preview=true"
        },
        {
          url: "http://qnm.hunliji.com/o_1cs6cc12e1f8l1mo8m32536rr91l.jpg",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=282&type=app&preview=true"
        },
        {
          url: "http://qnm.hunliji.com/o_1cqg8lp3310v9j931skfpuispkn.jpg",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=268&type=app&preview=true"
        }
      ],
      newtitleimg2: [
        {
          url: "http://qnm.hunliji.com/o_1cqgd4gr41fdf1vqck1blkm1tmh1n.jpg",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=280&type=app&preview=true"
        },
        {
          url: "http://qnm.hunliji.com/o_1c3scemg41qng10181l3914la7q41c.jpg",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=244&type=app&preview=true"
        },
        {
          url: "http://qnm.hunliji.com/FohZ4kVG3ucMeFn0H8tIyuWtVN7W",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=148&type=app&preview=true"
        },
        {
          url: "http://qnm.hunliji.com/o_1c50cj8c01jjj1jkid3ud99bdl1j.jpg",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=248&type=app&preview=true"
        }
      ],
      newtitleimg3: [
        {
          url: "http://qnm.hunliji.com/o_1cqfbnei814nb9dv1ing1ute1vj9n.jpg",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=278&type=app&preview=true"
        },
        {
          url: "http://qnm.hunliji.com/o_1campc559inc1c931u8bd6i1cii3g.jpg",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=259&type=app&preview=true"
        },
        {
          url: "http://qnm.hunliji.com/o_1crltru4f14rdi1u1rp0103e81j1j.jpg",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=281&type=app&preview=true"
        },
        {
          url: "http://qnm.hunliji.com/o_1cnluugo11t9j1nvrqvpmld16lin.jpg",
          to:
            "https://www.hunliji.com/p/wedding/Public/wap/invitationCard/demo.html?card_id=274&type=app&preview=true"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
.lnvi-row {
  overflow: hidden;
  margin: 0 auto;
  padding: 4px;
}
.lnvi-col {
  overflow: hidden;
  height: 16rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}
.lnvi-div {
  box-shadow: 0 1px 1px rgba(60, 64, 47, 0.3);
}
</style>