
function ExtractUrl() {
}

ExtractUrl.prototype.extract = function(formName) {

  var form = document.forms[formName];
  var url = form.url.value;

  var regex = /(\/\/)[a-z0-9.-]+\//g;
  var regex2 = /[a-z0-9.-]/g;
  
  var extract = url.match(regex);

  var webAddress = extract[0].match(regex2).join('');

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

var extractUrl = new ExtractUrl();
