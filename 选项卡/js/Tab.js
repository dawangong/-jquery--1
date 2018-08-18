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
            left: 1,
            top: 0,
            tabPadding: '2px 10px',
            tabBgColor: ['#00ffd3fa', '#00ffd3fa', '#00ffd3fa'],
            tabBgColored: ['#2196F3', '#2196F3', '#2196F3'],
            tabBorderColor: ['black', 'black', 'black'],
            tabDistance: 0,
            fontSize: '14px',
            fontColor: ['white', 'white', 'white'],
            contentWidth: 800,
            contentHeight: 500,
            contentBorderColor: 'black',
            event: 'click',
            container: 'dg-tab-container',
            contentBorder: true
        };
        for (let i in this._configuration) {
            this.configuration[i] = this._configuration[i];
        }
    }

    enactLayout() {
        this.prepareElement();
        this.css(this.container, {
            position: 'absolute',
            left: this.configuration.left + 'px',
            top: this.configuration.top + 'px'
        });
        this.css(this.oul, {
            display: 'flex',
            position: 'relative',
            top: '1px',
            zIndex: 10
        });
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
                borderLeft: 0,
                fontSize: this.configuration.fontSize,
            });
            this.css(this.box[i], {
                position: 'absolute',
                border: `1px solid ${this.configuration.contentBorderColor}`,
                width: this.configuration.contentWidth + 'px',
                height: this.configuration.contentHeight + 'px',
                display: 'none',
            });
            if(this.configuration.contentBorder) {
                this.css(this.box[i], {
                    border: 0,
                    borderTop: `1px solid ${this.configuration.contentBorderColor}`
                });
            }
        });
        this.css(this.box[0], {display: 'block'});
        this.css(this.item[0], {background: '#2196F3', marginLeft: 0, borderBottom: '1px solid #2196F3',                borderLeft: `1px solid ${this.configuration.tabBorderColor[0]}`,

        })
    }

    addEvent() {
        let that = this;
        this.item.forEach((v, i) => {
            v.addEventListener(this.configuration.event, function () {
                that.item.forEach((v, i) => {
                    that.css(v, {background: that.configuration.tabBgColor[i], borderBottom: `1px solid ${that.configuration.tabBorderColor[i]}`});
                    that.css(that.box[i], {display: 'none'});
                });
                that.css(this, {background: that.configuration.tabBgColored[i], borderBottom: '1px solid #2196F3'});
                that.css(that.box[i], {display: 'block'});
                that.callback && that.callback();
            }, false)
        });
    }

    prepareElement() {
        this.container = document.getElementsByClassName(this.configuration.container)[0];
        this.oul = this.container.getElementsByClassName('dg-tab-container.ul')[0];
        this.item = [...this.oul.getElementsByClassName('dg-tab-container.item')];
        this.box = [...this.container.getElementsByClassName('dg-tab-container.content')];
    }

    css(obj, option) {
        for (let i in option) {
            obj.style[i] = option[i];
        }
    }
}
