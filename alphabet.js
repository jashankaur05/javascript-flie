// let n=5
// let string=''
// for(let i=1;i<=n;i++){
//     for(let j=0;j<i;j++){
//         string+=String.fromCharCode(j+65)
//     }
//     string+='\n'
// }
// console.log(string)

//2
//  var x=5
//  var string=''
//  for(i=0;i<=x;i++){
//     for(j=0;j<x-i;j++){
//         string+=String.fromCharCode((i-1)+65)
//     }
//     string+='\n'
//  }
//  console.log(string)

//3
// var y=5
// var string=''
// for(i=1;i<=y;i++){
//    for(j=0;j<y;j++){
//        string+=String.fromCharCode((i-1)+65)
//    }
//    string+='\n'
// }
// console.log(string)

//down alphabet pattern
// var y=5
// var string=''
// for(i=1;i<=y;i++){
//    for(j=0;j<y-i+1;j++){
//        string+=String.fromCharCode(j+65)
//    }
//    string+='\n'
// }
// console.log(string)

//count
// z=5 
// count=0
// string=''
// for(i=1;i<=z;i++){
//     for(j=0;j<i;j++){
//     string+=String.fromCharCode(count+65)
//     count++
//     }
//     string+='\n'
// }
// console.log(string)

//2
// z=5 
// string=''
// for(i=1;i<=z;i++){
//     for(j=0;j<i;j++){
//     string+=String.fromCharCode((i-1)+65)

//     }
//     string+='\n'
// }
// console.log(string)

//3
// z=5 
// string=''
// for(i=1;i<=z;i++){
//     for(j=0;j<z-i;j++){
//     string+=String.fromCharCode(j+65)
    
//     }
//     string+='\n'
// }
// console.log(string)

//3
// z=5 
// string=''
// for(i=1;i<=z;i++){
//     for(j=0;j<z-i;j++){
//     string+=String.fromCharCode((z-i-j) + 65)
    
//     }
//     string+='\n'
// }
// console.log(string)

//4
// a=7
// string=''
// for(i=1;i<=a;i++){
//     for(j=0;j<a-i;j++){
//         string+=' '
//     }
//     for(k=0;k<2*i-1;k++){
//         string+=String.fromCharCode(k+65)
//     }
//     string+='\n'
// }
// console.log(string)

const person = {
    name: 'John',
    age: 30,
    isStudent: true,
    hobbies: ['reading', 'traveling'],
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };
  
  

  parsed = JSON.parse(person);

  console.log(parsed); // {name: "John", age: 30, isStudent: true, hobbies: Array(2), address: {…}}
  console.log(parsed.name); // "John"
  console.log(parsed.hobbies[0]); // "reading"
  console.log(parsed.address.city); 
  