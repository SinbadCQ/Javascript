(function () {

    document.getElementById("btn").onclick = function () {
        console.log(9)
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("get", "http://192.168.0.104:8888", true);
        xmlHttp.send()
    }

})()