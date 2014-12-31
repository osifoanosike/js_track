
function UrlOpener() {
}

UrlOpener.prototype.openUrl = function() {
  do {
    var address = prompt('Please enter the web address.');
  } while (validator.empty(address));

  var windowFeatures = 'menubar=no,location=no,status=no,scrollbars=0,width=400,height=450';
  var url = 'http://' + address;

  alert('You would like to visit ' + url);

  window.open(url, '_blank', windowFeatures);
}

var opener = new UrlOpener();
