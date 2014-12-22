
function UrlOpener() {
  
}

UrlOpener.prototype.openUrl = function() {
  do {
    var address = prompt('Please enter the web address.');
  } while (empty(address));

  var windowFeatures = 'menubar=no,location=no,status=no,scrollbars=0,width=400,height=450';
  var url = 'http://' + address;

  alert('You would like to visit ' + url);

  window.open(url, '_blank', windowFeatures);
}


function empty(value) {
  if (value !== null) {
    value = value.trim();
  }

  if (!value) {
    return true;
  } else {
    return false;
  }
}

var opener = new UrlOpener();
