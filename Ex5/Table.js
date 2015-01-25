
function Table() {
  this.rowCount = 0;
}

Table.prototype.init = function() {
  
  that = this;
  var addButton = document.getElementById('add');
    addButton.addEventListener('click', function() {
    that.addRow();
  });
}

Table.prototype.addRow = function() {

  that.rowCount++;
  var rowNumber = that.rowCount.toString();

  var tdName = cell.createTableData(rowNumber);
  var tdEmail = cell.createTableData(rowNumber);

  var tdAction = document.createElement('td');

  var button = cell.createButton('Submit', rowNumber);

  tdAction.appendChild(button);

  var tr = document.createElement('tr');
  that.append(tr, tdName, tdEmail, tdAction);

  var tbody = document.getElementById('tbody');
  tbody.appendChild(tr); 
}
    
/** Use when appending muliple children node to a parent node */

Table.prototype.append = function(parent, children) {
  for (var i = 1; i < arguments.length; i++) {
    parent.appendChild(arguments[i]);
  }
}

window.addEventListener('load', function() {
  var tabForm = new Table('tabForm');
  tabForm.init();
});
