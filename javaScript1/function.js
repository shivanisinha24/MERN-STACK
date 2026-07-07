function greet(name){
  return `Hello $(name)`;
}

function execute(fn,name){
  return fn(name);
}

let v =excute(greet,"abc");
console.log(v);

function fn(a,b,add){
  return add(a,b);
}

function add(a,b){
  return a+b;
}

let sum =add(2,3);
console.log(sum);