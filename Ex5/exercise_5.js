
function Table(objectName) {
  this.rowCount = 0;
  this.objectName = objectName;
}

Table.prototype.addRow = function() {
  
  this.rowCount++;
  var rowNumber = this.rowCount.toString();
  var tbody = document.getElementById('tbody');
  var tr = document.createElement('tr');
  tbody.appendChild(tr);

  var tdName = document.createElement('td');
  var tdEmail = document.createElement('td');
  var tdAction = document.createElement('td');

  var inputName = document.createElement('input');
  var inputEmail = document.createElement('input');

  inputName.type = 'text';
  inputEmail.type = 'text';

  var button = document.createElement('button');
  button.id = rowNumber;
  button.setAttribute('onclick', this.objectName + ".submit('" + rowNumber + "')");

  var submit = document.createTextNode('Submit');
  button.appendChild(submit);

  tdName.className = rowNumber;
  tdEmail.className = rowNumber;

  tdName.appendChild(inputName);
  tdEmail.appendChild(inputEmail);
  tdAction.appendChild(button);

  tr.appendChild(tdName);
  tr.appendChild(tdEmail);
  tr.appendChild(tdAction);
}

Table.prototype.submit = function(rowNumber) {
  var inputs = document.getElementsByClassName(rowNumber);

  var name = inputs[0].firstChild.value;
  var email = inputs[1].firstChild.value;

  var nameNode = document.createTextNode(name);
  var emailNode = document.createTextNode(email);

  var editLink = document.createElement('a');
  var editText = document.createTextNode('Edit');
  editLink.appendChild(editText);
  editLink.setAttribute('onclick', this.objectName + '.editRow(' + rowNumber + ')');
  editLink.href = '#';

  var deleteLink = document.createElement('a');
  var deleteText = document.createTextNode('Delete');
  deleteLink.appendChild(deleteText);
  deleteLink.setAttribute('onclick', this.objectName + '.deleteRow(' + rowNumber + ')');
  deleteLink.href = '#';

  var separator = document.createTextNode(' / ');

  var tdAction = inputs[1].nextSibling
      
  if (!validator.empty(name) && !validator.empty(email)) {
    if (!validator.validateEmail(email)) {
      alert("Please enter a valid e-mail address");
      return false;
    } else {
      inputs[0].replaceChild(nameNode, inputs[0].firstChild);
      inputs[1].replaceChild(emailNode, inputs[1].firstChild);

      tdAction.replaceChild(editLink, inputs[1].nextSibling.firstChild);
      tdAction.appendChild(separator);
      tdAction.appendChild(deleteLink);         
    }
  } else {
    alert('Make sure there are no empty fields.');
  }
}

Table.prototype.editRow = function(rowNumber) {
  var tdValues = document.getElementsByClassName(rowNumber);
  for (var i = 0; i < tdValues.length; i++) {
    inputValue = tdValues[i].innerHTML;
    input = document.createElement('input');
    input.value = inputValue;
    input.type = 'text';
    tdValues[i].replaceChild(input, tdValues[i].firstChild);
  }

  var tdAction = tdValues[1].nextSibling;
  var button = document.createElement('button');
  var text = document.createTextNode('Submit');

  button.id = rowNumber;
  button.setAttribute('onclick', this.objectName + ".submit('" + rowNumber + "')");
  button.appendChild(text);

  tdAction.replaceChild(button, tdAction.firstChild);
  tdAction.replaceChild(button, tdAction.childNodes[1])
  tdAction.replaceChild(button, tdAction.lastChild);
}
    
Table.prototype.deleteRow = function(rowNumber) {
  parent = document.getElementById('tbody');
  child = document.getElementsByClassName(rowNumber)[0].parentNode;
  parent.removeChild(child);
};

var tabForm = new Table('tabForm');
