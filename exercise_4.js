
function CheckChildren() {
}

CheckChildren.prototype.check = function(id) {
	parentCheckBox = document.getElementById(id);
    siblingDiv = parentCheckBox.nextSibling.nextSibling
    siblingDiv.style.display = "block";
    siblingDiv.scrollIntoView(true);
    childCheckbox = siblingDiv.childNodes

    for (var i = 0; i < childCheckbox.length; i++) {
        if (childCheckbox[i].nodeName.toLowerCase() == "input") {
           if (parentCheckBox.checked) {
                childCheckbox[i].checked = true;
            } else {
            	siblingDiv.style.display = "none";
			}
        }
    }
}
