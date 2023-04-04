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
// const count=true;
//  let countvalue= new Promise(function a(callback){
//     console.log(`${count}`)
//     callback()
// })

// //promise 1
//  const count=false;
// let countvalue= new Promise(function(resolve,reject){
//      resolve(`there is a countvalue',${count}`),
//     reject(' there is a not countvalue')
// })

//     // console.log(countvalue)
//     countvalue.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
    
// // //function 
// function getUsers(){
//     return [{username:'john',email:'john@gmail.com'},
//            {username:'jas',email:'jas@gmail.com'}]         
// }
// function findUser(username){
//           const users= getUsers();  
//           const user=users.find((user)=>user.username===username);         
//           return user;                      
// }
// console.log(findUser('john'))

function getUsers(){
    let Users=[];
    setTimeout(()=>{
       Users=[{username:'john',email:'john@gmail.com'},
             {username:'jas',email:'jas@gmail.com'}]
             ;},1000);
             return Users;
    }  
    function findUser(username){
        const users= getUsers(); 
        console.log(users) 
        const user=users.find((user)=>user.username===username);         
        return user;     
               
}
 console.log(findUser('john'))
 console.log(getUsers('john'))

//function solve  use  callback
// function getUsers(callback){
//     let Users=[];
//     setTimeout(()=>{
//         Users=[{username:'john',email:'john@gmail.com'},
//              {username:'jas',email:'jas@gmail.com'}]
//              callback(Users)
//              ;},1000);

//              return Users;
//     }  
//     function findUser(username){
//          getUsers((users)=>{
//           const user=users.find((user)=>
//             user.username===username)
//             console.log(user); 
//          });               
// }
//  findUser('john')
//  findUser('jas')


//promise 2
//  let count=0
//   let countvalue=new Promise(function(resolve,reject){
//   resolve(`the count value increase ${count++}`)
//  })
//  //console.log(countvalue)
// countvalue.then((value)=>{console.log(value)})

//use callback function order of excution maintain

// function getUsers(callback){
//   let Users=[];
//   setTimeout(()=>{
//       Users=[{username:'john',email:'john@gmail.com'},
//            {username:'jas',email:'jas@gmail.com'}]
//            callback(Users)
//            ;},1000);

//            return Users;
//   }  
//   function findUser(){
//        getUsers((users)=>{
//         for(let i=0;i<users.length;i++){
//           console.log(users[i]) 
//         }
        
//        });               
// }
// findUser()

function get(callback){
 let Users=[]
  setTimeout(()=>{
   let  Users=[{username:'jashan',email:'jashan@gmail.com'},
          { username:'prabh',email:'prabh@gmail.com'}] 
           callback(Users);},1000);
      return Users;
}
function find(username){
  get((user)=>{
 let users=user.find((user)=>user.username===username)
    console.log(users) ;
  })
}
 find('jashan')
// get((user)=>{
//   let users=user.find((users)=>users.username===users.username)
//   console.log(users)
// })