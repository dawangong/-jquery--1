let Tooltip = (function (window) {
	function Tooltip(tooltipConfig) {
		this.tooltipConfig = tooltipConfig;
		this.init();
	}

	Tooltip.prototype.init = function () {
		this._tooltipConfig = {
			position: 'top',
			padding: '3px 10px',
			color: 'white',
			bgColor: 'red',
			fontSize: '14px',
			borderRadius: '3px',
		};
		this.setLayout();
		this.addEvent();
	};

	Tooltip.prototype.setLayout = function () {
		this.setStyle();
	};

	Tooltip.prototype.setStyle = function () {
		for (let i in this.tooltipConfig) {
			if (i === 'tooltips') {
				this.classList = this.tooltipConfig[i];
			}
			else {
				this._tooltipConfig[i] = this.tooltipConfig[i];
			}
		}
		this.classList.forEach((v,i) => {
			let temp = document.getElementsByClassName(v)[i];
			this.translate(temp,temp.parentNode);
			this.css(temp, {
				position: 'absolute',
				padding: this._tooltipConfig.padding,
				color: this._tooltipConfig.color,
				background: this._tooltipConfig.bgColor,
				left: this.left + 'px',
				top: this.top + 'px',
				fontSize: this._tooltipConfig.fontSize,
				borderRadius: this._tooltipConfig.borderRadius
			});
		});
	};

	Tooltip.prototype.addEvent = function () {

	};

	// Tooltip.prototype.getStyle = function (element, attr) {
	// 	//IE写法
	// 	if (element.currentStyle) {
	// 		return element.currentStyle[attr];
	// 		// 标准
	// 	} else {
	// 		return getComputedStyle(element, null) [attr];
	// 	}
	// };

	Tooltip.prototype.getValue =function (element1,element2,attr) {
		return Math.floor(Math.abs(element1[attr] - element2[attr])/2);
	};

	Tooltip.prototype.css = function (obj, option) {
		for (let i in option) {
			obj.style[i] = option[i];
		}
	};

	Tooltip.prototype.translate = function (temp,parentNode) {
		console.log(temp.offsetWidth);
		switch (this._tooltipConfig.position) {
			case 'top':
				this.left = 0;
				this.top = 0;
				break;
			case 'bottom':
				this.left = -13;
				this.top = 20;
				break;
			case 'left':
				this.left = -20;
				this.top = 0;
				break;
			case 'right':
				this.left = 20;
				this.top = 0;
				break;
		}
	};

	return Tooltip;
})(window);
