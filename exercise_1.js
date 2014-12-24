
function User(name, age) {
  this.name = name;
  this.age = Number(age);
}

// This method takes the object of the class User as a parameter.

User.prototype.compare = function (user) {
  if (this.age > user.age) {2
    result = this.name + " is older than " + user.name + ".";
  } else if (this.age < user.age) {
    result = user.name + " is older than " + this.name + ".";
  } else {
    //This is the result if both users are of the same age.
    result = this.name + " and " + user.name + " are age mates.";
  }

  return result;
}

var user1 = new User('0luwasegun', '0026');
var user2 = new User('4bhishek', '25');
var user3 = new User('John', '26');

var result1 = user1.compare(user2);
var result2 = user2.compare(user1);
var result3 = user1.compare(user3);
var result4 = user3.compare(user1);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
