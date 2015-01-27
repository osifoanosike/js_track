function Table() {
}

Table.prototype.init = function() { 
  var that = this;
  var addButton = document.getElementById('add');
  addButton.addEventListener('click', function() {
    that.makeRow();
  });
}

Table.prototype.makeRow = function() {
  var row = new Row();
  row.table = this;
  row.add();
}

window.addEventListener('load', function() {
  var tabForm = new Table();
  tabForm.init();
});
