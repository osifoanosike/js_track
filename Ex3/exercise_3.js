
function CheckLimit(limit) {
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

      checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');

      var message = 'Only ' + this.limit + ' days can be selected. You have already selected '
                      + checkedBoxes[0].value + ', ' + checkedBoxes[1].value + ' and ' + checkedBoxes[2].value + '.';
      alert(message);
    }
  } else {
    this.count--;
  };
};

CheckLimit.prototype.uncheck = function() {
  
  var none = document.getElementById('none');

  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  var len = checkedBoxes.length;
  for (i = 0; i < len; i++) {
    checkedBoxes[i].checked = false;
  }

  this.count = 0;
};

var checkLimit = new CheckLimit('days', 3);
