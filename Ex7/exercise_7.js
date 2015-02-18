function Account() {
}

Account.prototype.init = function() {
  this.getName();
}

Account.prototype.getName = function() {
  do {
    var firstName = prompt('What is your first name');
  } while (validator.empty(firstName))
  do {
    var lastName = prompt('What is your last name');
  } while (validator.empty(lastName));
  this.displayName(firstName, lastName);
}

Account.prototype.displayName = function(firstName, lastName) {
  var name = 'Hello ' + firstName + ' ' + lastName + '.';
  alert(name);
  document.write('<strong>' + name + '</strong>');
}

window.addEventListener('load', function() {
  var owner = new Account();
  owner.init();
});
