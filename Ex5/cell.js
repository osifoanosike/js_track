function Cell() {
  this.row;
}

Cell.prototype.replaceInputField = function(inputCell, inputText) {
  var count = inputCell.length;
  for (var i = 0; i < count; i++) {
    inputCell[i].replaceChild(inputText[i], inputCell[i].firstChild);
  }
}

Cell.prototype.createLink = function(text, linkId) {
  var doc = document;
  var link = doc.createElement('a');
  var text = doc.createTextNode(text);
  link.id = linkId;
  link.appendChild(text);
  link.href = '#';
  return link;
}

Cell.prototype.createCell = function(rowNumber) {
  var doc = document;
  var cell = doc.createElement('td');
  var input = doc.createElement('input');
  input.type = 'text';
  cell.className = rowNumber;
  cell.appendChild(input);
  return cell;
}

Cell.prototype.createButton = function(text, buttonId) {
  var doc = document;
  var button = doc.createElement('button');
  button.className = 'submit';
  button.id = buttonId;
  var text = doc.createTextNode(text);
  button.appendChild(text);
  return button;
}

Cell.prototype.getInputValues = function(inputCells) {
  var values = [];
  for (var i = 0; i < inputCells.length; i++) {
    var value = inputCells[i].firstChild.value;
    values[i] = document.createTextNode(value);
  }
  return values;
}

Cell.prototype.validateInputs = function(name, email) {
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
}

Cell.prototype.removeChildNodes = function(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

Cell.prototype.append = function(parent, children) {
  for (var i = 1; i < arguments.length; i++) {
    parent.appendChild(arguments[i]);
  }
}
