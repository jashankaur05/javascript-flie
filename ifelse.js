// x=15
// y=20
// if(x<=15||y>=25){
//     console.log('it is condition true')
// }
// else{
//     console.log('it is a condition false' )
// }
//else if 
const time=new Date().getHours()
let day;
if(time<10){
    day="Good morning"
}
else if(time<14){
   day="Good afternoon"
}
else {
    day="Good evening"
}
console.log(day)