// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '509725255870749', // your App ID
        'clientSecret'    : 'fb07b9b4bdaddc5d9d8ce0f2084e5d0b', // your App Secret
        'callbackURL'     : 'http://nodejs-linkb3at.rhcloud.com:1337/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'UGHJdaXROUR5EOETH3Fe3cmS0',
        'consumerSecret'     : 'WPwoZeK25smlS9qvy15gAJyGMhYqMgGehSgLtxVG606w2j4HJe',
        'callbackURL'        : 'http://nodejs-linkb3at.rhcloud.com:1337/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '864269090616-3830r1fml666gopht4bgda7oo4ccou96.apps.googleusercontent.com',
        'clientSecret'     : 'RhmGphhaAr32Gz4soe30zFtx',
        'callbackURL'      : 'http://nodejs-linkb3at.rhcloud.com:1337/auth/google/callback'
    }

};
