(function () {
    function fn() { }
    // 重写原型会导致重写constructor指向
    fn.prototype = {
        name: '张三',
        age: 23,
        job: '教师',
        sayName: function () {
            // console.log(this.name)
        }
    }
    var o = new fn()
    o.name = '李四'
    delete o.name; 
    o.sayName()
})()