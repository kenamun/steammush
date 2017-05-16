'use strict';

process.env.NODE_ENV = 'production';
var setGlobalEnv = require('./modules/global_env');

setGlobalEnv(function(err) {
    if (err) {
        if (err.stack)
            console.error(err.stack);
        else if (err.message)
            console.error(err.message);
        else
            console.error(err);
        process.exit(1);
    }
    require('./modules/mush').main();
});