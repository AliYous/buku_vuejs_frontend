const functions = require('firebase-functions');

// Auth trigger (on user register)
exports.newUserRegister = functions.auth.user().onCreate(user => {
    console.log('firebase func : ' + user.email + user.uid);
})