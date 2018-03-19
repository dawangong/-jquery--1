class Modal {
	constructor(config) {
		this._config = config;
		this.config = {
			contain: 'modal-contain',
			width: '400',
			height: '200'
		};
		this.init();
	}

	init() {
		this.updateConfig();
		this.getElement();
		this.setElement();
	}

	updateConfig() {
		for (let i = 0; i < this._config; i++) {
			this.config[i] = this._config[i];
		}
	}

	getElement() {
		this.contain = this.$('.' + this.config.contain);
		this.body = this.$('body');
	}

	setElement() {
		this.css(this.contain, {
			width: this.config.width + 'px',
			height: this.config.height + 'px',
			position: 'absolute',
			left: '50%',
			marginLeft: -this.config.width / 2 + 'px',
			top: '50%',
			marginTop: -this.config.height / 2 + 'px',
			zIndex: 100,
			background: 'white'
		});
		this.css(this.body, {background: '#7f7f7f'});
	}

	$(obj) {
		return document.querySelector(obj);
	}

	css(obj, option) {
		for (let i in option) {
			obj.style[i] = option[i];
		}
	}
}
