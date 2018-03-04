let Tab = (function (window) {
    function Tab(configuration = {}, callback) {
        this.configuration = configuration;
        this.callback = callback;
        this._configuration = {
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
            contain: 'tab-contain',
        };
        this.init();
    }

    Tab.prototype.init = function () {
        for (let i in this.configuration) {
            this._configuration[i] = this.configuration[i];
        }
        this.enactLayout();
        this.addEvent();
    };

    Tab.prototype.enactLayout = function () {
        this.prepareElement();
        this.css(this.contain, {
            position: 'absolute',
            left: this._configuration.left + 'px',
            top: this._configuration.top + 'px'
        });
        this.css(this.oul, {display: 'flex'});
        this.item.forEach((v, i) => {
            this.css(v, {
                listStyle: 'none',
                background: this._configuration.tabBgColor[i],
                boxSizing: 'border-box',
                cursor: 'pointer',
                padding: this._configuration.tabPadding,
                color: this._configuration.fontColor[i],
                marginLeft: this._configuration.tabDistance + 'px',
                border: `1px solid ${this._configuration.tabBorderColor[i]}`,
                borderBottom: 0,
                fontSize: this._configuration.fontSize
            });
            this.css(this.box[i], {
                position: 'absolute',
                border: `1px solid ${this._configuration.contentBorderColor}`,
                width: this._configuration.contentHeight + 'px',
                height: this._configuration.contentHeight + 'px',
                display: 'none',
            });
        });
        this.css(this.box[0], {display: 'block'});
        this.css(this.item[0], {background: '#2196F3', marginLeft: 0})
    };

    Tab.prototype.addEvent = function () {
        let that = this;
        this.item.forEach((v, i) => {
            v.addEventListener(this._configuration.event, function () {
                that.item.forEach((v, i) => {
                    that.css(v, {background: that._configuration.tabBgColor[i]});
                    that.css(that.box[i], {display: 'none'});
                });
                that.css(this, {background: that._configuration.tabBgColored[i]});
                that.css(that.box[i], {display: 'block'});
                that.callback && that.callback();
            }, false)
        });
    };

    Tab.prototype.prepareElement = function () {
        this.contain = document.getElementsByClassName(this._configuration.contain)[0];
        this.oul = this.contain.getElementsByClassName('tab-contain.ul')[0];
        this.item = [...this.oul.getElementsByClassName('tab-contain.item')];
        this.box = [...this.contain.getElementsByClassName('tab-contain.content')];
    };

    Tab.prototype.css = function (obj, option) {
        for (let i in option) {
            obj.style[i] = option[i];
        }
    };
    return Tab;
})(window);
