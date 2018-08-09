class datePicker {
    constructor(config = {}) {
        this.init(config);
    }

    init(config) {
        this.config = {
            container: 'bg-datePick-container'
        };
        this.itemLevel1 = ['bg-datePick-input', 'bg-datePick-content', 'bg-datePick-icon'];
        this.itemLevel2 = ['bg-datePick-last-year', 'bg-datePick-last-month', 'bg-datePick-year-value', 'bg-datePick-month-value', 'bg-datePick-next-month', 'bg-datePick-next-year'];
        this.item = ['lastYear', 'lastMonth', 'yearValue', 'monthValue', 'nextMonth', 'nextYear'];
        this.itemLevel3 = ['bg-datePick-header', 'bg-datePick-table', 'bg-datePick-bar'];
        this.extend(config);
        this.setStyle();
    }

    getElement() {
        this.container = this.$(document, this.config.container);
        this.itemLevel1.forEach(v => {
            let str = this.getConst(v);
            this[str] = this.$(this.container, v);
        });
        this.itemLevel3.forEach(v => {
            let str = this.getConst(v);
            this[str] = this.$(this.content, v);
        });
        this.itemLevel2.forEach((v, i) => {
            let str = this.getConst(v);
            this[this.item[i]] = this.$(this.bar, v);
        });
    }

    bindEvent() {
        this.container.addEventListener('focus', () => {
        }, false)
    }

    createAp(tag, obj, text, complex = false, index = null) {
        if (!complex) {
            this[tag] = document.createElement(tag);
            obj.appendChild(this[tag]);
        } else {
            this[tag] = document.createElement(tag);
            this[tag].innerText = text;
            tag === 'tr' ? this.trContain.push(this[tag]) : '';
            if (index === 0 && tag === 'tr') {
                this.css(this[tag], {
                    borderBottom: '1px solid #ebeef5'
                })
            }
            if (tag === 'th') {
                this.css(this[tag], {
                    padding: '5px 8px',
                    color: '#606266',
                    fontWeight: 400
                })
            }
            obj.appendChild(this[tag]);
        }
    }

    initDate() {
        this.trContain = [];
        let index = 0;
        while (index < 7) {
            this.createAp('tr', this.tbody, '', true, index);
            index++;
        }
        this.trContain.forEach((v, i) => {
            delete this.week;
            let suoyin = 0;
            if (i === 0) {
                this.week = ['日', '一', '二', '三', '四', '五', '六'];
            }
            while (suoyin < 7) {
                if (this.week) {
                    this.createAp('th', v, this.week[suoyin], true);
                } else {
                    this.createAp('th', v, '', true);
                }
                suoyin++;
            }
        });
        let date = new Date();
        this.year = `${date.getFullYear()}年`;
        this.month = `${date.getMonth() + 1}月`;
        this.yearValue.innerText = this.year;
        this.css(this.yearValue, {
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '22px',
            textAlign: 'center',
            cursor: 'pointer',
            color: '#606266'
        });
        this.monthValue.innerText = this.month;
        this.css(this.monthValue, {
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '22px',
            textAlign: 'center',
            cursor: 'pointer',
            color: '#606266'
        });
    }

    setStyle() {
        this.getElement();
        this.css(this.content, {
            width: '250px',
            border: '1px solid #e3e7ec',
            boxSizing: 'border-box',
            borderRadius: '2px',
            marginTop: '5px'
        });
        this.css(this.input, {
            width: '150px',
            height: '20px',
            textIndent: '2em',
            outline: 'none'
        });
        this.css(this.icon, {
            position: 'absolute',
            left: '12px',
            top: '10px'
        });
        this.css(this.bar, {
            width: '200px',
            margin: '5px auto',
            display: 'flex',
            justifyContent: 'space-around',
        });
        this.css(this.table, {
            margin: '0 auto'
        });
        let lastYear = this.lastYear.getElementsByTagName('span')[0];
        this.css(lastYear, {
            fontSize: '14px',
            position: 'relative',
            top: '-1px',
            color: '#303133',
            cursor: 'pointer'
        });
        let nextYear = this.nextYear.getElementsByTagName('span')[0];
        this.css(nextYear, {
            fontSize: '14px',
            position: 'relative',
            top: '-1px',
            color: '#303133',
            cursor: 'pointer'
        });
        let lastMonth = this.lastMonth.getElementsByTagName('span')[0];
        this.css(lastMonth, {
            color: '#303133',
            cursor: 'pointer'
        });
        let nextMonth = this.nextMonth.getElementsByTagName('span')[0];
        this.css(nextMonth, {
            color: '#303133',
            cursor: 'pointer'
        });
        this.bindEvent();
        this.createAp('tbody', this.table);
        this.initDate();
        this.css(this.trContain[0], {
            borderBottom: '1px solid #e3e7ec'
        });
    }

    extend(config) {
        Object.assign(this.config, config);
    }

    getConst(str) {
        let index = str.lastIndexOf('-');
        let res = str.substring(index + 1);
        return res;
    }

    $(parent, obj) {
        return parent.querySelector(`.${obj}`);
    }

    css(obj, option) {
        for (let i in option) {
            obj.style[i] = option[i];
        }
    }
}