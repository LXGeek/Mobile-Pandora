<template>
  <div id="wrapper">
		<div class="menu">
				<img id="menu-bg" src="@/assets/img/golden-gate-lights.jpg" />
					<ul>
							<li><a href="">About</a></li>
							<li><a href="">Share</a></li>
							<li><a href="">Activity</a></li>
							<li><a href="">Settings</a></li>
							<li><a href="">Contact</a></li>
					</ul>
			</div>

			<div class="screen">
					<div class="navbar"></div>
					<div class="list">
							<div class="item">
									<div class="img"></div>
									<span></span>
									<span></span>
									<span></span>
							</div>

							<div class="item">
									<div class="img"></div>
									<span></span>
									<span></span>
									<span></span>
							</div>

							<div class="item">
									<div class="img"></div>
									<span></span>
									<span></span>
									<span></span>
							</div>

							<div class="item">
									<div class="img"></div>
									<span></span>
									<span></span>
									<span></span>
							</div>
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
export default {
  data () {
    return {

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

  },
}
</script>

<style lang="scss">
  @import "./nav.scss";
</style>
