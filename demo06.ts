//

type DelimitCase2CamelCase<
  Str extends String,
  Delimit extends string
> = Str extends `${infer head}${Delimit}${infer Tail}`
  ? `${head}${DelimitCase2CamelCase<Capitalize<Tail>, Delimit>}`
  : Str;

type Test07 = DelimitCase2CamelCase<"li-bo-qiao", "-">;

interface AList {
  name: string;
  age: number;
  type: number;
}
interface BList {
  name: string;
  age: number;
  type: number;
  count: number;
}
interface CList {
  name: string;
  age: number;
  type: number;
}
// type Extract<T, U> = T extends U ? T : never
// type LT = BList
type LT = Extract<AList | BList | CList, BList>;

// exclude
type A = {
  name:string,
  age:number
}
type B = {
  name:string,
  address:string
}
type TestA = Exclude<A,B>
type C = ReturnType<()=>void>