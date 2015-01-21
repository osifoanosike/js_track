
function Table() {
  this.rowCount = 0;
}

Table.prototype.addRow = function() {

  that = this;

  window.addEventListener('load', function() {

    var addButton = document.getElementById('add');

    addButton.addEventListener('click', function() {

      that.rowCount++;
      var rowNumber = that.rowCount.toString();

      var tdName = cell.createTableData(rowNumber);
      var tdEmail = cell.createTableData(rowNumber);

      var tdAction = document.createElement('td');

      var button = cell.createButton('Submit', rowNumber);

      tdAction.appendChild(button);

      var tr = document.createElement('tr');
      that.append(tr, tdName, tdEmail, tdAction);

      tbody = document.getElementById('tbody');
      tbody.appendChild(tr);

    });

  });
  
}
    
/** Use when appending muliple children node to a parent node */

Table.prototype.append = function(parent, children) {
  for (var i = 1; i < arguments.length; i++) {
    parent.appendChild(arguments[i]);
  }
}

var tabForm = new Table('tabForm');
tabForm.addRow();
