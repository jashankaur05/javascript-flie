// arr=['name','study','address']
// // console.log(arr.push('email address'))

// console.log(arr.toString())
//join
// a=['i','like','apple']
// console.log(a.join(' * '))
//poping

// b=['apple','mango','orange']
// d=b.pop()
// console.log(d)
 //pushing
// c=['animal','name']
// c.push('cow')
// console.log(c)
 //shift
// e=['animal','fruit']
//  console.log(e.shift())
// console.log(e)
// //unshift
// f=['animal','fruit']
// f.unshift('week')
// console.log(f)
// //changing element array index start  with 0
// f=['animal','fruit']
// f[0]='week'
// console.log(f)
// //length of array
// g=['month','weeks']
// g[g.length]='day'
// console.log(g)
// //delete
// // h=["Banana", "Orange", "Apple", "Mango"]

// // console.log('i like :'+  h[0])
// // delete h[1]
// // console.log('i like:'+h[1])
// // //merging (concatinate) array method
// //  const girlsname=['palak','prabh','renu']
// // const boysname=['manpreet','arsh','harman']
// // const name=girlsname.concat(boysname)
// // console.log(name)
// // splice
// // i=['Apple','Mango','Pear','Banana']
// // // i.splice(0,1)//remove first element
// // i.splice(2,0,'lemon','kiwi')
// // console.log(i)
// // //slice
// // j=['Banana','Apple','grapse','guava']
// // a=j.slice(1)
// // console.log(a)

// //array sort
// jas=['Banana','Apple','orange','grapse']
// //first sort array
// console.log(jas.sort())
// //reverse method in array
// console.log(jas.reverse())

// //numeric sort
// // number=[1,43,56,78,36,87,54]
// // number.sort(function(a,b){return a-b})
// // console.log(number)

// //descending

// number=[1,43,56,78,36,87,54]
// number.sort(function(a,b){return a-b})//alphabetically 
// console.log(typeof(number))
// console.log(number)

// //random 
// m=[11,23,4,19,45]
// m.sort(function(){return 0.5-Math.random()})
// console.log(typeof(m))
// console.log(m)

//sort
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort())


//form
// let name=Array.from('Enjoy')//use comma
// console.log(name)

//of method
// value=[35,43,5,75,1]
// console.log(Array.of(value.length))//define array length

//prototype.copywithin
// arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr.copyWithin(3))
//start
// arr1=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr1.copyWithin(1,3))

// //end
// arr2=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr2.copyWithin(2,1))
// //.find
// f=[1,2,3,4,5,6,7,8,9]
// console.log(f.find(x=>x>7))

//findindex
// f1=[1,2,3,4,5,6,7,8,9]
// result=f1.findIndex(z=>z>8)
// console.log(result)

//entire
// color=['pink','Blue','Orange','Brown']
// s=color.entries()
// for(i of s){
//     console.log(i)
// }

// color=['pink','Blue','Orange','Brown']
// s=color.entries()
// for(i of s){
//     console.log(...i)
// }
// color=['pink','Blue','Orange','Brown']
// s=color.entries()
// for(i of s){
//     console.log(i)
// }

// color=['pink','Blue','Orange','Brown']
// s=color.entries()
// console.log(...s)

//keys
// number=[1,2,3,4,5,6,7]
// g=number.keys()
// console.log(...g)

//value
// f=[firstName='jashan',lastName='kaur']
// h=f.values()
// console.log(...h)

//every
// value=[12,32,45,65]
// function get(mark){
//    return mark>50 

// }
// c=value.filter(get)
// console.log(c)

//  let arry=[
//    {id:1,name:'test1'},
//    {id:2,name:'test2'},
//    {id:3,name:'test3'},
//    {id:4,name:'test4'},
//    {id:5,name:'test5'},
//  ]
//  console.log(arry)
// arry= arry.map((item)=>{item.gufyfuyf='erererer'
//  return item})
// console.log(arry)
//map
// let arry=[
//    {id:1,name:'test1'},
//    {id:2,name:'test2'},
//    {id:3,name:'test3'},
//    {id:4,name:'test4'},
//    {id:5,name:'test5'},
// ]
// console.log(arry)
// arry= arry.map((item)=>{item.lastname='kaur,singh'
// return item})
// console.log(arry)
// let arry=[
//    {id:1,name:'test1'},
//    {id:2,name:'test2'},
//    {id:3,name:'test3'},
//    {id:4,name:'test4'},
//    {id:5,name:'test5'},
// ]
// arry=arry.map((item)Number{item.id })
// console.log(arry)
//entries
// const alphabets = ["A", "B", "C"];
// let iterator = alphabets.entries();

//  for (let i of iterator) {
//   console.log(i);
//  }

//fill
// q=[1,2,3,4,5,6]
// x=q.fill('jas')
// console.log(x)

//lastindexof
// r=['j','a','s','a']
// s=r.lastIndexOf('a')
// a=r.indexOf('a')
// console.log(s)
// console.log(a)

//findindex
// function isodd(element){
//  return element % 2!==0
 
// }
// number=[6,3,4,8,2]
// firstodd=number.findIndex(isodd)
// console.log(firstodd)

//include
// k=['firstname','lastname','address']
// console.log(k.includes('lastname'))

//reduce
// message = ["JavaScript ", "is ", "fun."]
// function get(x,y){
//    return x+y
// }
// output=message.reduce(get)
// input=message.reduceRight(get)
// console.log(output)
// console.log(input)

//isArray
// arr=[1,2,3,4,5,6]
// console.log(Array.isArray(arr))
// text='jas'
// console.log(Array.isArray(text))

//some
// function is(element){
//    return element%2===0
// }
// number=[1,2,3,4,5]
// console.log(number.some(is))

//toLocaleString
// arr1=['nepal',1]
// arr2=arr1.toLocaleString()
// console.log(arr2)
//flatmap,flat
// numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// f=numbers.flat(3)
// g=numbers.flat(2)
// console.log(f)
// console.log(g)

//map most useful
number=[8,3,9,7,6,5]
function get(numbers){
return numbers*numbers
}
s=number.map(get)
console.log(s)