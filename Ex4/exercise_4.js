function ChildrenCheck() {
}

ChildrenCheck.prototype.init = function() {
  var that = this;
  var main = document.getElementById('main');
  main.addEventListener('click', function(event) {
    var parent = event.target;
    if (parent.className = 'parent') {
      that.check(parent);
    }
  });
}

ChildrenCheck.prototype.check = function(parent) {
  var doc                        = document;
  var childrenContainerClassName = parent.id;
  var childrenContainer          = 'div.' + childrenContainerClassName;
  var childrenSelector           = 'div.' + childrenContainerClassName + ' input';
  var siblingDiv                 = doc.querySelector(childrenContainer);
  var childCheckboxes            = doc.querySelectorAll(childrenSelector);

  if (parent.checked) {
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

window.addEventListener('load', function() {
  var checkChild = new ChildrenCheck();
  checkChild.init();
})
