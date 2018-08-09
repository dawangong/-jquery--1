class Tab {
	constructor(configuration = {}, callback) {
		this._configuration = configuration;
		this.callback = callback;
		this.init();
	}

	init() {
		this.updateDeploy();
		this.enactLayout();
		this.addEvent();
	}

	updateDeploy() {
		this.configuration = {
			left: 0,
			top: 0,
			tabPadding: '2px 10px',
			tabBgColor: ['#00ffd3fa', '#00ffd3fa', '#00ffd3fa'],
			tabBgColored: ['#2196F3', '#2196F3', '#2196F3'],
			tabBorderColor: ['black', 'black', 'black'],
			tabDistance: 5,
			fontSize: '14px',
			fontColor: ['white', 'white', 'white'],
			contentWidth: 300,
			contentHeight: 300,
			contentBorderColor: 'black',
			event: 'click',
			contain: 'dg-tab-contain',
		};
		for (let i in this._configuration) {
			this.configuration[i] = this._configuration[i];
		}
	}

	enactLayout() {
		this.prepareElement();
		this.css(this.contain, {
			position: 'absolute',
			left: this.configuration.left + 'px',
			top: this.configuration.top + 'px'
		});
		this.css(this.oul, {display: 'flex'});
		this.item.forEach((v, i) => {
			this.css(v, {
				listStyle: 'none',
				background: this.configuration.tabBgColor[i],
				boxSizing: 'border-box',
				cursor: 'pointer',
				padding: this.configuration.tabPadding,
				color: this.configuration.fontColor[i],
				marginLeft: this.configuration.tabDistance + 'px',
				border: `1px solid ${this.configuration.tabBorderColor[i]}`,
				borderBottom: 0,
				fontSize: this.configuration.fontSize
			});
			this.css(this.box[i], {
				position: 'absolute',
				border: `1px solid ${this.configuration.contentBorderColor}`,
				width: this.configuration.contentHeight + 'px',
				height: this.configuration.contentHeight + 'px',
				display: 'none',
			});
		});
		this.css(this.box[0], {display: 'block'});
		this.css(this.item[0], {background: '#2196F3', marginLeft: 0})
	}

	addEvent() {
		let that = this;
		this.item.forEach((v, i) => {
			v.addEventListener(this.configuration.event, function () {
				that.item.forEach((v, i) => {
					that.css(v, {background: that.configuration.tabBgColor[i]});
					that.css(that.box[i], {display: 'none'});
				});
				that.css(this, {background: that.configuration.tabBgColored[i]});
				that.css(that.box[i], {display: 'block'});
				that.callback && that.callback();
			}, false)
		});
	}

	prepareElement() {
		this.contain = document.getElementsByClassName(this.configuration.contain)[0];
		this.oul = this.contain.getElementsByClassName('dg-tab-contain.ul')[0];
		this.item = [...this.oul.getElementsByClassName('dg-tab-contain.item')];
		this.box = [...this.contain.getElementsByClassName('dg-tab-contain.content')];
	}

	css(obj, option) {
		for (let i in option) {
			obj.style[i] = option[i];
		}
	}
}
