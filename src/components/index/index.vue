<template>
  <div class="index">
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
              
              <li>退出</li>
					</ul>
			</div>

			<div class="screen">
					<div class="navbar"></div>
					<div class="list">
            <group>
              <selector ref="defaultValueRef" title="项目类型" direction="rtl" :options="list1" v-model="defaultValue1"></selector>
            </group>
            <group>
              <selector ref="defaultValueRef" title="奖励类别" direction="rtl" :options="list2" v-model="defaultValue2"></selector>
            </group>
            <!-- <group>

            </group> -->
            <group>
               <datetime
                 v-model="value1"
                 :title="$t('时间')"
                 format="YYYY">
               </datetime>
             </group>
             <group>
               <x-button type="primary" action-type="button" style="height: 50px;" @click.native="searchQuery">点击查询</x-button>
             </group>

             <group>
               <tab :line-width=2 active-color='#214273' v-model="index">
                 <tab-item selected>项目一览</tab-item>
                 <tab-item>奖励一览</tab-item>
               </tab>
               <swiper height="100px" :show-dots="false" v-model="index">
                 <swiper-item>
                   <div class="tab-swiper vux-center">
                     <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
                       <thead>
                         <tr style="background-color: #F7F7F7">
                           <th>项目类型</th>
                           <th>提交数</th>
                           <th>审核通过数</th>
                           <th>奖励总数</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr v-for="(item, index) in this.projectList" :index="index">
                           <td>{{ item.projectType }}</td>
                           <td>{{ item.submitNum }}</td>
                           <td>{{ item.passedNum }}</td>
                           <td>{{ item.rewardNum }}</td>
                         </tr>
                       </tbody>
                      </x-table>
                   </div>
                 </swiper-item>
                 <swiper-item>
                   <div class="tab-swiper vux-center">
                     <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
                       <thead>
                         <tr style="background-color: #F7F7F7">
                           <th>项目类型</th>
                           <th>提交数</th>
                           <th>审核通过数</th>
                           <th>奖励总数</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr v-for="(item, index) in this.rewardList" :index="index">
                           <td>{{ item.rewardType }}</td>
                           <td>{{ item.submitNum }}</td>
                           <td>{{ item.passedNum }}</td>
                           <td>{{ item.rewardNum }}</td>
                         </tr>
                       </tbody>
                      </x-table>
                   </div>
                 </swiper-item>
               </swiper>
             </group>
           </div>
					<div class="burger">
							<div class="x"></div>
							<div class="y"></div>
							<div class="z"></div>
					</div>
        </div>
        <div v-transfer-dom>
          <loading :show="show" text="正在加载"></loading>
        </div>
	 </div>
</template>

<script>
const proUrl = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/projectList';
const awardsUrl = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/rewardList';

import DocNotice from '../doc-notice/doc-notice.vue'
import { XButton, Selector, Group, DatetimeView, Datetime} from 'vux'
import { Tab, TabItem, Sticky, Divider, Swiper, SwiperItem, XTable } from 'vux'
import { Loading, TransferDomDirective as TransferDom } from 'vux'



export default {
  directives: {
    TransferDom
  },
  components: {
    XButton,
    Selector,
    Group,
    DatetimeView,
    Datetime,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    XTable,
    Loading
  },
  data () {
    return {
      index: 0,
      isOn: true,
      value1: '2017',
      defaultValue1: 'resPro',
      list1: [{key: 'resPro', value: '科研项目'}, {key: 'resAwards', value: '科研获奖'}, {key: 'acaPapers', value: '学术论文'},
             {key: 'intelPro', value: '知识产权'}, {key: 'techStand', value: '技术标准'}, {key: 'creatAch', value: '创作成果'}],
      defaultValue2: 'gj',
      list2: [{key: 'gj', value: '国家级'}, {key: 'sb', value: '省部级'}, {key: 'tj', value: '厅局级'}, {key: 'yx', value: '院校级'}],
      format: 'YYYY',
      projectList: [],
      rewardList: [],
      show: false,
    }
  },
  created() {
    this.render();
    this.load();
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
    render() {
      this.show = true;
      this.axios.get(proUrl)
      .then(resp => {
        let respon = resp.data;

        if(respon.success){
          this.projectList = respon.data.projectList;
        }
        this.show = false;
      }).catch( error => {
        console.log(error.message);
        this.show = false;
      })
    },

    load() {
      this.axios.get(awardsUrl)
      .then(resp => {
        let respon = resp.data;

        if(respon.success){
          this.rewardList = respon.data.rewardList;
        }
      })
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
    }
  },
}
</script>

<style lang="scss">
  @import "../../assets/css/nav.scss";
  .index {
    .list {
      .weui-cells {
        line-height: 100px;
        font-size: 25px;
      }
      .vux-datetime {
        text-decoration: none;
        font-size: 25px;
      }
      button.weui-btn, input.weui-btn {
        font-size: 30px;
      }
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
            // line-height: 100px;
          }
        }
        .weui-cell__ft:after {
          width: 15px;
          height: 15px;
        }
      }
      .vux-table {
        margin-top: 30px;
        line-height: 100px;
      }
    }
  }
</style>
