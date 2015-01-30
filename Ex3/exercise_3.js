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
      this.count++;
    } else {
      checkbox.checked = false;
      var checkedBoxes = document.querySelectorAll(this.className+':checked');
      this.composeMessage(checkedBoxes);
    }
  } else {
    this.count--;
  }
}

CheckLimit.prototype.uncheck = function() {
  var none = document.getElementById('none');
  var checkedBoxes = document.querySelectorAll(this.className+':checked');
  var len = checkedBoxes.length;
  for (i = 0; i < len; i++) {
    checkedBoxes[i].checked = false;
  }
  this.count = 0;
}

CheckLimit.prototype.composeMessage = function(checkedBoxes) {
  var message = 'Only ' + checkedBoxes.length + ' days can be selected. You have already selected ';
  for (var i = 0; i < checkedBoxes.length; i++) {
    if (i !== checkedBoxes.length - 1) {
      message += checkedBoxes[i].value + ', '
    } else {
      message += 'and ' + checkedBoxes[i].value + '.';
    }
  }
  alert(message);
}

var checkLimit = new CheckLimit('.days', 3);
