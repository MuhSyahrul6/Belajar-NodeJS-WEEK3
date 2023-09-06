const { send } = require('./request');
const { read } = require('./response');

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com, hello');
console.log(responseData);

console.log(require.cache);