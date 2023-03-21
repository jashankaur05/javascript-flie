//  a=()=>console.log('hello')
// a()
// b= ()=>console.log(12+13)
// b(a,b)
//arrow 
// a=()=>console.log('My name is jashan')
// a()
// one=x=>console.log(x)
// one('Hi')
//  let age=40
//  let welcome=(age<30)?
// () => console.log('baby'):
// () => console.log('adult')
// welcome()

//sum
// let sum=(a,b)=>{
// let result=a+b
// return result
// }
// result1=sum(100,250)
// console.log(result1)
 //sum practice
//  sum=(c,d)=>{
//     result=c*d
//     return result
//  }
//  result2=sum(20,50)
//  console.log(result)

 //arguments binding
//  let x = () =>{
// console.log(x)
// }
// x(2,4)
// value=(ar,...argu)=>{
//     value(ar)
// }
// console.log(12,43,56,4,7,87,9,32,)

//without curly bracktes   
// out=(a)=>
// a/2;
// console.log(30)

//callback in arrow

    obj={
        name:"jashan",
        training:"js",
        getvalue:()=>{console.log("hello")}
       }
       //bracket notation
  console.log( obj["getvalue"]())
  //.accessor dot notation
console.log(obj.name)
obj.getvalue()

//return
// function get(x,y){
//     return{
//         name:'jashan',
//         training:'js',
//         getvalue:(x,y)=>{sum=x+y;return sum}
//     }
   
// }

// // console.log(get()) 
// a=get()
// console.log(a)
// console.log(a.getvalue(30,89))

// function printarray(arr){
//    for(i=0;i<arr.length;i++){
//   console.log(arr[i])
//    }
//       return  {
//             lengthofarray:arr.length,
//             sorting:(arr)=>{
//                 arr=[12,34,32,13]
//         for(i=0;i<arr.length;i++)
//         {
//         for(j=0;j<3;j++)
//         {
//         if(arr[i]<arr[j])
//         {
//             x=arr[i]
//             arr[i]=arr[j]
//             arr[j]=x 
           
//         }
//     }
//     console.log(arr)   
//     }
   
//      }
//       }
//     }
//     x=printarray([1,2,5,6,4,7])
//     console.log(x.sorting())