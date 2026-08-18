// // declarative functions
// function sub(){
//   let a =11;
//   let b = 2;
//   console.log(a-b);
// }
// sub();

// function add(a,b){
//   console.log("sum:" ,a+b);
// }
// add(2,88);

// // Expresion 
// let s =function add(a,b){
//   return a+b; 
// }
// console.log(s(2,55))
// const Detail ={
//   name:"shivani"
// }
// Detail.name ="Shaswat";
// console.log(Detail)
// // 

// function name(msg){
//   return msg;
// }
// function Hello(name){
//   console.log(name);
// }
// Hello(name("msg"));
// higher order function
function Student(name){
  return function Enrollment(roll_no){
    return roll_no;
  }
} 
let ans = Student("Shivani");
console.log(ans(32));
