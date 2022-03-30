// 目标是要有三种功能：
    // 时间的转换，html中的特殊字符转实体, 实体转html特殊字符
function formatDate(dateStr, format='yyyy-mm-dd-hh-mm-ss') {
    let date = new Date(dateStr);
    const year = addZero(date.getFullYear());
    const month = addZero(date.getMonth()+1);
    const day = addZero(date.getDate());
    const hour = addZero(date.getHours());
    const minute = addZero(date.getMinutes());
    const second = addZero(date.getSeconds());
    // yyyy-mm-dd-hh-mm-ss
    let formatArray = format.split('-');
    switch(formatArray[0].toLowerCase()) {
        case 'yyyy' && formatArray.length===3:
            return `${year}年${month}月${day}日`;
        case 'hh':
            return `${hour}时${minute}分${second}秒`;
        default:
            return `${year}年${month}月${day}日${hour}时${minute}分${second}秒`;

    }
}
function addZero(dateData){
    return dateData>=10 ? dateData : '0'+dateData;
}

// 两个用于操作
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g,(match) => {
        switch (match) {
            case('<'):
                return '&lt;'
            case('>'):
                return '&gt;'
            case('"'):
                return '&quot;'
            case('&'):
                return '&amp;'
        }
    })
};

function htmlUnescape(htmlStr) {
    return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g,(match) => {
        switch (match) {
            case('&lt;'):
                return '<';
            case('&gt;'):
                return '>';
            case('&quot;'):
                return '"';
            case('&amp;'):
                return '&';
        }
    })
};


// 使用commonJs实现模块化
module.exports = {
    formatDate,
    htmlEscape,
    htmlUnescape
}
