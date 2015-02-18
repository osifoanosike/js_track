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
  } while (validator.empty(lastName))

  var message = 'Hello ' + firstName + ' ' + lastName + '.';
  alert(message);
  document.write('<strong>' + message + '</strong>');
}

window.addEventListener('load', function() {
  var owner = new Account();
  owner.init();
});
