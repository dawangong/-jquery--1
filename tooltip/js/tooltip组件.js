let Tooltip = (function (window) {
	function Tooltip(tooltipConfig) {
		this.tooltipConfig = tooltipConfig;
		this.init();
	}

	Tooltip.prototype.init = function () {
		this.classList = [];
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
				this.classList = this.classList.concat(this.tooltipConfig[i]);
			}
			else {
				this._tooltipConfig[i] = this.tooltipConfig[i];
			}
		}
		this.classList.forEach(v => {
			let lists = [...document.getElementsByClassName(v)];
			lists.forEach(_v => {
				this.translate(_v,_v.parentNode);
				this.css(_v, {
					position: 'absolute',
					padding: this._tooltipConfig.padding,
					color: this._tooltipConfig.color,
					background: this._tooltipConfig.bgColor,
					left: this.left + 'px',
					top: this.top + 'px',
					fontSize: this._tooltipConfig.fontSize,
					borderRadius: this._tooltipConfig.borderRadius
					// width: '40px',
					// height: '20px'
				});
			});
		});
	};

	Tooltip.prototype.addEvent = function () {

	};

	// Tooltip.prototype.getStyle = function (element, attr) {
	// 		//IE写法
	// 	if (element.currentStyle) {
	// 		return element.currentStyle[attr];
	// 		// 标准
	// 	} else {
	// 		return getComputedStyle(element, null) [attr];
	// 	}
	// };

	// Tooltip.prototype.getValue =function (element1,element2,attr) {
	// 	return Math.floor(Math.abs(element1[attr] - element2[attr])/2);
	// };

	Tooltip.prototype.css = function (obj, option) {
		for (let i in option) {
			obj.style[i] = option[i];
		}
	};

	Tooltip.prototype.translate = function (temp,parentNode) {
		switch (this._tooltipConfig.position) {
			case 'top':
				this.left = 0;
				this.top = -temp.offsetHeight - 10;
				break;
			case 'bottom':
				this.left = 0;
				this.top = temp.offsetHeight + 10;
				break;
			case 'left':
				this.left = -parentNode.offsetWidth + 5;
				this.top = 0;
				break;
			case 'right':
				this.left = temp.offsetWidth;
				this.top = 0;
				break;
		}
	};

	return Tooltip;
})(window);
