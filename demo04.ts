// ## 内置工具类基础 

interface Foo {
    name:string,
    age:number,
}
// Pick
// type Pick<T,K extends keyof T> = {
//     [P in K]:T[P]
// }
type PickedFoo = Pick<Foo,'age'|"name">
// Omit
// Extract<T,U> 交集
// Exclude<T,U> 差集
// 

type T1 = {name:string}
type T2 = {age:number}
type K2<T> = T extends {a: (x:infer U)=>void,b:(x:infer U )=>void}?U:never
interface Props {
    a: (x:T1)=>Number,
    b:(x:T2)=>string
}
type K3 = K2<Props>
// 推断后面的类型
type shift<T> =  T extends [infer L,...infer R] ?[...R]:[]
type Arr = [number,string,boolean]
type K4 = shift<Arr>
// 推断最后一个的类型
type lastArr<T> = T extends [...infer F,infer L]? L:[]
type K5 = lastArr<Arr>

// 即使用更少入参的函数来作为一个预期更多入参函数参数的实现。(可以用少参实现多参)
function handler(arg: string) {
    console.log(arg);
  }
  
  function useHandler(callback: (arg1: string, arg2: number) => void) {
    callback('linbudu', 599);
  }
  
  useHandler(handler);//linbudu


