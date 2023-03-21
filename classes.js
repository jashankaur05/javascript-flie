// //class  object
// class user{
//     constructor(a,b,c){
//    this.firstName=a,//global 
//     this.lastName=b,
//     this.age=c,
//     this.fullname=()=>{console.log(this.firstName+' '+this.lastName) }
    
// }

// }
// j=new user('jashan','kaur',18)
// console.log(j)
// console.log(j.fullname())

// //2
// class house{
//     constructor(){
//         this.floor=2,
//         this.enterdoors=2,
//         this.windows=4,
//         this.fullinformation=()=>{console.log(this.floor+' '+this.enterdoors+' '+this.windows)}

        
//     }
// }
// a= new house(2,2,4)
// console.log(a)
// console.log(a.fullinformation())

// class name{
//     constructor(){
//         this.fullname='jashan'
//         this.lastname='kaur'
//         this.fulln=()=>{console.log(this.fullname+' '+this.lastname)}

//     }

// }
// s=new name()
// console.log(s)
// console.log(s.fulln())

//use class in function
// class print{
//     constructor(){
//      this.name='name'
//      this.age=12
// }
//     greet(){    
//         return this.age   
//     //  console.log(`hello ${this.name}`)
//     }
// }

// h=new print('jashan')
// console.log(h)
// console.log(h.name)
// console.log(h.greet())


//array method use
stuname=['prabh','simran','harpreet']
name1=[]
// name1.push(stuname)
name1=[...stuname]
console.log(name1)
