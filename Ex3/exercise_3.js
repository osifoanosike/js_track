
function CheckLimit(className, limit) {
  this.className = className;
  this.limit  = limit;
  this.count = 0;
}

CheckLimit.prototype.check = function(id) {
  
  var none = document.getElementById('none');
  none.checked = false;
  var checkbox = document.getElementById(id);

  if (checkbox.checked) {
    if (this.count < this.limit) {
      this.count++
    } else {
      checkbox.checked = false;
      var className = '.' + this.className;

      var checkboxes = document.querySelectorAll(className);
      var checkedValue = [];
      var len = checkboxes.length;
      var and = len - 1;
      
      for (var i = 0; i < len; i++) {
        if (checkboxes[i].checked) {
          checkedValue.push(checkboxes[i].value);
        }
      }

      var message = 'Only ' + this.limit + ' days can be selected. You have already selected '
                      + checkedValue[0] + ', ' + checkedValue[1] + ' and ' + checkedValue[2] + '.';
      alert(message);
    }
  } else {
    this.count--
  }
};

CheckLimit.prototype.uncheck = function() {
  
  var none = document.getElementById('none');
  var className = '.' + this.className;

  var checkboxes = document.querySelectorAll(className);
  var len = checkboxes.length;
  for (i = 0; i < len; i++) {
    checkboxes[i].checked = false;
  }

  this.count = 0;
};

var checkLimit = new CheckLimit('days', 3);
