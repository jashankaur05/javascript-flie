function callback(demo,x)
{
 x()
    demo
    // setTimeout(x,3000)
    console.log(demo)
}
callback(20,greet)

 function greet(){

    console.log('hello everyone')
    
 }

//callback 
// function java(a,b){

// sum=a+b
// setTimeout=(b,2000)
// console.log(b)

//}
// java(12,25,script)
// function script(){
//     console.log('hello world')
// }
// console.log(java)
// java(12,25,script)

//4
// function printelement(x){
// return x
// }
// function getelement(x,z){
// y=x(z)
// console.log(y)
// for(i=0;i<y.length;i++){
//     console.log(y[i])
// }
// }
// getelement(printelement,[1,2,3,4,5])
//practice
// function firstvalue(a){
//     return a
// }
// function nextvalue(a,c){
// b=a(c)
// for(i=0;i<b.length;i++){
//     console.log(b[i])
// }
// }
// nextvalue(firstvalue,['jahan','preet','kaur'])

// function first(d){
//     return d
// }
// function secound(d,c){
//     a=d(c)
//     for(i=0;i<a.length;i++)
       
//   {if(a[i]%2==0){
//     console.log(`${a[i]} even number`)
//   }
// else{
//     console.log(`${a[i]} odd number`)
// }
//   }
// }

// secound(first,[1,2,3,4,5,6,7,20,11])