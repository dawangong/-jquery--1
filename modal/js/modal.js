class Modal {
    constructor(config = {}) {
        this._config = config;
        this.config = {
            contain: 'dg-modal-contain',
            cover: 'dg-modal-cover',
            width: 400,
            height: 200,
            themeColor: '#5998df',
            fontFamily: '微软雅黑'
        };
        this.init();
    }

    init() {
        this.updateConfig();
        this.getElement();
        this.setElement();
        this.bindEvent();
    }

    updateConfig() {
        for (let i in this._config) {
            this.config[i] = this._config[i];
        }
    }

    getElement() {
        this.contain = this.$(document, '.' + this.config.contain);
        this.cover = this.$(document, '.' + this.config.cover);
        this.getOther();
    }

    getOther() {
        this.ele = ['header', 'footer', 'title', 'close', 'decide', 'cancel'];
        let parents = ['contain', 'contain', 'header', 'header', 'footer', 'footer'];
        this.ele.forEach((v, i) => {
            this[v] = this.$(this[parents[i]], '.dg-modal-' + v);
        })
    }

    setElement() {
        this.ele.splice(0, 3);
        this.css(this.contain, {
            width: this.config.width + 'px',
            height: this.config.height + 'px',
            position: 'fixed',
            left: '50%',
            marginLeft: -this.config.width / 2 + 'px',
            top: '50%',
            marginTop: -this.config.height / 2 + 'px',
            zIndex: 200,
            background: 'white',
            display: 'block'
        });
        this.css(this.cover, {
            background: 'rgb(127, 127, 127, 0.5)',
            width: `${document.body.clientWidth}px`,
            height: `${(document.body.scrollHeight || document.documentElement.scrollHeight)}px`,
            position: 'fixed',
            display: 'block',
            zIndex: 199,
            left: 0,
            top: 0
        });
        this.css(this.header, {width: '100%', height: '35px', background: this.config.themeColor});
        this.css(this.title, {
            float: 'left',
            height: '100%',
            lineHeight: '33px',
            fontSize: '16px',
            paddingLeft: '5px',
            color: 'white'
        });
        if (this.close) {
            this.css(this.close, {
                float: 'right',
                cursor: 'pointer',
                height: '100%',
                lineHeight: '33px',
                fontSize: '20px',
                paddingRight: '10px',
                color: 'white'
            });
        }
        if (this.decide || this.cancel) {
            this.css(this.footer, {
                background: '#f5f5f5',
                width: '100%',
                height: '40px',
                position: 'absolute',
                left: 0,
                bottom: 0
            });
        }
        let baseValue = 10;
        if (this.decide) {
            this.css(this.decide, {
                float: 'right',
                background: this.config.themeColor,
                marginRight: baseValue + 'px',
                marginTop: '6px',
                padding: '3px 8px',
                fontSize: '16px',
                color: 'white',
                cursor: 'pointer',
                fontFamily: this.config.fontFamily
            });
        }

        if (this.cancel) {
            this.css(this.cancel, {
                float: 'right',
                background: 'white',
                marginRight: baseValue + 'px',
                marginTop: '6px',
                padding: '3px 8px',
                color: '#333',
                fontSize: '16px',
                cursor: 'pointer',
                fontFamily: this.config.fontFamily
            });
        }
    }

    bindEvent() {
        this.ele.forEach(v => {
            if (this[v]) {
                this[v].addEventListener('click', () => {
                    this.css(this.contain, {display: 'none'});
                    this.css(this.cover, {display: 'none'});
                }, false);
            }
        });
    }

    decideFn(dFn) {
        if (this.decide) {
            this.decide.addEventListener('click', () => {
                dFn();
            }, false);
        }
        return this;
    }

    cancelFn(cFn) {
        if (this.cancel) {
            this.cancel.addEventListener('click', () => {
                cFn();
            }, false);
        }
        return this;
    }

    initiativeDecide(dFn) {
        this.css(this.contain, {display: 'none'});
        this.css(this.cover, {display: 'none'});
        dFn();
        return this;
    }

    initiativeCancel(cFn) {
        this.css(this.contain, {display: 'none'});
        this.css(this.cover, {display: 'none'});
        cFn();
        return this;
    }

    $(parent, obj) {
        return parent.querySelector(obj);
    }

    css(obj, option) {
        for (let i in option) {
            obj.style[i] = option[i];
        }
    }
}
