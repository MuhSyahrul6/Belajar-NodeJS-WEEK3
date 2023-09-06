const request = require('./request');

request.send = function () {
    console.log('Custom send function');
}
