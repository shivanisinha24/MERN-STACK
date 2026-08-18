function Dog(name, breed,age,weightkgs){
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.weightkgs = weightkgs;

  this.eat = function(){
    console.log("pedigre")
  };

  this.bark = function(){
    console.log("Woof!");
  };
}
const dogTheMarley = new Dog("Marley", "Pit", 3, 30);
console.log(dogTheMarley);