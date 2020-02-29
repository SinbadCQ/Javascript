const http = require("http");
const os = require("os"); //操作系统
const url = require("url"); //用来解析get请求参数
const queryString = require("querystring"); //用来解析post请求参数
const network = os.networkInterfaces(); //获取网络接口信息

const server = http.createServer(function(request, response) {
    let buffers = [];
    response.writeHead(200, {
        'Access-Control-Allow-Headers': 'Content-Type', //对应requestHeader
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    })
    request.addListener('data', function(chunk) {
        buffers.push(chunk)
    })
    request.addListener('end', function() {
        const resData = {
            code: 200,
            data: {
                name: '张三',
                age: 20,
                sex: '男',
                height: '170'
            },
            status: 1
        }
        let reqParams = Buffer.concat(buffers).toString(); //请求参数
        try {
            if (request.method == 'post') {
                reqParams = JSON.parse(reqParams);
            } else {
                console.log(reqParams)
            }

            response.write(JSON.stringify(resData))
            response.end()
        } catch (error) {
            console.log(error)
        }
    })

})

server.listen(port = 8889, function(e) {
    for (let key in network) {
        console.log("Server running at http://" + network[key][1].address + ":" + port + "")
        break;
    }
})