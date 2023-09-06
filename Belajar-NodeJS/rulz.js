const {get} = require('http');

get('http://www.google.com', (res) => {
    res.on('data', (chunck) => {
        console.log(`Data chunk : ${chunck}`);
    });
    res.on('end', () => {
        console.log('No more data');
    })
});

//req.end();