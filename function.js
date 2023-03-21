

//funtion sum
// function add(x,y){
    
//     console.log(x+y)
// }
// //called functions
// add(4,5)
// add(10,3)
 
// function sum(a,b){
//    console.log(a*b)
// }
// sum(32,-45)
// sum(20,10)

//function scope
// function scope(){
//     num1=23
//     num2=20
  
//     function add(){
//        console.log=(num1*num2)
//     }
//    add()
// }
// scope()

// //nested function
// function firstfunction(arr,obj){
//     for(i=0;i<arr.length;i++){
//        console.log(`the element of${[arr]} is:${arr[i]}`)
//     }
//     function secoundfunction(){
//      for(key in obj){
//      console.log(`the element of${obj} is:${obj[key]}`)
//      }
//     }
//     secoundfunction()
// }


// firstfunction([1,3,2,4,5],{name:'jashan',lastname:'kaur'})

// function printvalue(arr,obj){
//   for(i=0;i<arr.length;i++){
//   console.log(`the element of${[arr]}is:${arr[i]}`)
//     }
//    function getvalue(){ 
//       for(key in obj){
//         console.log(`the element of${obj}is:${obj[key]}`)
//       }
//   }
//   getvalue()
// }
// printvalue(['j','a','s','h','a','n'],{name:'jashan',training:'javascript'})

//2 nested function

//    function getvalue(arr){
//   sum=0;
//   for(i=0;i<arr.length;i++){
//   sum=sum + arr[i]
//   return 8
//   }

// }
//  arr=[1,2,3,4,5]
//  y=getvalue(arr)
//  x=y*5
//  console.log(y)
//  console.log(x)

//export and import for use this
//this function

// function thislean(){
//     let x=23;
//     return this.x
// }
// console.log(thislean())
// console.log(this)

//this is a globel
function thislean(){
    this.x=23;
   function inner(){
    this.y=56
    return this.y
  
   }
   inner()
}

console.log(thislean())

// class dog{
//     name='jas'
//     is=null
//     log(){console.log(this)}
//     bark()
//     {this.is='woffing'
//     this.log()
//      return this
// }
// walk(){
//     this.is='walking'
//     this.log()
//     return this
// }
// }
//  dog=new dog()
//  dog.log()
// // dog.walk().bark()
