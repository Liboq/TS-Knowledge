// 数组
const arr1: string[] = ["123", "23"];
const arr2: Array<string> = [];
// 元组
const arr3: string[] = ["ls", "zs", "ww"];
console.log(arr3[100]); // 并没有报错，不符合预期，这个时候需要 用到元组
const arr4: [string, string, string] = ["ls", "zs", "ww"];
// console.log(arr4[100]); // 长度为 "3" 的元组类型 "[string, string, string]" 在索引 "100" 处没有元素。

// 元组支持可选成员
const arr5: [string, boolean?, number?] = ["ls"];
// 可选的情况下arr5的长度也发生了变化
type TupleLength = typeof arr5.length;

// 具名元组
const arr6: [name: string, male?: boolean, age?: number] = ["张三", false, 18];
const [ele, ...rest] = arr6;
// 对象类型标注
// interface
// 每一个属性的值必须一一对应到接口的属性类型
// 不能有多的属性，也不能有少的属性
// 修饰符 ?为可选，readonly为只读
interface IDescription {
  name: string;
  age: number;
  male: boolean;
  fun?: Function;
}
const obj1: IDescription = {
  name: "zs",
  age: 18,
  male: false,
};
obj1.male = true;
// obj1.fun() //不能调用可能是“未定义”的对象。
// 字面量类型
// 联合类型
// 一组类型的可用集合
interface Tmp {
  meal: true | false;
  num: 1 | 2 | 3;
  name: "zs" | "ls" | "wangwu";
}
// 枚举
/*
未定义值将从0开始排序，存在赋值的后面的则以赋值的数加一 
 */
enum Items {
  Foo,
  Bar,
  Baz = 10,
  bm,
}
// 函数

const foo2 = (name: string): number => {
  return name.length;
};

const fun3: (name: string) => number = (name) => {
  return name.length;
};

// 第一种和第二种的格式不一样，第二种把类型放到了一起，所以可以使用类型别名抽离出来

type FuncFoo = (name: string) => number;
const fun4 :FuncFoo = (name)=>{
    return name.length
}   
interface FuncFoo1 {
    (name:string):number
}
const fun5 : FuncFoo1 = (name)=>{
    return name.length
}
// 函数重载
function fun6(foo:number,bar:true):string;
function fun6(foo:number,bar?:false):number;
function fun6(foo:number,bar?:boolean):string|number {
    if(bar){
        return String(foo)
    }else{
        return foo*100
    }
}
//  any unknown never

// 断言
// as NewType
let unknownVar :unknown;
(unknownVar as ({foo:()=>{}})).foo
// 双重断言
// 当类型差距过大时，需要先断言为 any/unknown,再断言
const  unknownVar1:string = "lin";
(unknownVar1 as unknown as {handle:()=>{}}).handle() //类型 "string" 到类型 "{ handle: () => {}; }" 的转换可能是错误的，因为两种类型不能充分重叠。如果这是有意的，请先将表达式转换为 "unknown"

// 非空断言
// ！