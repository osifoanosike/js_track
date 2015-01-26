
function Row() {
  this.cell;
}

Row.count = 0;

Row.prototype.add = function() {

  that = this;

  Row.count++;
  this.cell = new Cell();

  var rowNumber = Row.count.toString();

  var tdName = this.cell.createTableData(rowNumber);
  var tdEmail = this.cell.createTableData(rowNumber);

  var tdAction = document.createElement('td');

  var button = this.cell.createButton('Submit', rowNumber);
  button.onclick = this.submit;

  tdAction.appendChild(button);

  var tr = document.createElement('tr');
  this.cell.append(tr, tdName, tdEmail, tdAction);

  var tbody = document.getElementById('tbody');
  tbody.appendChild(tr); 
}

Row.prototype.submit = function() {

  var id = this.id;

  var inputs = document.getElementsByClassName(id);

  var name = inputs[0].firstChild.value;
  var email = inputs[1].firstChild.value;

  var inputTexts = that.cell.getValues(inputs);

  var separator = document.createTextNode(' / ');

  var tdAction = inputs[1].nextSibling;

  if (that.cell.validateInputs(name, email)) {

    var editLink = that.cell.createLink('Edit', id);
    var deleteLink = that.cell.createLink('Delete', id);

    editLink.onclick = that.edit;
    deleteLink.onclick = that.delete;

    that.cell.replaceField(inputs, inputTexts);
    that.cell.removeChildNodes(tdAction);
    that.cell.append(tdAction, editLink, separator, deleteLink);
  }
}

Row.prototype.edit = function() {

  var id = this.id;

  var tdValues = document.getElementsByClassName(id);

  for (var i = 0; i < tdValues.length; i++) {
    var inputValue = tdValues[i].innerHTML;
    var input = document.createElement('input');
    input.value = inputValue;
    input.type = 'text';
    tdValues[i].replaceChild(input, tdValues[i].firstChild);
  }

  var tdAction = tdValues[1].nextSibling;
  var button = that.cell.createButton('Submit', id);
  button.onclick = that.submit;

  that.cell.removeChildNodes(tdAction);
  that.cell.append(tdAction, button);
}

Row.prototype.delete = function() {
  var id = this.id;
  var parent = document.getElementById('tbody');
  var child = document.getElementsByClassName(id)[0].parentNode;
  parent.removeChild(child);
}
