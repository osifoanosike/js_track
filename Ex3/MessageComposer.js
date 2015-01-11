
function MessageComposer() {
}

MessageComposer.prototype.composeMessage = function(checkedBoxes) {
  
  var message = 'Only ' + this.limit + ' days can be selected. You have already selected ';

  for (var i = 0; i < checkedBoxes.length; i++) {
    if (i !== checkedBoxes.length - 1) {
      message += checkedBoxes[i].value + ', '
    } else {
      message += 'and ' + checkedBoxes[i].value + '.';
    }
  }
  alert(message);

}

var composer = new MessageComposer()
