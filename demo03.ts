const func =  (input:string)=>{
    return input.length > 10
}
const func2 : typeof func = (name:string)=>{
    return name === 'linbuda'
}
console.log(func2('zsssssssssssssssssssssssssssssssssssssss'));

const arr :Array<number> =  [1,2,3]
arr.reduce((pre,curr,idx,arr)=>{
    return [...pre]
},[])
// arr.push('123') //类型“string”的参数不能赋给类型“number”的参数。
// arr.includes('123') //类型“string”的参数不能赋给类型“number”的参数。
arr.reduce<number[]>((pre ,curr,idx,arr)=>{
    return [...pre,curr]
},[])
arr.reduce((pre:Array<number> ,curr,idx,arr)=>{
    return [...pre,curr]
},[])