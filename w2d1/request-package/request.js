var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('err', err => {
    throw err;
  })
  .on('response', res => {
    console.log('Response Status Code: ' + res.statusCode);
    console.log('Response Status Message: ' + res.statusMessage);
    console.log('Response Content Type: ' + res.headers['content-type']);
    console.log('Downloading image...');
  })
  .on('end', function () {
    console.log('Download complete.');
  })
  .pipe(fs.createWriteStream('./future.jpg'));
'start'
'end'
