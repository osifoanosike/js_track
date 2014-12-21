
function empty(value) {
  if (value == "") {
    return true;
  } else {
    return false;
  }
}

function validate(formName) {

  var form = document.forms[formName];

  if (empty(form.loginid.value)) {
    message = "Login Id can't be empty";
  } else if (empty(form.email.value)) {
    message = "Email can't be empty";
  } else if (empty(form.name.value)) {
    message = "Name can't be empty";
  } else if (empty(form.timezone.value)) {
    message = "Timezone can't be empty";
  } else if (empty(form.homepage.value)) {
    message = "Homepage can't be empty";
  } else if (empty(form.about.value)) {
    message = "About me can't be empty";
  } else if (form.about.value.length < 50) {
    message = "About me section must have at least 50 characters";
  } else {
    message = '';
  }

  if (message) {
    alert(message);
    event.preventDefault();
  }
}
