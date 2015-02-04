function Domain() {
  this.regex = /^(?:(?:https?|ftp):\/\/(?:www\.)?|www\.)?((?:([a-z0-9]+(?:\.[a-z0-9]+)*)\.)*([a-z0-9]+\.[a-z]+))(?:\/?(?!\/)(?:[a-z0-9]+(?:(?:-|_)[a-z0-9]+)*)*)*(?:\.[a-z]+)*$/i;
}

Domain.prototype.init = function() {
  var that = this;
  var button = document.getElementById('submit');
  button.addEventListener('click', function() {
    that.extractHostname();
  });
}

Domain.prototype.extractHostname = function() {
  var input = document.getElementById('url');
  var url = input.value;
  var hostname = url.replace(this.regex, '$1');
  this.displayDomain(hostname);
}

Domain.prototype.displayDomain = function(hostname) {
  var message;
  if (hostname.split('.').length == 2) {
    message = 'Domain: ' + hostname;
  } else {
    var domain = hostname.replace(this.regex, '$3');
    var subdomain = hostname.replace(this.regex, '$2');
    message = 'Domain: ' + domain
              + '\n\n'
              + 'Subdomain: ' + subdomain;
  }
  alert(message);
}

window.addEventListener('load', function() {
  var domain = new Domain();
  domain.init();
});
