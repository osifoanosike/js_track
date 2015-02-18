function ToggleCheck(className) {
  this.className = className;
}

ToggleCheck.prototype.init = function() {
  var that = this;
  var doc  = document;
  var all  = doc.getElementById('all');
  var none = doc.getElementById('none');
  all.addEventListener('click', function() {
    that.check(true);
  });
  none.addEventListener('click', function() {
    that.check(false);
  });
}

ToggleCheck.prototype.check = function(checkStatus) {
  var checkboxes = document.getElementsByClassName(this.className);
  for (i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = checkStatus;
  }
}

window.addEventListener('load', function() {
  var toggle = new ToggleCheck('colors');
  toggle.init();
});
