const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp();

// Auth trigger (on user register)
exports.newUserRegister = functions.auth.user().onCreate(user => {
    admin.firestore().collection("users").doc(user.uid).set({
        email: user.email
    }).then(() => {
        // After user doc is created, We populate some books for the user so his dashboard isn't empty in the first place
        return admin.firestore().collection("books").add({
                user_id: user.uid,
                title: "rich dad poor dad",
                author: "robert kyosaki",
                comment: "Basics of financial education : Change your mindset about money",
                purchased: false,
                status: "to_read"
            })
    }).catch(err => { console.log(err) })

})

exports.userDeleted = functions.auth.user().onDelete(user => {
    const doc = admin.firestore.collection("users").doc(user.uid)
    return doc.delete()
})
