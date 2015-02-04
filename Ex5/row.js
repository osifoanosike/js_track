function Row() {
  this.table;
}

Row.prototype.add = function() {
  var doc = document;
  this.table.rowCount++;
  var rowNumber = this.table.rowCount.toString();
  var nameCell = cell.createCell(rowNumber);
  var emailCell = cell.createCell(rowNumber);
  var actionCell = doc.createElement('td');

  var button = cell.createButton('Submit');
  actionCell.appendChild(button);
  var row = doc.createElement('tr');
  row.id = rowNumber;
  cell.append(row, nameCell, emailCell, actionCell);

  var table = doc.getElementById('tbody');
  table.appendChild(row);
}

Row.prototype.submit = function() {
  var doc = document;
  var row = this.parentNode.parentNode;
  var rowNumber = row.id;
  var inputCells = doc.getElementsByClassName(rowNumber);
  var name = inputCells[0].firstChild.value;
  var email = inputCells[1].firstChild.value;
  var inputValues = cell.getInputValues(inputCells);
  var separator = doc.createTextNode(' / ');
  var actionCell = row.lastChild;

  if (cell.validateInputs(name, email)) {
    var editLink = cell.createLink('Edit', cell.row.edit);
    var deleteLink = cell.createLink('Delete', cell.row.delete);
    cell.replaceInputField(inputCells, inputValues);
    cell.removeChildNodes(actionCell);
    cell.append(actionCell, editLink, separator, deleteLink);
  }
}

Row.prototype.edit = function() {
  var doc = document;
  var row = this.parentNode.parentNode;
  var rowNumber = row.id;
  var inputCells = doc.getElementsByClassName(rowNumber);
  for (var i = 0; i < inputCells.length; i++) {
    var inputValue = inputCells[i].innerHTML;
    var input = doc.createElement('input');
    input.value = inputValue;
    input.type = 'text';
    inputCells[i].replaceChild(input, inputCells[i].firstChild);
  }

  var actionCell = row.lastChild;
  var button = cell.createButton('Submit');
  cell.removeChildNodes(actionCell);
  cell.append(actionCell, button);
}

Row.prototype.delete = function() {
  var row = this.parentNode.parentNode;
  var table = document.getElementById('tbody');
  table.removeChild(row);
}

cell = {
  row: new Row(),
  replaceInputField: function(inputCell, inputText) {
    var count = inputCell.length;
    for (var i = 0; i < count; i++) {
      inputCell[i].replaceChild(inputText[i], inputCell[i].firstChild);
    }
  },
  createLink: function(text, handler) {
    var doc = document;
    var link = doc.createElement('a');
    var textNode = doc.createTextNode(text);
    link.appendChild(textNode);
    link.href = '#';
    link.onclick = handler;
    return link;
  },
  createCell: function(rowNumber) {
    var doc = document;
    var cell = doc.createElement('td');
    var input = doc.createElement('input');
    input.type = 'text';
    cell.className = rowNumber;
    cell.appendChild(input);
    return cell;
  },
  createButton: function(text) {
    var doc = document;
    var button = doc.createElement('button');
    button.onclick = this.row.submit;
    var text = doc.createTextNode(text);
    button.appendChild(text);
    return button;
  },
  getInputValues: function(inputCells) {
    var values = [];
    for (var i = 0; i < inputCells.length; i++) {
      var value = inputCells[i].firstChild.value;
      values[i] = document.createTextNode(value);
    }
    return values;
  },
  validateInputs: function(name, email) {
    var valid = false;
    if (!validator.empty(name) && !validator.empty(email)) {
      if (!validator.validateEmail(email)) {
        alert("Please enter a valid e-mail address.");
      } else {
        valid = true;
      }
    } else {
      alert('Make sure there are no empty fields.');
    }
    return valid;
  },
  removeChildNodes: function(parent) {
    do {
      parent.removeChild(parent.firstChild);
    } while (parent.firstChild);
  },
  append: function(parent, children) {
    var fragment = document.createDocumentFragment();
    for (var i = 1; i < arguments.length; i++) {
      fragment.appendChild(arguments[i]);
    }
    parent.appendChild(fragment);
  }
}
