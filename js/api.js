// javascript tools

(function() {

    // 布尔全等判断
    const all = (arr) => arr.every(val => val > 1); /*箭头函数不跟'{}'表示指向函数返回值,用于返回函数值，否则就需要return*/
    // console.log(all([3, 4, 2]))
    // console.log(all([2, 1, 1]))

    // 检查数组各项相等
    const allEqual = (arr) => arr.every(val => val === arr[0]);
    // console.log(allEqual([3, 2, 2]))
    // console.log(allEqual([2, 2, 2]))

    // 平均数
    const average = (arr) => arr.reduce((total, val) => total + val) / arr.length;
    // console.log(average([1, 10, 5]))

    // 数组对象属性平均数
    const arrAverage = (arr) => arr.reduce((total, obj) => (total + obj.val), 0) / arr.length;
    // console.log(arrAverage([{ val: 12 }, { val: 4 }, { val: 2 }]))

    // 查找数组中出现最多的元素
    // const most = (arr)
    // console.log(most([2, 1, 5, 3, 4, 2, 4, 2]))

    // 单词首字母大写
    // const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("")
    const capitalize = (str) => str.replace(/\b[a-z]/g, val => val.toUpperCase()); //\b匹配一个字边界，即字与空格间的位置
    // console.log(capitalize('hello world'))

    // 返回字符串字节长度
    const byteSize = (str) => new Blob([str]).size;
    // console.log(byteSize("开心"))

    // 递归扁平化数组
    const deepFlatten = (arr) => [].concat(...arr.map(e => Array.isArray(e) ? deepFlatten(e) : e));
    // console.log(deepFlatten([
    //     [1, 2, [3, [4, 5, [6, 7]]]]
    // ]))

    // 删除不符合条件的值
    const dropWhile = (arr) => {
        let a = [];
        arr.map(e => e > 4 ? a.push(e) : null);
        return a;
    };
    // console.log(dropWhile([4, 3, 5, 2, 1, 7, 8, 4]))

    // 两数组查重
    const intersection = (a, b) => b.filter(e => new Set(a).has(e > 3 ? e : null));
    // console.log(intersection([3, 2, 5, 7], [4, 3, 1, 5, 3, 4, 7]))

    // 返回数组中某值的所有索引
    const indexOfAll = (arr, val) => arr.reduce((total, el, i) => (el === val ? [...total, i] : total), [])
        // console.log(indexOfAll([1, 3, 2, 7, 5, 4, 2], 2))

    const nest = (arr, id = null) => arr.filter(item => item.parent_id == id).map(item => ({...item, children: nest(arr, item.id) }));
    // let arr = [
    //     { id: 1, parent_id: null },
    //     { id: 2, parent_id: 1 },
    //     { id: 4, parent_id: 5 },
    //     { id: 5, parent_id: null },
    //     { id: 7, parent_id: 1 },
    //     { id: 8, parent_id: 5 },
    // ]
    // console.log(nest(arr))

    // 将多行字符串拆分为行数组
    const splitLines = (str) => str.split("\n");
    // console.log(splitLines('This\nis a\nmultiline\nstring.\n'))

    const forOwn = (obj) => {
        for (let val in obj) {
            return val
        }
    }
    console.log(forOwn({ foo: 'bar', a: 1 }))

})()