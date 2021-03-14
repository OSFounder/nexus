

   authStateListener();


    
   const txtEmail = document.getElementById('email_field');
   const txtPword = document.getElementById('pass_field');
   const binSignIn = document.getElementById('log-in');
   const binSignUp = document.getElementById('sign-up');
   const binSignOut = document.getElementById('log-out');
   const fname = document.getElementById('fname');
   const lname = document.getElementById('lname');
   var dname = document.getElementById('dname');

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

const sendVerificationEmail = () => {
   auth.currentuser.sendEmailVerification()
   .then(() => {
      window.location.assign('../index.html');
   })
   .catch( error => {
          console.error('could not send verification email, email Cam.osproject@gmail.com');
          })
}

function signUpWithEmailPassword() {
  var email = txtEmail.value;
  var password = txtPword.value;
  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = firebase.auth().currentUser;
      sendVerificationEmail();

      user.updateProfile({
         //TODO: add updates here
         displayName: dname
         firstName: fname
         lastname: lname
         email: txtEmail
      }).then(function() {
        // Update successful.
        var user = userCredential.user;
      }).catch(function(error) {
        // An error happened.
      });
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
      location.replace('https://nexuslive.tech/');
   });
}
catch {
   console.log('ERROR 404: Sign In not located.')
}

try {
   binSignUp.addEventListener('click', e=> {
      signOut()
      signUpWithEmailPassword();
      var email = txtEmail.value;
      var password = txtPword.value;
      makeEmailCredential(email, password);
      document.getElementById('email_field').value = ''
      document.getElementById('pass_field').value = ''
      authStateListener();
      location.replace('https://nexuslive.tech/');
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
