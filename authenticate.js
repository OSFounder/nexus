

const txtEmail = document.getElementById('email_field');
const txtPword = document.getElementById('pass_field');
const binSignIn = document.getElementById('log-in');
const binSignUp = document.getElementById('sign-up');
const binForgot = document.getElementById('forgot-pword');
const binSignOut = document.getElementById('log-out');
const binRedirect = document.getElementById('redirect');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
var dname = document.getElementById('dname');

try {
var db = firebase.firestore();
}
catch {
  console.error('error loading firestore')
}

authStateListener();

function signInWithEmailPassword() {                    
  var email = txtEmail.value;
  var email = email.toLowerCase();
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
      alert('Password or Email wrong, try again');
    });
  // [END auth_signin_password]
}

const sendVerificationEmail = () => {
   firebase.auth().currentUser.sendEmailVerification()
   .then(() => {
      //verified
      window.alert('Verification sent, check your inbox (may be in your spam files)');
   })
   .catch( error => {
          console.error('error');
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

      db.collection("users").add({
          first: fname,
          last: lname,
          displayName: dname
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.uid);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
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


function sendPasswordReset() {
  const email = txtEmail.value;
  // [START auth_send_password_reset]
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
      window.alert('Email sent, check your inbox (the email may be in your spam files)');
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
      document.getElementById('email_field').value;
      document.getElementById('pass_field').value;
      authStateListener();
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
      document.getElementById('email_field').value;
      document.getElementById('pass_field').value;
      authStateListener();
   });
   }
 catch(e) {
   console.error(e);
 }

try {
   binForgot.addEventListener('click', e=> {
      sendPasswordReset();
   });
}
catch {
   console.log('ERROR 404: Forgot not located.')
}
try {
   document.getElementById('logOut').addEventListener('click', e=> {
       signOut();
       authStateListener();
       window.location.href = 'https://nexuslive.tech/';
   });
}
catch {
   console.log('ERROR 404: Sign Out not located.')
}


