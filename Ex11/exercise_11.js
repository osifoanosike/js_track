
function CheckNumeric() {
}

CheckNumeric.prototype.checkInput = function(formName) {
  var form = document.forms[formName];
  var input = form.number.value.trim();

  if (empty(input)) {
    alert('The Number field cannot be empty.');
    return;
  }

  if (isNaN(input)) {
    form.result.value = 'False';
    alert('False! The input is not a number.')
  } else {
    form.result.value = 'True';
    alert('True. The input is a number.\n\nClick OK and wait for 10 seconds for the form to submit.');
    setTimeout(function(){form.submit()},10000);
  }
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

var matchNumber = new CheckNumeric();
