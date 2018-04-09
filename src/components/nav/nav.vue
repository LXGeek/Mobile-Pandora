<template>
  <div id="wrapper">
		<div class="menu">
				<div id="menu-bg"></div>
					<ul>
							<li><a href="">首页</a></li>
							<li><a href="">项目详情</a></li>
							<li><a href="">奖励详情</a></li>
							<li><a href="">条件查询</a></li>
							<!-- <li><router-link :to="{ name: 'DocNotice'}">文档通知</router-link></li> -->
					</ul>
			</div>

			<div class="screen">
					<div class="navbar"></div>
					<div class="list">
            <!-- <doc-notice v-if="this.isOn"></doc-notice> -->
            <x-button :gradients="['#1D62F0', '#19D5FD']">iOS Gradients</x-button>
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
// import DocNotice from '../doc-notice/doc-notice.vue'
import { XButton } from 'vux'

export default {
  components: {
    // 'doc-notice': DocNotice,
    XButton,
  },
  data () {
    return {
      // isOn: true
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
    DocNotice() {

    }
  },
}
</script>

<style lang="scss">
  @import "./nav.scss";
</style>
