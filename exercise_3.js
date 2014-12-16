
function CheckLimit(className, limit) {
    this.className = className;
    this.limit  = limit;
    this.count = 0
}

CheckLimit.prototype.check = function(id) {
    
    var none = document.getElementById('none');
    none.checked = false;
    var checkbox = document.getElementById(id);

    if (checkbox.checked) {
        if (this.count < this.limit) {
            this.count++
        } else {
            checkbox.checked = false;
            var checkboxes = document.getElementsByClassName(this.className);
            var checkedValue = [];
            var len = checkboxes.length;
            var and = len - 1;
            var message = 'Only ' + this.limit + ' days can be selected. You have already selected ';
            
            for (var i = 0; i < len; i++) {
                if (checkboxes[i].checked) {
                    checkedValue.push(checkboxes[i].value);
                }
            }

            for (var i = 0, len = checkedValue.length; i < len; i++) {
                if (i == 0) {
                    message += checkedValue[i];
                } else if (i == len - 1) {
                    message += ' and ';
                    message += checkedValue[i];
                    message += '.'
                } else {
                    message += ', ';
                    message += checkedValue[i];
                }
            }
            alert(message);
        }
    } else {
        this.count--
    }
};

CheckLimit.prototype.uncheck = function() {
    
    var none = document.getElementById('none');

    var checkboxes = document.getElementsByClassName(this.className);
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    this.count = 0;
};
