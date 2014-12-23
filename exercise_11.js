
function CheckNumeric() {
}

CheckNumeric.prototype.checkInput = function() {
  var form = document.forms['form'];
  var input = form.number.value.trim();

  if (empty(input)) {
    alert('The Number field cannot be empty');
    return;
  }

  if (isNaN(input)) {
    form.result.value = 'False';
  } else {
    form.result.value = 'True';
    alert('Click OK and wait for 10 seconds for the form to submit.');
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

var matchNumber = new CheckNumeric;
