
function Cell() {
}

Cell.prototype.replaceField = function(inputField, inputText) {
  var count = inputField.length;
  for (var i = 0; i < count; i++) {
    inputField[i].replaceChild(inputText[i], inputField[i].firstChild);
  }
}

Cell.prototype.createLink = function(text, linkId) {
  var link = document.createElement('a');
  var text = document.createTextNode(text);
  link.id = linkId;
  link.appendChild(text);
  link.href = '#';
  return link;
}

Cell.prototype.createTableData = function(rowNumber) {
  var td = document.createElement('td');
  var input = document.createElement('input');
  input.type = 'text';
  td.className = rowNumber;
  td.appendChild(input);
  return td;
}

Cell.prototype.createButton = function(text, buttonId) {
  var button = document.createElement('button');
  button.className = 'submit';
  button.id = buttonId;
  var text = document.createTextNode(text);
  button.appendChild(text);
  return button;
}

Cell.prototype.getValues = function(inputs) {
  var text = [];
  for (var i = 0; i < inputs.length; i++) {
    var value = inputs[i].firstChild.value;
    text[i] = document.createTextNode(value);
  }
  return text;
}

Cell.prototype.validateInputs = function(name, email) {

	var feedback = false;

	if (!validator.empty(name) && !validator.empty(email)) {
    if (!validator.validateEmail(email)) {
      alert("Please enter a valid e-mail address");
    } else {
    	feedback = true;
    }
  } else {
    alert('Make sure there are no empty fields.');
  }
  return feedback;
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
