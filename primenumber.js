//prime number

for(i=2;i<17;i++){
    n=0
    
    for(j=2;j<i;j++)
    {
        if (i%j==0) 
          {  
            n=1
            break;  
          }    
    }
        if(i>1 & n==0){
           isprime=true
           console.log(i)
        }        
   
}
    console.log(typeof(i))

 

//reverse number
str="jashan"
str2=''
for(i=str.length-1;i>=0;i--){
    str2+=i
}
    console.log(str2)
    

