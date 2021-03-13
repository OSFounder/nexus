

   authStateListener();
    
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
      sendEmailVerification();
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
try {
   binSignIn.addEventListener('click', e=> {
      signInWithEmailPassword();
      var email = txtEmail.value;
      var password = txtPword.value;
      makeEmailCredential(email, password);
      document.getElementById('email_field').value = ''
      document.getElementById('pass_field').value = ''
      authStateListener();
   });
}
catch {
   console.log('ERROR 404: Sign In not located.')
}

try {
   binSignUp.addEventListener('click', e=> {
      signUpWithEmailPassword();
      var email = txtEmail.value;
      var password = txtPword.value;
      makeEmailCredential(email, password);
      document.getElementById('email_field').value = ''
      document.getElementById('pass_field').value = ''
      authStateListener();
   });
}
catch {
   console.log('ERROR 404: Sign Up not located.')
}
try {
   binSignOut.addEventListener('click', e=> {
       signOut();
       authStateListener();
   });
}
catch {
   console.log('ERROR 404: Sign Out not located.')
}
