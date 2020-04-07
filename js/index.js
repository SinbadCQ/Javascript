"use strict";
(function () {
    // document.getElementById("btn").onclick = function () {
    //     console.log(9)
    //     var xmlHttp = new XMLHttpRequest();
    //     xmlHttp.open("get", "http://192.168.0.104:8888", true);
    //     xmlHttp.send()
    // }
    // function fn(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // fn.prototype.sayName = function () {
    //     console.log(this.age)
    // }
    // var instance = new fn('aa', 30);
    // var instance2 = new fn('bb', 20);
    // instance.sayName()
    // instance2.sayName()
    function add(num = 0, count = 1) {
        if (count <= 100) {
            num += count;
            add(num, ++count)
        } else {
            console.log(num)
        }
    }
    add()
    console.log(null + 0)
})()