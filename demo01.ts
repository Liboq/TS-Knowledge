interface Foo {
    name: string,
    age: number
}
interface Bar {
    name:string;
    job:string
}
let foo:Foo={
    name:"张三",
    age: 17
}
let bar:Bar = {
    name:'李四',
    job:'程序员'
}
// foo=bar
// 类型比较的话只需要 declare 就 ok 了
// declare 关键字 声明一个仅在类型空间存在的变量
declare let foo1 :Foo
declare let bar1 :Bar

// foo1 = bar1


