type Flatten<T> = { [K in keyof T]: T[K] };
type MarkPropsAsOptional<
  T extends object,
  K extends keyof T = keyof T
> = Flatten<Partial<Pick<T, K>> & Omit<T, K>>;
type MarkPropsAsOptionalStruct = MarkPropsAsOptional<
  {
    foo: string;
    bar: number;
    baz: boolean;
  },
  "bar"
>;

type ExpectedPropKeys<T extends object ,ValueType> = {
    [K in keyof T]-?:T[K] extends ValueType ? K : never
}[keyof T]
type FuncStruct = (...args: any[])=>any
type FunctionKeys<T extends object> = ExpectedPropKeys<T,FuncStruct>
type TestFunc = {
    foo:()=>void,
    bar:()=>number,
    baz:number
}
type Test01 = FunctionKeys<TestFunc>
type RequiredKeys<T> = {
    [K in keyof T]-? :{} extends Pick<T,K> ? never:K;
}[keyof T]
type TestObject = {props:number}
type Test02 =  RequiredKeys<TestObject>

// 模板字符串

// 专用工具类型
// 大写
type Heavy<T extends string> = `${Uppercase<T>}`
// 首字母大写
type Respect<T extends string> = `${Capitalize<T>}`

type Test03 = Heavy<'liboq'>
type Test04 = Respect<'liboq'>

//  挑选出存在的类型
type PickByValueType<T extends object ,Type> = {
    [K in keyof T as T[K] extends Type ? K :never]: T[K]
}
type TestObject1 = {props:number,func:()=>number,baz:string,bob:boolean}

type Test05 = PickByValueType<TestObject1,boolean|string>

type Replace<Str extends string,search extends string,RepalceText extends string> = Str extends `${infer head}${search}${infer Tail}`? `${head}${RepalceText}${Tail}`:Str
type Test06 = Replace<'pikachu 帅','帅','真帅'>

