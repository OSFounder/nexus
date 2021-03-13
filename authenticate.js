
   //initialize application
   const firebase = {
      apiKey: "AIzaSyAkuL0kZgwpJZpv0eJF8N_fh3mpsYCrFNQ",
      authDomain: "nexus-database-b7220.firebaseapp.com",
      databaseURL: "https://nexus-database-b7220-default-rtdb.firebaseio.com",
      projectId: "nexus-database-b7220",
      storageBucket: "nexus-database-b7220.appspot.com",
      messagingSenderId: "75486796978",
      appId: "1:75486796978:web:d4fb7013ad6131a6257dab",
      measurementId: "G-RQNWQVCW9T"
};
  firebase.initializeApp(firebase);
  firebase.analytics();
    
   const txtEmail = document.getElementById('email_field');
   const txtPword = document.getElementById('pass_field');
   const binSignIn = document.getElementById('log-in');
   const binSignUp = document.getElementById('sign-up');
   const binSignOut = document.getElementById('log-out');

function signInWithEmailPassword() {
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
}

function signUpWithEmailPassword() {
  var email = txtEmail.value;
  var password = txtPword.value;
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
}

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
