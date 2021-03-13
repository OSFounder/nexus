
   //initialize application
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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function makeGoogleCredential(googleUser) {
  // [START auth_make_google_credential]
  var credential = firebase.auth.GoogleAuthProvider.credential(
    googleUser.getAuthResponse().id_token);
  // [END auth_make_google_credential]
}

function makeFacebookCredential(response) {
  // [START auth_make_facebook_credential]
  var credential = firebase.auth.FacebookAuthProvider.credential(
    response.authResponse.accessToken);
  // [END auth_make_facebook_credential]
}

function makeEmailCredential(email, password) {
  // [START auth_make_email_credential]
  var credential = firebase.auth.EmailAuthProvider.credential(email, password);
  // [END auth_make_email_credential]
}

function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
}

function authStateListener() {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(uid)
      document.getElementById('sign-out').classList.remove('hiden');
      document.getElementById('sign-in').classList.add('hiden');
      document.getElementById('sign-up').classList.add('hiden');
      // ...
    } else {
      // User is signed out
      // ...
      console.log('logged out')
    }
  });
  // [END auth_state_listener]
}

function setLanguageCode() {
  // [START auth_set_language_code]
  firebase.auth().languageCode = 'it';
  // To apply the default browser preference instead of explicitly setting it.
  // firebase.auth().useDeviceLanguage();
  // [END auth_set_language_code]
}

function authWithCredential(credential) {
  // [START auth_signin_credential]
  // Sign in with the credential from the user.
  firebase.auth()
    .signInWithCredential(credential)
    .then((result) => {
      // Signed in 
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // ...
    });
  // [END auth_signin_credential]
}

function signInRedirect(provider) {
  // [START auth_signin_redirect]
  firebase.auth().signInWithRedirect(provider);
  // [END auth_signin_redirect]
}
