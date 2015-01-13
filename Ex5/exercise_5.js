
function Table(objectName) {
  this.rowCount = 0;
  this.objectName = objectName;
}

Table.prototype.addRow = function() {
  
  this.rowCount++;
  rowNumber = this.rowCount.toString();

  var tdName = createTableData();
  var tdEmail = createTableData();

  var tdAction = document.createElement('td');

  var button = createButton('Submit');
  button.id = rowNumber;
  button.setAttribute('onclick', this.objectName + ".submit('" + rowNumber + "')");

  tdAction.appendChild(button);

  var tr = document.createElement('tr');
  append(tr, tdName, tdEmail, tdAction);

  tbody = document.getElementById('tbody');
  tbody.appendChild(tr);
}



Table.prototype.submit = function(rowNumber) {

  var inputs = document.getElementsByClassName(rowNumber);

  var name = inputs[0].firstChild.value
  var email = inputs[1].firstChild.value

  var inputTexts = getValues(inputs);

  var editLink = createLink('Edit');
  var deleteLink = createLink('Delete');

  editLink.setAttribute('onclick', this.objectName + '.editRow(' + rowNumber + ')');
  deleteLink.setAttribute('onclick', this.objectName + '.deleteRow(' + rowNumber + ')');

  var separator = document.createTextNode(' / ');

  var tdAction = inputs[1].nextSibling;
      
  if (!validator.empty(name) && !validator.empty(email)) {
    if (!validator.validateEmail(email)) {
      alert("Please enter a valid e-mail address");
      return false;
    } else {

      replaceField(inputs, inputTexts);
      tdAction.replaceChild(editLink, inputs[1].nextSibling.firstChild);
      append(tdAction, separator, deleteLink);
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

  var button = createButton('Submit');
  button.setAttribute('onclick', this.objectName + ".submit('" + rowNumber + "')");

  tdAction.replaceChild(button, tdAction.firstChild);
  tdAction.replaceChild(button, tdAction.childNodes[1])
  tdAction.replaceChild(button, tdAction.lastChild);
}



Table.prototype.deleteRow = function(rowNumber) {
  parent = document.getElementById('tbody');
  child = document.getElementsByClassName(rowNumber)[0].parentNode;
  parent.removeChild(child);
}


    function createTableData() {
      var td = document.createElement('td');
      var input = document.createElement('input');
      input.type = 'text';
      td.className = rowNumber;
      td.appendChild(input);
      return td;
    }

    function createLink(text) {
      var link = document.createElement('a');
      var text = document.createTextNode(text);
      link.appendChild(text);
      link.href = '#';
      return link;
    }

    function getValues(inputs) {
      var text = [];
      for (var i = 0; i < inputs.length; i++) {
        var value = inputs[i].firstChild.value;
        text[i] = document.createTextNode(value);
      }
      return text;
    }

    function replaceField(inputField, inputText) {
      var count = inputField.length;
      for (var i = 0; i < count; i++) {
        inputField[i].replaceChild(inputText[i], inputField[i].firstChild);
      }
    }


    /** Use when appending muliple children node to a parent node **/

    function append(parent, children) {
      for (var i = 1; i < arguments.length; i++) {
        parent.appendChild(arguments[i]);
      }
    }

    function createButton(text) {
      var button = document.createElement('button');
      var text = document.createTextNode(text);
      button.appendChild(text);
      return button;
    }


var tabForm = new Table('tabForm');
