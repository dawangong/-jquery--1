define(function() {
	function Lbt() {
		var x = $('.picture li').length; //获取轮播图页数
		this.json0 = { //设置一个有默认值的对象存储一些参数
			n: x,
			width: 580,
			height: 300,
			pagination: true,
			pagposition: 'bottom',
			dotcolor: 'blue',
			direction: 'horizontal',
			prevAndNextButton: true,
			autoplay: true
		};
	}
	//轮播图初始化，具有最基本功能
	Lbt.prototype.init = function(json1) {
		var n = 1;
		this.kfc = $.extend(this.json0, json1); //使用jq下extend方法将对象复合在一起，更新参数数据
		if(!this.kfc.pagination) { //分页器显示相关
			$('.dot li').css({
				display: 'none'
			});
		}
		$('.dot li').eq(0).css({
			background: this.kfc.dotcolor
		});
		$('.picture').css({
			width: this.kfc.n * this.kfc.width, //分页器颜色及各种容器的宽高位置初始化设置
			height: this.kfc.n * this.kfc.height
		});
		$('.picture li').css({
			width: this.kfc.width,
			height: this.kfc.height
		});
		$('#container').css({
			width: this.kfc.width,
			height: this.kfc.height
		});
		if(this.kfc.direction == 'horizontal') { //设置轮播默认方向
			$('.picture').css({
				left: -this.kfc.width
			});
			$('.picture li').css({
				float: 'left'
			});
			$('.dot li').css({
				float: 'left',
				marginLeft: 6
			});
			var mn = this.kfc //存储一下之前的对象
			function autoplay1() { //自动轮播相关操作函数
				n++;
				if(n == mn.n) {
					n = 2;
					$('.picture').css({
						left: -mn.width
					});
				}
				$('.picture').stop().animate({
					left: -n * mn.width
				});
				if(n == mn.n - 1) {
					$('.dot li').eq(0).css({
						background: mn.dotcolor
					}).siblings('li').css({
						background: 'white'
					});
				} else {
					$('.dot li').eq(n - 1).css({
						background: mn.dotcolor
					}).siblings('li').css({
						background: 'white'
					});
				}
			}
			if(this.kfc.autoplay) { //由使用者决定是否开启自动轮播，默认开启
				var timer = setInterval(autoplay1, 1000);
				$('#container').hover(function() {
					clearInterval(timer);
				}, function() {
					timer = setInterval(autoplay1, 1000);
				})
			}
		} else { //如果竖直方向轮播的一些控件初始化
			$('.picture').css({
				top: -this.kfc.height
			});
			$('.dot li').css({
				marginTop: 6
			});
		}
		switch(this.kfc.pagposition) { //提供了四个可以选择的分页器位置
			case 'bottom':
				$('.dot').css({
					left: (this.kfc.width - $('.dot').width()) / 2,
					bottom: this.kfc.height / 30
				});
				break;
			case 'top':
				$('.dot').css({
					left: (this.kfc.width - $('.dot').width()) / 2,
					top: this.kfc.height / 30
				});
				break;
			case 'left':
				$('.dot').css({
					left: this.kfc.width / 40,
					top: (this.kfc.height - $('.dot').height()) / 2
				});
				break;
			case 'right':
				$('.dot').css({
					right: this.kfc.width / 40,
					top: (this.kfc.height - $('.dot').height()) / 2
				});
				break;
		}
		if(this.kfc.prevAndNextButton) { //决定是否需要前后按钮控件及它们的工作流程处理

			$('.btn').eq(0).css({ //初始化按钮的位置
				left: this.kfc.width / 40,
				top: (this.kfc.height - $('.btn').height()) / 2
			});
			$('.btn').eq(1).css({
				right: this.kfc.width / 40,
				top: (this.kfc.height - $('.btn').height()) / 2
			});
			$('#container').hover(function() {
				$('.btn').stop().animate({ //按钮的显隐相关
					opacity: 40
				});
			}, function() {
				$('.btn').stop().animate({
					opacity: 0
				});
			});

			$('.btn').eq(0).click(function() { //上一页按钮设置
				n--;
				if(n == -1) {
					$('.picture').css({
						left: -(mn.n - 2) * mn.width
					});
					n = mn.n - 3;
					$('.picture').stop().animate({
						left: -n * mn.width
					});
				} else {
					$('.picture').stop().animate({
						left: -n * mn.width
					});
				}
				$('.dot li').eq(n - 1).css({
					background: mn.dotcolor
				}).siblings('li').css({
					background: 'white'
				});
			});

			$('.btn').eq(1).click(function() { //下一页按钮设置
				n++;
				if(n == mn.n) {
					$('.picture').css({
						left:-mn.width
					});
					n =2;

				}
				$('.picture').stop().animate({
						left: -n * mn.width
					});

				$('.dot li').eq(n - 1).css({
					background: mn.dotcolor
				}).siblings('li').css({
					background: 'white'
				});
				if(n == mn.n - 1) {
					$('.dot li').eq(0).css({
						background: mn.dotcolor
					}).siblings('li').css({
						background: 'white'
					});
				}
			})
		}

		$('.dot li').mouseenter(function() { //分页器的控制设置
			n = $(this).index() + 1;
			var that = $(this); //保存下作用在分页器上的this
			tim = setTimeout(cm, 100); //这里用settimeout解决动画的一些问题
			function cm() {
				that.css({
					background: mn.dotcolor
				}).siblings('li').css({
					background: 'white'
				});
				$('.picture').stop().animate({
					left: -n * mn.width
				});
			}
		});

		$('.dot li').mouseleave(function() {
			clearTimeout(tim);
		})
	};

	return {
		Lbt: Lbt
	}
});
