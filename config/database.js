const f = require('util').format;
const assert = require('assert');


const user = encodeURIComponent('sundar');
const password = encodeURIComponent('sun');


module.exports = {
    database : f('mongodb://%s:%s@ds239117.mlab.com:39117/todonode', user, password) 
}

