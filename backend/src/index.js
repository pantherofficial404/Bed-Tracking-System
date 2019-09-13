const app = require('express')();
const mongoose = require('mongoose');
const config = require('config');
const Debug = require('debug');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./Routes');

const debug = Debug('app:server');
const error = Debug('app:error');
error.log = console.info.bind(console);

const server = (async()=>{
    try {
        await mongoose.connect(config.get('db'),{ useNewUrlParser: true,useUnifiedTopology: true  });
        debug('Connected to database');
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use('/api/1.0',router);
        app.listen(config.get('port'));
        debug('Server is running...');
    } catch (error) {
        error('Server startup failed'+error.message);
    }
})();

module.exports = server;