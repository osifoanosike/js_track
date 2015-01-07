
function Validation() {
}

Validation.prototype.checkValue = function(formName) {

  window,addEventListener('load', function() {

    var form = document.forms[formName];

    form.addEventListener('submit', function() {
      
      var message = []
      var i = 0;

      if (validator.empty(form.loginid.value)) {
        message[i++] = "Login Id can't be empty.";
      } 
      if (validator.empty(form.email.value)) {
        message[i++] = "Email can't be empty.";
      } 
      if (validator.empty(form.name.value)) {
        message[i++] = "Name can't be empty.";
      } 
      if (validator.empty(form.timezone.value)) {
        message[i++] = "Timezone can't be empty.";
      } 
      if (validator.empty(form.homepage.value)) {
        message[i++] = "Homepage can't be empty.";
      } 
      if (validator.empty(form.about.value)) {
        message[i++] = "About me can't be empty.";
      } 
      if (form.about.value.length < 50) {
        message[i++] = 'About me section must have at least 50 characters.';
      }

      if (message) {
        for (var i = 0; i < message.length; i++) {
          alert(message[i]);
        }
        event.preventDefault();
      }
    });


  });

}

/*    var checkInput = function() {

    }*/

var validation = new Validation();
validation.checkValue('form');
