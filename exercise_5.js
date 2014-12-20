var rowCount = 0;

    function addRow() {
      rowCount++;
      var rowNumber = rowCount.toString();
      var tbody = document.getElementById('tbody');
      var tr = document.createElement('tr');

      tbody.appendChild(tr);
      
      tr.innerHTML = '<td class="' + rowNumber + '"><input type="text"></td>'
                      + '<td class="' + rowNumber + '"><input type="text"></td>'
                      + '<td><button id="' + rowNumber + '">Submit</button></td>';
      
      var btn = document.getElementById(rowNumber);
      btn.setAttribute('onclick', "submit('" + rowNumber + "')");
    }

    function submit(rowNumber) {
      var inputs = document.getElementsByClassName(rowNumber);

      var name = inputs[0].firstChild.value;
      var email = inputs[1].firstChild.value;
      
      if (notEmpty(name) && notEmpty(email)) {
        if (!validate(inputs[1].firstChild.value)) {
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

    function validate(email) {
      var atpos = email.indexOf("@");
      var dotpos = email.lastIndexOf(".");
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Please enter a valid e-mail address");
        return false;
      }
      return true;
    }

    function notEmpty(value) {
      if (value == "") {
        return false;
      } else {
        return true;
      }
    }

    function editRow(rowNumber) {
      var tdValues = document.getElementsByClassName(rowNumber);
      for (var i = 0; i < tdValues.length; i++) {
        inputValue = tdValues[i].innerHTML;
        tdValues[i].innerHTML = '<td><input value="' + inputValue + '" type="text"></td>'
      }
      tdValues[1].nextSibling.innerHTML = '<td><button id="' + rowNumber + '">Submit</button></td>';
      var btn = document.getElementById(rowNumber);
      btn.setAttribute('onclick', "submit('" + rowNumber + "')");
    }

    function removeRow(rowNumber) {
      parent = document.getElementById('tbody');
      child = document.getElementsByClassName(rowNumber)[0].parentNode;
      parent.removeChild(child);
    }