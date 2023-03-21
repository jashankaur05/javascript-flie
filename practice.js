// n=5
// string=''
// for(i=0;i<=n;i++){
//     for(j=0;j<=n-i-1;j++){
//         string+='*'
//     }
//     for(k=0;k<i;k++){
//         string+=' '
//     }
//     string+='\n'
// }
// console.log(string)

//dymaid
// n=5
// string=''
// for(i=0;i<n;i++){
//     for(j=0;j<n-i;j++){
//         string+=' '
//     }
//     for(k=0;k<2*i-1;k++){
//         string+='*'
//     }
//     string+='\n'
// }
// for(i=1;i<=n-1;i++){
//     string+='*'

// for(j=0;j<i;j++){
//     string+=' '
// }
// for(k=(n-i)*2-1;k>0;k--)
// {
//     string+='*'
// }
// string+='\n'
// }
// console.log(string)

//palindrome
// function palindrome(number){
//     str='mom'
//     len=str.length
//     msg='it is a palindrome'
//     for(i=0;i<str.length;i++){
//         if(str[i]!==str[len-1-i]){
//             msg='it is a not palindrome'
            
//         }
//     }
//     console.log(`${str}:${msg}`)
// }
// palindrome('number')

//function sum
// function sum(a,b){
//     console.log(a*b)
// }
// sum(2,3)
// sum(18,25)

//nested function
// function getvalue(arr,obj){
//     for(i=0;i<arr.length;i++){
//         console.log(`the element of is:${arr[i]}`)
//     }
//     function invalue(){
//         for(key in obj){
//             console.log(`the element of is:${obj[key]}`)
//         }
//     }
//     invalue()
// }
// getvalue(['j','a','s','h','a','n'],{firstName:'jashan',lastName:'Brar',training:'js'})

// //return in function
// function inreturn(arr){
//   // sum
//   num=1
//   for(i=0;i<arr.length;i++){
//   num=num+arr[1]
//   return 5
//   }

// } 
// arr=[1,2,4,5,7]
// a=inreturn
// b=a/55
// console.log(a)
// console.log(b)

// //callback
// function callback(x,y){
//   y()
//   x
//   console.log(x)
// }
//   callback(40,value)

//   function value(){
//     console.log('Hi everyone')
//   }

// //callback time
// function getvalue(a,b){
//    // b()
//     a
//     setTimeout(b,3000)
//     console.log(a)
// }
// getvalue('jashan',invalue)
// function invalue(){
//     console.log('wait')
// }

//arrow
 //1.
 // a=()=>console.log('Hello')
// a()
//2.
// b=x=>console.log(x)
// b('Hello')
//3.
// age=40
// distance=age<50?
// ()=>console.log('baby'):
// ()=>console.log('adult')
// distance()

// obj={
//     name:'jashan',
//     training:'js',
//     invalue:()=>console.log('information')
// }
// console.log(obj['invalue']())
// console.log(obj.name)
// obj.invalue()
// console.log(obj)

//book practice
const obj = {
    first: 'Jane', // property
    last: 'Doe', // property
    getFullName() { // property (method)
    return this.first + ' ' + this.last;
    },
    };  
   console.log(obj. getFullName())