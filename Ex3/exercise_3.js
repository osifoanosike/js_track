function CheckLimit(className, limit) {
  this.className = className;
  this.limit     = limit;
  this.count     = 0;
}

CheckLimit.prototype.check = function(id) {
  var doc      = document;
  var none     = doc.getElementById('none');
  none.checked = false;
  var checkbox = doc.getElementById(id);

  if (checkbox.checked) {
    if (this.count < this.limit) {
      this.count++;
    } else {
      checkbox.checked = false;
      var checkedBoxes = doc.querySelectorAll(this.className+':checked');
      this.composeMessage(checkedBoxes);
    }
  } else {
    this.count--;
  }
}

CheckLimit.prototype.uncheck = function() {
  var doc          = document;
  var none         = doc.getElementById('none');
  var checkedBoxes = doc.querySelectorAll(this.className+':checked');
  var len          = checkedBoxes.length;
  for (i = 0; i < len; i++) {
    checkedBoxes[i].checked = false;
  }
  this.count = 0;
}

CheckLimit.prototype.composeMessage = function(checkedBoxes) {
  var numberOfCheckedBoxes = checkedBoxes.length;
  var message              = 'Only ' + numberOfCheckedBoxes + ' days can be selected. You have already selected ';
  for (var i = 0; i < numberOfCheckedBoxes; i++) {
    if (i !== numberOfCheckedBoxes - 1) {
      message += checkedBoxes[i].value + ', ';
    } else {
      message += 'and ' + checkedBoxes[i].value + '.';
    }
  }
  alert(message);
}

var checkLimit = new CheckLimit('.days', 3);
