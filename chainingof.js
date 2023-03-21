// class method_chain{
//     constructor(){
//         this.firstname='jashan',
//         this.age=18
//         console.log(this.firstname.toUpperCase().length)
//         this.get=() => {console.log(this.firstname+' '+this.age)}
//     }

//     method1(){
//         console.log('this is a method 1');
//         return this;
//     }
//     method2(){
//         console.log('this is a method 2');
//         return this;
//     }
//     method3(){
//         console.log('this is a method 3');
//         return this;
//     }
// }
// a=new method_chain()

// .method1()
// .method2()
// console.log(a)

// //2
// class name1{
//     constructor(){
//         this.value=5
//     }
//         first(value){
//             console.log(this.value+value)
//             return this
//         }
        
//         last(value){
//             console.log(this.value+value)
//             return this
//         }
           
//     }
// j=new name1()
//  .first(10)
// .last(15)
// .value
// console.log(j)


//array in chaining

// food=[{name:'banana',type:'fruit'},
//       {name:'apple',type:'fruit'},
//      {name:'chocolate',type:'candy'},
//      {name:'orange',type:'fruit'},
// ]
// // food.map(x=>console.log(x))// use callback in map
// food.map(item=>console.log(item.type))
// .reduce((result,fruit)=>{result.push(fruit);return[...new Set(result)]},[]);

// //string  method chaining
// class strmethod{
//    name='jashan'
//    len(){
//       console.log(this.name.length)
//    }
//    upper(){
//       console.log(this.name.toUpperCase())
//       return this
//    }
//    replace(){
//       console.log(this.name.replace('jashan','jas'))
//       return this
//    }
// }
// str= new strmethod()
// // str.len()
// str.upper().replace().len()

// //array chaining method
//   class arr1{
//    arr=['1','2','3','4','5','6']
// len()
// {
// console.log(this.arr.length)
// }
// map()
// {
//    console.log(this.arr.map(n=>n*2))
//    return this
// }
// sort(){
//    console.log(this.arr.sort())
//    return this
// }
//   }
// str= new arr1()
// str.map().sort().len()
arr=[1,2,3,4]

str=arr.map(item=>{return (item*2)})

console.log(str)