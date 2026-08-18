function Student(enrollment, name, email, phone,adress,course, year){
  this.enrollment = 234235435665876,
  this.name = name,
  this.email = email,
  this.phone = phone,
  this.adress = adress,

  this.updatename = function(newName){
    console.log(`Change this ${name} to ${newName}`);
  }

  this.updateemail = function(newEmail){
    console.log(`Change this ${email} to ${newEmail}`);
  }

  this.updatephone = function(newPhone){
    console.log(`Change this ${phone} to ${newPhone}`);
  };
  this.updateadress = function(newAdress){
    console.log(`Change this ${adress} to${newAdress}`);
  };

  this.updatecourse = function(newCourse){
    console.log(`Change this ${course} to ${newCourse}`);
  };

  this.updateyear =function(newYear){
    console.log(`Change this ${year} to ${newYear}`);
  };
}

const Thestudent = new Student(24030510509999,"Shivani","b098@",812855798888,"CSE",2026);
StudentDetails.UpdateName("Shivani");


