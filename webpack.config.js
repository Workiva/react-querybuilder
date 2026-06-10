'use strict';

module.exports = env => {

    const config = {
        prod: [
            require('./config/webpack-dev.config'), // For the demo
            require('./config/webpack-prod.config'), // lib files
        ],
        dev: require('./config/webpack-dev.config')
    };

    const key = env.prod ? 'prod' : 'dev';
    return config[key];
};
