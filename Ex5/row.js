function Row() {
  this.table;
}

Row.count = 0;

Row.prototype.add = function() {
  that = this;
  var doc = document;
  Row.count++;
  var rowNumber = Row.count.toString();
  
  this.cell = new Cell();
  var nameCell = this.cell.createCell(rowNumber);
  var emailCell = this.cell.createCell(rowNumber);
  var actionCell = doc.createElement('td');

  var button = this.cell.createButton('Submit', rowNumber);
  button.onclick = this.submit;
  actionCell.appendChild(button);
  var row = doc.createElement('tr');
  this.cell.append(row, nameCell, emailCell, actionCell);
  var table = doc.getElementById('tbody');
  table.appendChild(row); 
}

Row.prototype.submit = function() {
  var id = this.id;
  var doc = document;
  var inputCells = doc.getElementsByClassName(id);
  var name = inputCells[0].firstChild.value;
  var email = inputCells[1].firstChild.value;
  var inputValues = that.cell.getInputValues(inputCells);
  var separator = doc.createTextNode(' / ');
  var actionCell = inputCells[1].nextSibling;

  if (that.cell.validateInputs(name, email)) {
    var editLink = that.cell.createLink('Edit', id);
    var deleteLink = that.cell.createLink('Delete', id);
    editLink.onclick = that.edit;
    deleteLink.onclick = that.delete;
    that.cell.replaceInputField(inputCells, inputValues);
    that.cell.removeChildNodes(actionCell);
    that.cell.append(actionCell, editLink, separator, deleteLink);
  }
}

Row.prototype.edit = function() {
  var id = this.id;
  var doc = document;
  var inputCells = doc.getElementsByClassName(id);
  for (var i = 0; i < inputCells.length; i++) {
    var inputValue = inputCells[i].innerHTML;
    var input = doc.createElement('input');
    input.value = inputValue;
    input.type = 'text';
    inputCells[i].replaceChild(input, inputCells[i].firstChild);
  }

  var actionCell = inputCells[1].nextSibling;
  var button = that.cell.createButton('Submit', id);
  button.onclick = that.submit;
  that.cell.removeChildNodes(actionCell);
  that.cell.append(actionCell, button);
}

Row.prototype.delete = function() {
  var id = this.id;
  var doc = document;
  var table = doc.getElementById('tbody');
  var row = doc.getElementsByClassName(id)[0].parentNode;
  table.removeChild(row);
}
