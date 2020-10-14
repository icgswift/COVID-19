// 将数据对象转换为recharts可以识别的格式
// 将数据对象{09/10/20:1,09/11/20:2,09/12/20:3}转化为数组[{time:09/10/20,number:1},{time:09/11/20,number:2},{time:09/12/20,number:3}]

const transformHistory = (type = {}) =>
    // {a:1,b:2} Object.entries()返回自身可枚举属性(不包括原型上的，区别于for in遍历)的键值对数组 [ ['a',1],['b',2] ]
    Object.entries(type).map(item => {
        const [time, number] = item
        return { time, number }
    })

export default transformHistory    