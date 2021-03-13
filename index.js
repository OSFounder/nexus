
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAkuL0kZgwpJZpv0eJF8N_fh3mpsYCrFNQ",
    authDomain: "nexus-database-b7220.firebaseapp.com",
    databaseURL: "https://nexus-database-b7220-default-rtdb.firebaseio.com",
    projectId: "nexus-database-b7220",
    storageBucket: "nexus-database-b7220.appspot.com",
    messagingSenderId: "75486796978",
    appId: "1:75486796978:web:d4fb7013ad6131a6257dab",
    measurementId: "G-RQNWQVCW9T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//get data from form
const txtEmail = document.getElementById('email_field').value;
const txtPword = document.getElementById('pass_field').value;
const binSignIn = document.getElementById('log-in');
const binSignUp = document.getElementById('sign-up');
const binLogOut = document.getElementById('log-out');
binSignIn.addEventListener(e => {
  var email = txtEmail.value;
  var password = txtPword.value;
  // [START auth_signin_password]
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  // [END auth_signin_password]
});

binSignUp.addEventListener(e => {
  var email = txtEmail.value;
  var password = textPword.value;
  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_signup_password]
});

function sendEmailVerification() {
  // [START auth_send_email_verification]
  firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      // Email verification sent!
      // ...
    });
  // [END auth_send_email_verification]
}

function sendPasswordReset() {
  const email = "sam@example.com";
  // [START auth_send_password_reset]
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_send_password_reset]
}
