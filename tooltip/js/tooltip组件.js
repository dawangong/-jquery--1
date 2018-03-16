class Tooltip {
	constructor(tooltipConfig) {
		this.tooltipConfig = tooltipConfig;
		this.init();
	}

	init() {
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
	}

	setLayout() {
		this.setStyle();
	}

	setStyle() {
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
				this.translate(_v, _v.parentNode);
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
	}

	addEvent() {

	}

	css(obj, option) {
		for (let i in option) {
			obj.style[i] = option[i];
		}
	}

	translate(node, parentNode) {
		switch (this._tooltipConfig.position) {
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
