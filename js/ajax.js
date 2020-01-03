'use strect'

var $http = {
    ajax: function(o) {
        return new Promise((resolve, reject) => {
            let { type, url, params, async } = o;
            let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            xhr.open(type, url, async === false ? false : true);
            // xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(type === 'POST' ? JSON.stringify(params) : null);
            // 监听XMLHttpRequest状态
            xhr.onreadystatechange = function() {
                // xhr.readyState 2：请求已接收。3：请求处理中。4：请求已完成，且响应已就绪
                // xhr.status 200: ok 404: 未找到页面
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // console.log(xhr.responseXML)
                    resolve(JSON.parse(xhr.responseText))
                }
            }
        })
    },
    get: function(url, async) {
        return new Promise((resolve, reject) => {
            this.ajax({ type: 'GET', url, async }).then(res => {
                resolve(res)
            })
        })
    },
    post: function(url, params, async) {
        return new Promise((resolve, reject) => {
            this.ajax({ type: 'POST', url, params, async }).then(res => {
                resolve(res)
            })
        })
    }
};