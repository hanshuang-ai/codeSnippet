//const 常量测试
const obj = {
    name : 'a'
}

obj.name = 'b'

console.log(obj.name)

obj.age = '18'

console.log(obj)

const arr = []

arr[0] = '1'

console.log(arr)

arr = []

console.log(arr)
//const 定义的常量如果是基本类型，则不能更改
//const 定义的常量如果是复合类型，则可以更改里面的属性，但是不能该对象，即：可以更改对象属性，不鞥更改对象本身