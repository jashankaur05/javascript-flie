//traingle
// n=5
// string=''
// for(i=0;i<n;i++){
//     for(j=0;j<i;j++){
//         string+='*'
//     }
//     for(k=0;k<n-i;k++){
//         string+=' '
//     }
//     string+='\n'
// }
// console.log(string)

//left triangle
// n=5
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

//down right triangle
// n=5
// string=''
// for(i=0;i<=n;i++){
//     for(j=0;j<n-i;j++){
//         string+='*'
//     }
//     for(k=0;k<i;k++){
//         string+=' '
//     }
//     string+='\n'
// }
// console.log(string)
//down left triangle
// n=5
// string=''
// for(i=0;i<=n;i++){
//    for(j=0;j<i;j++){
//     string+=' '

//    }
//    for(k=0;k<n-i;k++){
//     string+='*'
//    }
//    string+='\n'
// }
// console.log(string)

//center triangle
n=5
string=''
for(i=0;i<n;i++){
    for(j=0;j<n-i;j++){
        string+='*'
    }
    for(k=0;k<2*i-1;k++)
    {
        string+=' '
    }
    string+='\n'
}
console.log(string)