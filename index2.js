// const obj ={}
// constructor fn
// class
// Object class

// class Object {
//   constructor() {}

//   entries(object) {
//     // console.log("Car Start");
//   }
//   keys(object) {
//     // console.log("Car Start");
//   }
// }
// const obj = new Object();

// const obj1 = {};

const student = {
  name: "Alok Raj",
  roll: 7,
  subject: "CSE",
  about: () => {
    console.log("I Love JS");
  },
  favColor: "black",
  address: {
    state: "Bihar",
    country: "IN",
  },
};

// console.log(Object.entries(student));
// console.log(Object.keys(student));
// console.log(Object.values(student));
// student => 303, temp => 303

const tempObj = student;
const tempObj2 = { ...student };
const tempObj3 = {};
Object.assign(tempObj3, student);

student.name = "CrioDo";
student.address.state = "KA";

// console.log(student);
// console.log(tempObj);
// console.log(tempObj2);
// console.log(tempObj3);

// ? How can I create a perfect deep copy of an object?

const employeeData = {
  John: 100,
  Pete: 500,
  Mary: 250,
};

class Util {
  constructor(employeeData) {
    this.data = employeeData;
  }

  sumSalaries() {
    const valArr = Object.values(this.data);
    // [100, 300, 250]
    return valArr.reduce((a, b) => a + b, 0);
  }

  averageSalaries() {
    const sum = this.sumSalaries();
    const numberOfEmployee = Object.keys(this.data).length;
    return Math.round(sum / numberOfEmployee);
  }

  findSalaryRange() {
    const salaryArr = Object.values(this.data);

    return Math.max(...salaryArr) - Math.min(...salaryArr);
  }
}

const util = new Util(employeeData);

// console.log(util);
// console.log(util.data);
// console.log(util.sumSalaries());
// console.log(util.averageSalaries());
// console.log(util.findSalaryRange());

// School -> Student -> SportsCaptain
// Parent/Base Class
class Student {
  constructor(name, roll) {
    this.fullName = name;
    this.roll = roll;
  }

  markAttendance() {
    console.log(this.fullName, "is present");
  }
}

// class SportsCaptain {
//   constructor(name, roll) {
//     this.fullName = name;
//     this.roll = roll;
//   }

//   markAttendance() {
//     console.log(this.fullName, "is present");
//   }

//   playFootball() {
//     console.log('Play football')
//   }
// }

// Child class/Derived class
class SportsCaptain extends Student {
  playFootball() {
    console.log(this.markAttendance());
    console.log("Play football");
  }
}

const stu = new Student("Abc", 10);
// console.log(stu);

const s1 = new SportsCaptain("Xyz", 7);
// s1.playFootball();

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  markPresent() {
    console.log(this.name, "is present");
  }

  getRole() {
    console.log("Employee of office");
  }
}

class Developer extends Employee {
  constructor(prefLang, ...rest) {
    super(...rest);
    this.prefLang = prefLang;
  }
  submitCode() {
    console.log("Code Submitted by", this.name, "from", this.department);
  }
  getRole() {
    console.log("Works with ", this.prefLang);
  }
}

const rajesh = new Employee("Rajesh", "Design");
const alok = new Developer("JS", "Alok", "IT");
rajesh.getRole();
alok.getRole();
// alok.submitCode();

class BasicCreditCard {
  constructor(name, expiryDate) {
    this.name = name;
    this.expiryDate = expiryDate;
  }

  discountOffered() {
    console.log("1% reward point");
  }

  flipKartOffer() {
    console.log("2% cashback point");
  }
}

class SpecialCreditCard extends BasicCreditCard {
  constructor(brandName, ...parentConstructor) {
    super(...parentConstructor);
    this.brandName = brandName;
  }

  discountOffered() {
    super.discountOffered();
    // super.flipKartOffer();
    console.log("3% reward point");
  }
}

const cred = new SpecialCreditCard("Swiggy", "HDFC", "29-04-2026");
// console.log(cred);
// console.log(cred.discountOffered());

// function sum(a, ...xyz) {
//   console.log(a);
//   console.log(xyz);
// }

// sum(1, 2, 3, 4, 5);
