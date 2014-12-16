
function CheckAll(className) {
	this.className = className;
}

CheckAll.prototype.check = function(checked) {
	var checkboxes = document.getElementsByClassName(this.className);
    for (i = 0; i < checkboxes.length; i++) {
    	checkboxes[i].checked = checked;
    }
}
