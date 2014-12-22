
function Account() {
  
}

Account.prototype.getName = function() {
  do {
    var firstName = prompt('What is your first name');
  } while (empty(firstName))

  do {
    var lastName = prompt('What is your last name');
  } while (empty(lastName))

  var message = 'Hello ' + firstName + ' ' + lastName + '.';

  alert(message);

  document.write('<strong>' + message + '</strong>');
}

function empty(value) {
  if (value !== null) {
    value = value.trim();
  }

  if (!value) {
    return true;
  } else {
    return false;
  }
}

var owner = new Account();
