 - module.exports = {
    url : 'mongodb://' + process.env.IP + '/mush_prod',
    
    mush : {
        version : '0.0.1',
        name : 'mush.js',
        variant : '',
    },

    logging : {
        level: 'info',              // INFO logging level
        name: 'mush.js',            // Category name, shows as %c in pattern

        // FileStream to log to (can be file name or a stream)
        file: __dirname + '/../mush.log',
        fileFlags: 'a',             // Flags used in fs.createWriteStream to create log file

        consoleLogging: true,       // Flag to direct output to console
        colorConsoleLogging: true,  // Flag to color output to console

        // Usage of the log4js layout
        logMessagePattern: '[%d{ISO8601}] [%p] %c - %m{1}'
    },

    mongodb : {
        

    },

    server : {
        port : 4201,
        // Uncomment the next line to only accept network traffic
        // from a specific network address. INADDR_ANY means
        // accept traffic from any network connection, which is
        // the default.
        // bindToAddress : '10.10.101.118'
    },
    
    
};