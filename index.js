// console.log("Hello World!");

// class based lang -> OOPs -> class and object -> class ()
// Prototype based lang -> JS -> Object (Object -> object)

//  class -> blueprint of object -> single instance of class ic called as object

// class Car {
//     color,
//     brand,
//     type,
//     startFunc
// } => {
//     color: 'black',
//     brand: "bmw",
//     type: 'petrol',
//     startFunc: console.
// }

// {
//     color: 'red',
//     brand: "maruti",
//     type: 'petrol',
//     startFunc: console.
// }

// {
//     color: 'black'
//     brand: 'Suzuki'
//     type: 'petrol',
//    start: () => {console.log('Start')}
// }

// Object -> object

// class -> (blueprint) -> object

// Whats already in javascript -> slowly we will shift to class syntax -> both are same

// function Car (color, model, type) {
//     this.color = color;
//     this.model2 = model;
//     this.type = type;
//     this.start = function () {
//       console.log("Car Start");
//     };
// }

// {

// }

// function Bike(color, model, type) {
//     return {
//       color: color,
//       model,
//       type
//     };
// }

function Circle(radius, x, y) {
  this.radius = radius;
  this.location = {
    x: x,
    y: y,
  };
  this.draw = function () {
    console.log(this.location);
  };
  this.move = function (nextX, nextY) {
    this.location = {
      x: nextX,
      y: nextY,
    };
  };
}

// 200 -> {
//     radius: 5
// }
// this -> 200
// return 200's obj

// 3 things
// First -> {} empty
// Second -> `this` keyword to refer to newly created empty object
// Third -> return

const circleObj = new Circle(10, 0, 0);

// {
//     radius: 10,
//     location: {
//         x: 0,
//         y: 0
//     },
//     draw: fn(),
//     move: fn(nextX, nextY),
// }

// for (let index = 0; index <= 10; index++) {
//   circleObj.move(index, index);
//   circleObj.draw();
// }

const person = {
  name: "Alok",
  class: "B.Tech",
  run: function () {
    console.log(this);
    console.log(this.name);
    function test() {
      console.log("this -> test", this);
    }
    test();
  },
};
// person.run();

// function hello() {
//   console.log(this);
// }
// window.hello();

function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];
  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };
  this.printFriendList = function () {
    this.friendList.forEach((friend) => {
      console.log("friend", friend);
    });
  };
  this.findMutual = function (obj) {
    const mutualFrnd = obj.friendList.filter((name) =>
      this.friendList.includes(name)
    );

    console.log("mutualFrnd", mutualFrnd);
  };
}

const vivek = new User("Vivek Kumar");
vivek.addFriend("Harish");
vivek.addFriend("Radhe");
vivek.addFriend("Ajay");

// vivek.printFriendList();

// console.log("------------");

const varun = new User("Varun");
varun.addFriend("Rohan");
varun.addFriend("Vatsal");
varun.addFriend("Radhe");
varun.addFriend("Harish");

// varun.printFriendList();

// vivek.findMutual(varun); // Radhe, Harish

// const student = {
//   fullName: "Alok Raj",
//   greet: function () {
//     console.log(this);
//     console.log("Hello " + this.fullName);
//   },
// };
// // this => object => to what object? => Ans: Who has executed
// // student.greet();

// function executor(callback) {
//   callback();
// }

// const randomObj = {
//   name: "Crio",
//   fullName: "CrioDo",
//   comp: "JLL",
// };

// const greetFn = student.greet.bind(randomObj);

// executor(greetFn);

const timer = {
  currentTime: 0,
  showTime: function () {
    console.log("from here", this.currentTime);
  },
  addTen: function () {
    console.log(this);
    this.currentTime += 10;
    this.showTime();
  },
};

timer.addTen();

// setTimeout(timer.addTen.bind(timer), 2000); // call and apply
// setTimeout(function () {
//   console.log(this);
//   this.currentTime += 10;
//   this.showTime();
// }, 2000);

function Car(color, model, type) {
  this.color = color;
  this.model = model;
  this.type = type;
  this.start = function () {
    console.log("Car Start");
  };
}

const carObj = new Car("black", "BMW", "petrol");
console.log(carObj);

class CarClass {
  constructor(color, model, type) {
    this.color = color;
    this.model = model;
    this.type = type;
  }

  start() {
    console.log("Car Start");
  }
}

const carObjFromClass = new CarClass("red", "Audi", "diesel");
console.log(carObjFromClass);

const obj = {};
