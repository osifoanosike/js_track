function Table() {
  this.row;
}

Table.prototype.init = function() { 
  var that = this;
  var addButton = document.getElementById('add');
  addButton.addEventListener('click', function() {
    that.row = new Row();
    that.row.add();
  });
}

window.addEventListener('load', function() {
  var tabForm = new Table();
  tabForm.init();
});
