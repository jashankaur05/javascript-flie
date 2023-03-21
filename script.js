// //forloop
// for(i=0;i<=5;i++){
//     console.log(i)
//   }
// //forloop nested 
// for(i=0;i<=5;i++)
// {
//     for(j=0;j<=5;j++)
//     string=i*j
//     console.log(i*j)
// }
// x=10;
// string=''
// for(i=1;i<=x;i++)
// {
//     for(j=1;j<=x;j++){
    
//     string+=i*j
//     string+="\t"
   
//     console.log(string)
//     }
//     string+="\n"
// }
// string=''
// for(i=0;i<=5;i++)
//     {
//     for(j=0;j<=5;j++){
//         string+='*'
        
          
//  }
//  string+='\n'
// }
// console.log(string)

// //pattern
// n=5
// string=''
// for(i=0;i<n;i++){
//     for(j=0;j<n;j++){
//         if(i==0||i==n-1){
//             string+='*'
//         }
//         else{
//         if
//             (j==0||j==n-1){
//             string+='*'
//         }
//         else{
//             string+=' '
//         }
//         }    
             
//     }
//     string+='\n'
// }
// console.log(string)

// //tringle
// n='6'
// string=''
// for(i=0;i<n;i++){
//     for(j=0;j<n-i;j++){
//         string+=' '
//     }
//     for(k=0;k<i;k++){ 
//         string+='*'
//     }

//     string+='\n'
// }

// console.log(string)



// n='6'
// string=''
// for(i=0;i<n;i++){
//     for(j=0;j<n+i;j++){
//         string+=''
//     }
//     for(k=0;k<i;k++){ 
//         string+='*'
//     }

//     string+='\n'
// }

// console.log(string)
//downward pattern
// n=5
// string=''
// for(let i=0;i<=n;i++){
//     for(let j=0;j<n-i;j++){
//         string+=''
    
//     }
  
//     for(k=0;k<i;k++){
//      string+='*'
//     } 
//     string+='\n' 
// }
// console.log(string)

// n=5
// string=''
// for(i=1;i<=n;i++){
//    for(j=0;j<n-i;j++){
//     string+=' '
//    }
//    for(k=0;k<i;k++){
//     string+="*"
//    }
//    string+='\n'
// }
//   console.log(string)

//   let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   // printing star
//   for (let j = 0; j < n - i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//hollow triangle
// n=6
// string=''
// for(i=0;i<=n;i++){
 
//   for(j=0;j<i;j++){
//     if(i===n){
//    string+='*'
//     }
//     else{
//    if(j==0||j==i-1){
//       string+='*'
//     }
  
//     else{
//       string+=' '
//     }
//   }
// }
//  string+='\n'
// }
// console.log(string)


//pryaimd
n=5
string=''
for(i=1;i<n;i++){
  //printing space
  for(j=1;j<n-i;j++){
    string+=' '
  }
  //printing star
  for(k=0;k<2*i-1;k--){
    string+='*'
  }
  string+='\n'
}
console.log(string)