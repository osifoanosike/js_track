
function Table() {
  this.rowCount = 0;
}

Table.prototype.addRow = function() {
  
  this.rowCount++;
  var rowNumber = this.rowCount.toString();
  var tbody = document.getElementById('tbody');
  var tr = document.createElement('tr');

  tbody.appendChild(tr);
      
  tr.innerHTML = '<td class="' + rowNumber + '"><input type="text"></td>'
                  + '<td class="' + rowNumber + '"><input type="text"></td>'
                  + '<td><button id="' + rowNumber + '">Submit</button></td>';
      
  var btn = document.getElementById(rowNumber);
  btn.setAttribute('onclick', "submit('" + rowNumber + "')");
}

var submit = function(rowNumber) {
  var inputs = document.getElementsByClassName(rowNumber);

  var name = inputs[0].firstChild.value;
  var email = inputs[1].firstChild.value;
      
  if (!validator.empty(name) && !validator.empty(email)) {
    if (!validator.validate(email)) {
      return false;
    } else {
      inputs[0].innerHTML = name;
      inputs[1].innerHTML = email;
      inputs[1].nextSibling.innerHTML = '<a onclick="editRow(' + rowNumber + ')" href="#">Edit</a>'
                                        + ' / <a onclick="removeRow(' + rowNumber + ')" href="#">Delete</a>';          
    }
  } else {
    alert('Make sure there are no empty fields.');
  }
}

var editRow = function(rowNumber) {
  var tdValues = document.getElementsByClassName(rowNumber);
  for (var i = 0; i < tdValues.length; i++) {
    inputValue = tdValues[i].innerHTML;
    tdValues[i].innerHTML = '<td><input value="' + inputValue + '" type="text"></td>'
  }
  tdValues[1].nextSibling.innerHTML = '<td><button id="' + rowNumber + '">Submit</button></td>';
  var btn = document.getElementById(rowNumber);
  btn.setAttribute('onclick', "submit('" + rowNumber + "')");
}
    
var removeRow = function(rowNumber) {
  parent = document.getElementById('tbody');
  child = document.getElementsByClassName(rowNumber)[0].parentNode;
  parent.removeChild(child);
};

var tabForm = new Table();
