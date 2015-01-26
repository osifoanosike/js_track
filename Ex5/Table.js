
function Table() {
  this.row;
}

Table.prototype.init = function() {
  
  that = this;
  var addButton = document.getElementById('add');
  addButton.addEventListener('click', function() {
    that.row = new Row();
    that.row.addRow();
  });
}

window.addEventListener('load', function() {
  var tabForm = new Table('tabForm');
  tabForm.init();
});
