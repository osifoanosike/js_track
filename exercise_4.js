
function ChildrenCheck() {
}

ChildrenCheck.prototype.check = function(className) {

  var parentSelector = '.' + className;
  var childrenSelector = 'div.' + className;

  var parentCheckbox = document.querySelector(parentSelector);
  var siblingDiv = document.querySelector(childrenSelector);

  siblingDiv.style.display = "block";
  siblingDiv.scrollIntoView(true);
  var childCheckbox = siblingDiv.childNodes

  for (var i = 0; i < childCheckbox.length; i++) {
    if (childCheckbox[i].nodeName.toLowerCase() == "input") {
      if (parentCheckbox.checked) {
        childCheckbox[i].checked = true;
      } else {
        siblingDiv.style.display = "none";
        childCheckbox[i].checked = false;
      }
    }
  }
}

var checkChild = new ChildrenCheck()
