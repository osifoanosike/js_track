
function User(name, age) {
    this.name = name;
    this.age = age;
}


// This method takes the object of the class User as a parameter.

User.prototype.compare = function (user) {
    if (this.age > user.age) {
        return this.name + " is older than " + user.name + ".";
    }

    if (this.age < user.age) {
        return user.name + " is older than " + this.name + ".";
    }

    return this.name + " and " + user.name + " are age mates.";
};

var user1 = new User('0luwasegun', 26);
var user2 = new User('4bhishek', 25);

var result1 = user1.compare(user2);
var result2 = user2.compare(user1);

console.log(result1);
console.log(result2);