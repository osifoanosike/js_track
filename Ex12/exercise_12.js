function Domain() {
  this.regex = /^(?:https?:\/\/www\.|https?:\/\/|ftp:\/\/www\.|ftp:\/\/|www\.)?(([a-z0-9]+(?:(?:\.|-)?[a-z0-9]+)+)(?:\.[a-z]{2,6}))(?:\/?(?!\/)(?:[a-z0-9]+(?:(?:-|_)[a-z0-9]+)*)*)*(\.[a-z]+)*$/i;
}

Domain.prototype.init = function() {  
  that = this;
  var button = document.getElementById('submit');
  button.addEventListener('click', function() {
    that.extractDomain();
  });
}

Domain.prototype.extractDomain = function() {
  var url = document.getElementById('url');
  var urlValue = url.value;
  var address = urlValue.replace(that.regex, '$1');
  this.displayDomain(address);
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
  domain.init();
});
