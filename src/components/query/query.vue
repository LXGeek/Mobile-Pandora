<template>
  <div class="query">
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
            <group>
              <datetime
                v-model="value1"
                @on-change="change"
                :title="$t('开始时间')"
                @on-cancel="log('cancel')"
                @on-confirm="onConfirm"
                @on-hide="log('hide', $event)"></datetime>
            </group>
            <group>
              <datetime
                v-model="value2"
                @on-change="change"
                :title="$t('截止时间')"
                @on-cancel="log('cancel')"
                @on-confirm="onConfirm"
                @on-hide="log('hide', $event)"></datetime>
            </group>
            <group label-margin-right="15em">
               <popup-picker title="奖励类型" :data="form.list" v-model="form.sort" value-text-align="left"></popup-picker>
            </group>
            <group>
              <x-input title="关键词：" type="text" placeholder="" v-model="keyWords"></x-input>
            </group>
            <group>
              <x-button type="primary" action-type="button" style="height: 50px;" @click.native="searchQuery">查询</x-button>
            </group>
          </div>
					<div class="burger">
							<div class="x"></div>
							<div class="y"></div>
							<div class="z"></div>
					</div>
        </div>
	 </div>
</template>
<i18n>

</i18n>

<script>
import DocNotice from '../doc-notice/doc-notice.vue'
import { Datetime, Group, XButton, PopupPicker, XInput } from 'vux'

export default {
  components: {
    'doc-notice': DocNotice,
    XButton,
    Datetime,
    Group,
    PopupPicker,
    XInput,
  },
  data () {
    return {
      isOn: true,
      value1: '2013-01-01',
      value2: '2018-04-15',
      form: {
        sort: ['科研项目'],
        list: [['科研项目', '科研获奖', '学术论文', '知识产权', '技术标准', '创作成果']],
      },
      keyWords: ''
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

    change (value) {
      console.log('change', value)
    },

    onConfirm (val) {
      console.log('on-confirm arg', val)
      console.log('current value', this.value1)
    },

    log (str1, str2 = '') {
      console.log(str1, str2)
    },

    searchQuery() {
      this.$router.push({ path: '/query-list', query: {start: this.value1, end: this.value2, sort: this.form.sort, key: this.keyWords}});
    }
  },
}
</script>

<style lang="scss">
  @import "../../assets/css/nav.scss";
  .query {
    .list {
      .vux-datetime {
        font-size: 30px;
        text-decoration: none;
      }
      .weui-cells {
        font-size: 30px;
        line-height: 80px;
      }
      .weui-cell__ft:after {
        width: 10px;
        height: 10px;
      }
      button.weui-btn, input.weui-btn {
        font-size: 30px;
      }
    }
  }
</style>
