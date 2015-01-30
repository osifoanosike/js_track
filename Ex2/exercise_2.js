function ToggleCheck(className) {
  this.className = className;
}

ToggleCheck.prototype.check = function(checkStatus) {
  var checkboxes = document.getElementsByClassName(this.className);
  for (i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = checkStatus;
  }
}

var toggle = new ToggleCheck('colors');
