let age =18;
let license ='True';
if(age>=18){
  if(license){
    console.log("You can drive");
  }else{
    console.log("You are old enough but do not have a license");
  }
}else{
  if(license){
    console.log("You have a license but are underage");
  }else{
    console.log("You are underage and have no license")
  }
}
