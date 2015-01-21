
function Table() {
  this.rowCount = 0;
}

Table.prototype.addRow = function() {

  that = this;

  window.addEventListener('load', function() {

    addButton = document.getElementById('add');

    addButton.addEventListener('click', function() {

      that.rowCount++;
      rowNumber = that.rowCount.toString();

      var tdName = that.createTableData();
      var tdEmail = that.createTableData();

      var tdAction = document.createElement('td');

      var button = that.createButton('Submit', rowNumber);

      // button.onclick = that.submitRow;

      tdAction.appendChild(button);

      var tr = document.createElement('tr');
      that.append(tr, tdName, tdEmail, tdAction);

      tbody = document.getElementById('tbody');
      tbody.appendChild(tr);

    });

  });
  
}


Table.prototype.submitRow = function() {

  id = this.id;

  inputs = document.getElementsByClassName(id);

  name = inputs[0].firstChild.value;
  email = inputs[1].firstChild.value;

  inputTexts = that.getValues(inputs);

  var separator = document.createTextNode(' / ');

  var tdAction = inputs[1].nextSibling;
      
  if (!validator.empty(name) && !validator.empty(email)) {
    if (!validator.validateEmail(email)) {
      alert("Please enter a valid e-mail address");
      return false;
    } else {

      editLink = that.createLink('Edit', id);
      var deleteLink = that.createLink('Delete', id);

      editLink.onclick = that.editRow;
      deleteLink.onclick = that.deleteRow;

      that.replaceField(inputs, inputTexts);
      tdAction.replaceChild(editLink, inputs[1].nextSibling.firstChild);
      that.append(tdAction, separator, deleteLink);
    }
  } else {
    alert('Make sure there are no empty fields.');
  }
}



Table.prototype.editRow = function() {

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

  var button = that.createButton('Submit', id);

  tdAction.replaceChild(button, tdAction.firstChild);
  tdAction.replaceChild(button, tdAction.childNodes[1])
  tdAction.replaceChild(button, tdAction.lastChild);
}



Table.prototype.deleteRow = function() {
  id = this.id;
  parent = document.getElementById('tbody');
  child = document.getElementsByClassName(id)[0].parentNode;
  parent.removeChild(child);
}


    Table.prototype.createTableData = function() {
      var td = document.createElement('td');
      var input = document.createElement('input');
      input.type = 'text';
      td.className = rowNumber;
      td.appendChild(input);
      return td;
    }

    Table.prototype.createLink = function(text, linkId) {
      var link = document.createElement('a');
      var text = document.createTextNode(text);
      link.id = linkId;
      link.appendChild(text);
      link.href = '#';
      return link;
    }

    Table.prototype.getValues = function(inputs) {
      var text = [];
      for (var i = 0; i < inputs.length; i++) {
        var value = inputs[i].firstChild.value;
        text[i] = document.createTextNode(value);
      }
      return text;
    }

    Table.prototype.replaceField = function(inputField, inputText) {
      var count = inputField.length;
      for (var i = 0; i < count; i++) {
        inputField[i].replaceChild(inputText[i], inputField[i].firstChild);
      }
    }


    /** Use when appending muliple children node to a parent node **/

    Table.prototype.append = function(parent, children) {
      for (var i = 1; i < arguments.length; i++) {
        parent.appendChild(arguments[i]);
      }
    }

    Table.prototype.createButton = function(text, buttonId) {
      var button = document.createElement('button');
      button.className = 'submit';
      button.id = buttonId;
      button.onclick = that.submitRow;
      var text = document.createTextNode(text);
      button.appendChild(text);
      return button;
    }


var tabForm = new Table('tabForm');
tabForm.addRow();
