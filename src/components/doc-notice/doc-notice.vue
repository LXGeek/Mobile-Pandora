<template>
  <div class="doc-notice">
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
            <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
              <thead>
                <tr style="background-color: #F7F7F7">
                  <th>标题</th>
                  <th>发布部门</th>
                  <th>发布时间</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in this.newsList" :index="index">
                  <td>{{ item.newsTitle }}</td>
                  <td>{{ item.pubDepart }}</td>
                  <td>{{ item.pubTime }}</td>
                </tr>
              </tbody>
            </x-table>
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
const newsListUrl = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/newsList';

import DocNotice from '../doc-notice/doc-notice.vue'
import { XTable, XButton } from 'vux'
import { Loading, TransferDomDirective as TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    'doc-notice': DocNotice,
    XButton,
    XTable,
    Loading,
  },
  data () {
    return {
      isOn: true,
      newsList: [],
      show: false,
    }
  },
  created() {
    this.render();
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
      this.axios.get(newsListUrl)
      .then(resp => {
        let respon = resp.data;

        if(respon.success){
          this.newsList = respon.data.newsList;
        }
        this.show = false;
      }).catch(error => {
        console.log(error.message);
        this.show = false;
      });
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
    }
  },
}
</script>

<style lang="scss">
  @import "../../assets/css/nav.scss";

 .doc-notice {
    .list {
      .vux-table {
        line-height: 90px;
      }
    }

  }
</style>
