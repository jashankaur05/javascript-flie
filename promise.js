//1
// function prom(complete){
//     return new Promise(function(resolve,reject){
//          console.log('your page is loading');
//         setTimeout(()=>{
//             if(complete){
//                 resolve('true')
//             }else{
//                 reject('false')
//             }
//         },2000)
//     });
// }
// let onfullfiled=(result)=>{
//     console.log(result);
// }
//  let onrejection=(error)=>{
//     console.log(error);
//  }
//    prom(true).then(onfullfiled).catch(onrejection);

//2

// function prom(a,b){
//     return new Promise(function(resolve,reject){
//          console.log('your page is loading');
//        let c=a/b;
//         setTimeout(()=>{
//             if(a,b){
//                 resolve(`your answer:${c}`)
//             }else{
//                 reject('false')
//             }
//         },2000)
//     });
// }
//    prom(7,5).then((result)=>{
//    console.log(result)})
//    .catch((error)=>{
//    console.log(error);
// });

//3
// function prom(){
//         return new Promise(function(resolve,reject){
//              console.log('your page is loading');
           
//             setTimeout(()=>{
//               $.get(,function(data){
//                 resolve(data);
//               })
//         }).fail(err=>{
//             reject('fail your code')
//         })
//         }
//        )}

//        prom().then((result)=>{
//        console.log(result)})
//        .catch((error)=>{
//        console.log(error);
//     })

//4