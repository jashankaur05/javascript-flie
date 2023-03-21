// str="jashan"
// len= str.length
// msg="It is a palindrome"
// for(i=0;i<len/2;i++){
//     if(str[i]!==str[len-1-i]){
//     msg="It is not a palindrome"
//    }
// }
//    console.log(`${str}:${msg}`) 

function myself(){
str="jashan"
len= str.length
msg="It is a palindrome"
for(i=0;i<len/2;i++){
    if(str[i]!==str[len-1-i]){
    msg="It is not a palindrome"
   }
}
   console.log(`${str}:${msg}`)   
}
  myself('name')

    
  // myself=require('./function')
  //palindrome number in javascript
  function palindrome(number){
  str='dad'
  len=str.length
  msg="it is a palindrome "
  for(i=0;i<str.length;i++){
   if(str[i]!==str[len-1-i])
   msg='it is not a palindrome'     
  }
  console.log(`${str}:${msg}`)
}
palindrome('number') 