
function Row() {
}

Row.prototype.submitRow = function() {

  id = this.id;

  inputs = document.getElementsByClassName(id);

  name = inputs[0].firstChild.value;
  email = inputs[1].firstChild.value;

  inputTexts = cell.getValues(inputs);

  var separator = document.createTextNode(' / ');

  var tdAction = inputs[1].nextSibling;

  if (cell.validateInputs(name, email)) {

    var editLink = cell.createLink('Edit', id);
    var deleteLink = cell.createLink('Delete', id);

    editLink.onclick = row.editRow;
    deleteLink.onclick = row.deleteRow;

    cell.replaceField(inputs, inputTexts);
    tdAction.replaceChild(editLink, inputs[1].nextSibling.firstChild);
    that.append(tdAction, separator, deleteLink);
  }
}

Row.prototype.editRow = function() {

  id = this.id;

  var tdValues = document.getElementsByClassName(id);

  for (var i = 0; i < tdValues.length; i++) {
    inputValue = tdValues[i].innerHTML;
    input = document.createElement('input');
    input.value = inputValue;
    input.type = 'text';
    tdValues[i].replaceChild(input, tdValues[i].firstChild);
  }

  var tdAction = tdValues[1].nextSibling;

  var button = cell.createButton('Submit', id);

  tdAction.replaceChild(button, tdAction.firstChild);
  tdAction.replaceChild(button, tdAction.childNodes[1])
  tdAction.replaceChild(button, tdAction.lastChild);
}

Row.prototype.deleteRow = function() {
  id = this.id;
  parent = document.getElementById('tbody');
  child = document.getElementsByClassName(id)[0].parentNode;
  parent.removeChild(child);
}

var row = new Row();
