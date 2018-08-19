class Message {
    constructor(config = {}) {
        this.config = {
            container: 'dg-message-container',
            message: '这是一段测试提示语',
            type: 'tishi'
        };
        this.extend(config);
        this.init()
    }

    init() {
        this.initElement();
        this.setStyle();
        this.bindEvent();
    }

    initElement() {
        this.getContainer();
        this[this.config.type] = this.createElement(this.container, 'span', `iconfont icon-${this.config.type}`);
        this.message = this.createElement(this.container, 'span', 'dg-message-message');
        this.close = this.createElement(this.container, 'span', 'dg-message-close');
    }

    getContainer() {
        let script = document.getElementsByTagName('script')[0];
        this.container = document.createElement('div');
        this.container.className = 'dg-message-container';
        document.body.insertBefore(this.container, script);
    }

    createElement(parent, tagName, className) {
        let tempNode = document.createElement(tagName);
        tempNode.className = className;
        parent.appendChild(tempNode);
        return tempNode;
    }

    setStyle() {
        this.css(this.container, {
            position: 'fixed',
            left: '50%',
            top: '0px',
            zIndex: 100,
            padding: '0px 40px',
            transform: 'translate(-50%)',
            borderRadius: '5px',
            height: '35px',
            border: `1px solid ${this.recognize(this.config.type).borderColor}`,
            background: this.recognize(this.config.type).bgColor
        });
        this.css(this[this.config.type], {
            position: 'absolute',
            left: 0,
            padding: '0 10px',
            height: '35px',
            lineHeight: '35px',
            fontSize: '22px',
            color: this.recognize(this.config.type).color
        });
        this.message.innerText = this.config.message;
        this.css(this.message, {
            display: 'inline-block',
            fontSize: '14px',
            height: '35px',
            lineHeight: '35px',
            color: this.recognize(this.config.type).color
        });
        this.close.innerText = '×';
        this.css(this.close, {
            position: 'absolute',
            top: '3px',
            right: '10px',
            cursor: 'pointer',
            fontSize: '18px',
            color: this.recognize(this.config.type).color
        });
        this.move(this.container, 'top', 20, 20, 2000, () => {
            this.move(this.container, 'opacity', 0, 50, 0, () => {
                this.container && document.body.removeChild(this.container);
            });
        });
    }

    recognize(type) {
        let theme = {};
        switch (type) {
            case 'tishi':
                theme = {
                    color: '#909399',
                    bgColor: '#edf2fc',
                    borderColor: '#ebeef5'
                };
                break;
            case 'jinggao':
                theme = {
                    color: '#e6a23c',
                    bgColor: '#fdf6ec',
                    borderColor: '#faecd8'
                };
                break;
            case 'chenggong':
                theme = {
                    color: '#67c23a',
                    bgColor: '#f0f9eb',
                    borderColor: '#e1f3d8'
                };
                break;
            case 'shibai':
                theme = {
                    color: '#f56c6c',
                    bgColor: '#fef0f0',
                    borderColor: '#fde2e2'
                };
                break;
        }
        return theme;
    }

    bindEvent() {
        this.close.addEventListener('click', () => {
            this.move(this.container, 'opacity', 0, 50, 0, () => {
                this.container && document.body.removeChild(this.container);
            });
        }, false);
    };

    getStyle(obj, attr) {
        return getComputedStyle(obj)[attr];
    }

    move(obj, attr, target, time, cbTime = 2000, cb) {
        clearInterval(obj.timer);
        obj.timer = setInterval(() => {
            let attrValue;
            if (attr === 'opacity') {
                attrValue = parseFloat(this.getStyle(obj, attr));
                attrValue = 100 * attrValue;
                target = 100 * target;
            } else {
                attrValue = parseInt(this.getStyle(obj, attr));
            }
            let speed = (target - attrValue) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (attrValue === target) {
                clearInterval(obj.timer);
                setTimeout(() => {
                    cb && cb();
                }, cbTime);
            } else {
                if (attr === 'opacity') {
                    obj.style[attr] = (attrValue + speed) / 100;
                } else {
                    obj.style[attr] = attrValue + speed + 'px';
                }
            }
        }, time);
    }

    extend(config) {
        Object.assign(this.config, config);
    }

    $(parent, obj) {
        if (parent) {
            return parent.querySelector(`.${obj}`);
        }
    }

    css(obj, option) {
        for (let i in option) {
            obj.style[i] = option[i];
        }
    }
}