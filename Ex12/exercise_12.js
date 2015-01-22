
function Domain() {
  this.regex1 = /^(https?:\/\/www\.|https?:\/\/|ftp:\/\/|www\.)/i;
  this.regex2 = /(?:[a-z0-9.-]+)(?=(?:\/)?)/i;
}

Domain.prototype.extractDomain = function() {

  that = this;

  var button = document.getElementById('submit');

  button.addEventListener('click', function() {
    
    // var form = document.getElementById(formName);
    var url = document.getElementById('url');
    var urlValue = url.value;

    var extract = urlValue.replace(that.regex1, '');

    var address = extract.match(that.regex2)[0];

    that.displayDomain(address);

  });

}

Domain.prototype.displayDomain = function(webAddress) {

  var webArray = webAddress.split('.');

  if (webAddress.match(/co(?=\.)/)) {

    if (webArray.length == 3) {
      alert('Domain: ' + webAddress);
    } else {
      alert('Domain: ' + webArray[1] + '.' + webArray[2] + '.' + webArray[3] + '\n\n'
            + 'Subdomain: ' + webArray[0]
      );
    }

  } else {

    if (webArray.length == 2) {
      alert('Domain: ' + webAddress);
    } else {
      alert('Domain: ' + webArray[1] + '.' + webArray[2] + '\n\n'
            + 'Subdomain: ' + webArray[0]
      );
    }
  }
}

window.addEventListener('load', function() {
  var domain = new Domain();
  domain.extractDomain();
});
