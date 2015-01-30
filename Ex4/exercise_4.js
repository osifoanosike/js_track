function ChildrenCheck() {
}

ChildrenCheck.prototype.check = function(className) {
  var parentSelector = '.' + className;
  var childrenContainer = 'div.' + className;
  var childrenSelector = 'div.' + className + ' input';

  var parentCheckbox = document.querySelector(parentSelector);
  var siblingDiv = document.querySelector(childrenContainer);
  var childCheckboxes = document.querySelectorAll(childrenSelector);

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
