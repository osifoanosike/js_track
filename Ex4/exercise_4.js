function ChildrenCheck() {
}

ChildrenCheck.prototype.check = function(className) {
  var doc               = document;
  var parentSelector    = '.' + className;
  var childrenContainer = 'div.' + className;
  var childrenSelector  = 'div.' + className + ' input';

  var parentCheckbox  = doc.querySelector(parentSelector);
  var siblingDiv      = doc.querySelector(childrenContainer);
  var childCheckboxes = doc.querySelectorAll(childrenSelector);

  if (parentCheckbox.checked) {
    siblingDiv.style.display = 'block';
    this.markCheckBoxes(childCheckboxes, true);
    siblingDiv.scrollIntoView(true);
  } else {
    this.markCheckBoxes(childCheckboxes, false);
    siblingDiv.style.display = 'none';
  }
}

ChildrenCheck.prototype.markCheckBoxes = function(checkBoxes, checkStatus) {
  var count = checkBoxes.length;
  for (var i = 0; i < count; i++) {
    checkBoxes[i].checked = checkStatus;
  }
}

var checkChild = new ChildrenCheck();
