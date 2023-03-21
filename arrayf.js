// //array
// function insertelement(arr){
//     for(i=0;i<4;i++){
//     console.log(arr[i])
// }
// }
// insertelement([1,2,3])

// //object
// function insertelement(obj){
//   if(typeof(obj)=='object')
//     for(key in obj){
//         console.log(key,obj[key])
       
//     }
//     else{
//         console.log(`typeof obj is not an object its type is ${typeof(obj)}`)
//}
// }
// insertelement({firstname:"jashan",rollnumber:23,address:"mohali"})
// // insertelement('string 123 rty')

//simple array
// let arr=["jashan","kaur"]
// {
//     console.log(arr)     
// }
//function in array
// function datatype(arr){
//     for(i=0;i<arr.length;i++){
//         console.log(`the element of${arr}is:${arr[i]}`)
//     }
// }
//   datatype(["j","a","s","h","a","n"])
  //function in object
//   function types(obj){
//     for(key in obj){
//         console.log(`the element of${obj}is:${obj[key]}`)
//     }
//   }
//   types({Name:"jashan",Lastname:"kaur",Love:"faimly"})

//nested function
// function getvalue(arr,obj){
//     for(i=0;i<arr.length;i++){
//         console.log(`${arr[i]}`)
//         function invalue(){
//             for(key in obj)
//             console.log(`${obj[key]}`)
//         }
//     }
//     invalue()
// }
// getvalue(["name","study","age"],{study:"12th",training:"javascript"})
 
//sort in arr
arr=["Mumbai","Mohali","Ludiana","China"]
for(i=0;i<4;i++){
    for(j=0;j<4;j++){
        if(arr[i]<arr[j]){
             x=arr[i]
            arr[i]=arr[j]
            arr[j]=x
        }
    }
    console.log(arr)
}
