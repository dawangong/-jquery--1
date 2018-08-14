class Tooltip {
	constructor(tooltipConfig) {
		this._tooltipConfig = tooltipConfig;
		this.init();
	}

	init() {
		this.classList = [];
		this.tooltipConfig = {
			position: 'top',
			padding: '3px 10px',
			color: 'white',
			bgColor: 'red',
			fontSize: '14px',
			borderRadius: '3px',
		};
		this.setLayout();
		this.addEvent();
	}

	setLayout() {
		this.setStyle();
	}

	setStyle() {
		for (let i in this._tooltipConfig) {
			if (i === 'tooltips') {
				this.classList = this.classList.concat(this._tooltipConfig[i]);
			}
			else {
				this.tooltipConfig[i] = this._tooltipConfig[i];
			}
		}
		this.classList.forEach(v => {
			let lists = [...document.getElementsByClassName(v)];
			lists.forEach(_v => {
				this.translate(_v, _v.parentNode);
				this.css(_v, {
					position: 'absolute',
					padding: this.tooltipConfig.padding,
					color: this.tooltipConfig.color,
					background: this.tooltipConfig.bgColor,
					left: this.left + 'px',
					top: this.top + 'px',
					fontSize: this.tooltipConfig.fontSize,
					borderRadius: this.tooltipConfig.borderRadius
					// width: '40px',
					// height: '20px'
				});
			});
		});
	}

	addEvent() {

	}

	css(obj, option) {
		for (let i in option) {
			obj.style[i] = option[i];
		}
	}

	translate(node, parentNode) {
		switch (this.tooltipConfig.position) {
			case 'top':
				this.left = 0;
				this.top = -node.offsetHeight - 10;
				break;
			case 'bottom':
				this.left = 0;
				this.top = node.offsetHeight + 10;
				break;
			case 'left':
				this.left = -parentNode.offsetWidth + 5;
				this.top = 0;
				break;
			case 'right':
				this.left = node.offsetWidth;
				this.top = 0;
				break;
		}
	}
}
