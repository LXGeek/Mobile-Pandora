<template>
  <div class="setting">
		<div class="menu">
				<div id="menu-bg"></div>
        	<ul>
              <li>
                 <div id="head-img">
                   <img class="head-img" src="../../assets/img/boy.svg" alt="">
                 </div>
              </li>
              <li>Hi~ 小明</li>
              <li @click="jumpIndex">首页</li>
							<li @click="jumpProDetail">项目详情</li>
							<li @click="jumpResDetail">奖励详情</li>
							<li @click="jumpQuery">条件查询</li>
							<li @click="jumpDoc">文档通知</li>
              <li>
                <img @click="jumpSetting" class="head-set" src="../../assets/img/set.svg" alt="">
              </li>
              <li @click="quit()">退出</li>
					</ul>
			</div>

			<div class="screen">
					<div class="navbar"></div>
					<div class="list">

            <tab :line-width=2 active-color='#214273' v-model="index">
              <tab-item selected>更改密码</tab-item>
              <tab-item>基本信息</tab-item>
            </tab>
            <swiper height="100px" :show-dots="false" v-model="index">
              <swiper-item>
                <div class="tab-swiper vux-center">
                  <group label-width="4.5em" label-margin-right="2em" label-align="right">
                     <x-input title="原密码" type="password" placeholder="必填" v-model="form.oldPass"></x-input>
                     <x-input title="新密码" type="password" placeholder="必填" v-model="form.newPass" :min="6" :max="6" @on-change="change"></x-input>
                     <x-input title="重复密码" v-model="form.repeatPass" type="password" placeholder="必填" :equal-with="form.newPass"></x-input>
                  </group>
                   <x-button type="primary" action-type="button" style="height: 40px; margin-top: 15px;">提交</x-button>
                </div>
              </swiper-item>
              <swiper-item>
                <div class="tab-swiper vux-center">
                  <group label-width="5.5em" label-margin-right="2em">
                    <popup-picker title="性别" :data="form.list" v-model="form.sex" value-text-align="left"></popup-picker>
                    <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
                    <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
                    <x-input title="身份证" placeholder="请输入身份证" :is-type="isIdCard"></x-input>
                    <x-input title="建行卡号" placeholder="请输入建行卡号" :is-type="isBankCard"></x-input>
                    <x-button type="primary" action-type="button" style="height: 40px; margin-top: 15px;">提交</x-button>
                  </group>
                </div>
              </swiper-item>
            </swiper>
					</div>
					<div class="burger">
							<div class="x"></div>
							<div class="y"></div>
							<div class="z"></div>
					</div>
        </div>
	 </div>
</template>

<script>
import DocNotice from '../doc-notice/doc-notice.vue'
import { XButton } from 'vux'
import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch } from 'vux'
import { Tab, TabItem, Sticky, Divider, Swiper, SwiperItem } from 'vux'

export default {
  components: {
    'doc-notice': DocNotice,
    XButton,
    Group,
    XInput,
    Tab,
    TabItem,
    Sticky,
    Divider,
    Swiper,
    SwiperItem,
    PopupPicker,
  },
  data () {
    return {
      isOn: true,
      index: 0,
      password: '',
      password2: '',
      form: {
        oldPass: '',
        newPass: '',
        repeatPass: '',
        sex: ['男'],
        list: [['男', '女']],
      }
    }
  },
  created() {
    jQuery(document).ready(function(){
      if ('ontouchstart' in window) {
  		    var click = 'touchstart';
  		} else {
  		    var click = 'click';
  		}
  		$('div.burger').on(click, function () {
  		    if (!$(this).hasClass('open')) {
              $('div.burger').addClass('open');
      		    $('div.y').fadeOut(100);
      		    $('div.screen').addClass('animate');
      		    setTimeout(function () {
      		        $('div.x').addClass('rotate30');
      		        $('div.z').addClass('rotate150');
      		        $('.menu').addClass('animate');
      		        setTimeout(function () {
      		            $('div.x').addClass('rotate45');
      		            $('div.z').addClass('rotate135');
      		        }, 100);
      		    }, 10);
  		    } else {
            $('div.screen, .menu').removeClass('animate');
            $('div.y').fadeIn(150);
            $('div.burger').removeClass('open');
            $('div.x').removeClass('rotate45').addClass('rotate30');
            $('div.z').removeClass('rotate135').addClass('rotate150');
            setTimeout(function () {
                $('div.x').removeClass('rotate30');
                $('div.z').removeClass('rotate150');
            }, 50);
            setTimeout(function () {
                $('div.x, div.z').removeClass('collapse');
            }, 70);
  		    }
  		});
  		$('div.menu ul li a').on(click, function (e) {
  		    e.preventDefault();
          $('div.screen, .menu').removeClass('animate');
  		    $('div.y').fadeIn(150);
  		    $('div.burger').removeClass('open');
  		    $('div.x').removeClass('rotate45').addClass('rotate30');
  		    $('div.z').removeClass('rotate135').addClass('rotate150');
  		    setTimeout(function () {
  		        $('div.x').removeClass('rotate30');
  		        $('div.z').removeClass('rotate150');
  		    }, 50);
  		    setTimeout(function () {
  		        $('div.x, div.z').removeClass('collapse');
  		    }, 70);
  		});
    });
  },
  methods: {
    isIdCard(value) {
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

      if(reg.test(value) === false){
        return {
           valid: false,
           msg: '请输入合法的身份证号'
         }
      } else {
        return {
          valid: true,
        }
      }
    },
    isBankCard(value) {
      var regex = /^(998801|998802|622525|622526|435744|435745|483536|528020|526855|622156|622155|356869|531659|622157|627066|627067|627068|627069)\d{10}$/;

      if(regex.test(value) === false){
        return {
          valid: false,
          msg: '请输入正确的建行卡号'
        }
      }else {
        return {
          valid: true,
        }
      }
    },

    quit() {
      this.$router.push({ path: '/login' });
    },
    
    jumpIndex() {
      this.$router.push({ path: '/index' });
    },

    jumpProDetail() {
      this.$router.push({ path: '/pro-detail' });
    },

    jumpResDetail() {
      this.$router.push({ path: '/res-detail' });
    },

    jumpQuery() {
      this.$router.push({ path: '/query' });
    },

    jumpDoc() {
      this.$router.push({ path: '/doc-notice' });
    },

    jumpSetting() {
      this.$router.push({ path: '/setting' });
    },
    change (val) {
      console.log('on change', val)
    },
  },
}
</script>

<style lang="scss">
  @import "../../assets/css/nav.scss";
  .list {
    .vux-tab-warp {
      padding-top: 80px;
      .vux-tab-container {
        height: 100%;
        .vux-tab {
          height: 100%;
          .vux-tab-item {
            line-height: 80px;
          }
        }
      }
    }
    .vux-slider {
      height: 900px;
      .vux-swiper {
        height: 900px !important;
        .vux-swiper-item {
          height: 900px;
        }
        .weui-cells {
          line-height: 100px;
        }
      }
      .weui-cell__ft:after {
        width: 15px;
        height: 15px;
      }
    }
  }
  body {
    .vux-popup-header {
      height: 100px;
      font-size: 20px;
      line-height: 100px;
      .vux-popup-header-left {
        padding-left: 50px;
      }
      .vux-popup-header-right {
        padding-right: 50px;
      }
    }
  }
</style>
