# typescript 学习

## 原始内置类型

除了 null 和 undefined ,原始内置类型和 js 类型的意思是一样的

## 类型查询操作符 typeof

## 泛型

## Top Type => Bottom Type

- any - unknown - Top Type -
- Object - 顶级原型 -
- String - Boolean - Number - 装箱类型 -
- string - boolean - number - 基础类型 -
- 'pikachu' - true - 666 - 对应的字面量类型

## void 返回值特点

## Partial

生成一个新的类型，此类型与 T 的属性一值，其属性都是可选项

```js
type Partial<T> = {
    [P in keyof T]?: T[p]
}
```

## Omit

忽略指定属性，创造一个新的类型

```js
type Omit<T,K extends string | number | symbol> = {
    [P in Exclude<keyof T,K>]:T[p]
}
```

## Pick

挑选出需要的属性，创造一个新的类型

```js
type Pick<T,K extends keyof T> = {
    [P in K] : k[P]
}
```

## Readonly

生成一个新的类型，此类型与 T 的属性一值，其属性都是只读选项

```js
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}
```

## Required

生成一个新的类型，此类型与 T 的属性一值，其属性都是必选项

```js
type Required<T> = {
    required [P in keyof T]: T[P]
}
```

## Record

将一个类型中的属性值 映射 到另一个类型

```js
type Record <K extends string | number | symbol , T> = {
    [P in K]:T
}
```

## Exclude

若 T 是 U 的子类，返回 never 类型，否则 返回 T 类型

```js
type Exclude<T , U> = T extends U ? never: T
```

## Extract

与 Exclude 相反，若 T 是 U 的子类，返回 T,否则 返回 never

```js
type Extract<T,U> = T extends U ? T :never
```

## ReturnType

获取返回值类型

```js
type ReturnType<T extends new (...args:any) => any> = T extends new (...args:infer P)=>any?P:never
```
