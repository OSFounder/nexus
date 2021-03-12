var firebaseConfig = {
    apiKey: "AIzaSyAkuL0kZgwpJZpv0eJF8N_fh3mpsYCrFNQ",
    authDomain: "nexus-database-b7220.firebaseapp.com",
    projectId: "nexus-database-b7220",
    storageBucket: "nexus-database-b7220.appspot.com",
    messagingSenderId: "75486796978",
    appId: "1:75486796978:web:d4fb7013ad6131a6257dab",
    measurementId: "G-RQNWQVCW9T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//get data
const email = document.getElementById('email_field');
const pword = document.getElementById('pass_field');
const signin = document.getElementById('log-in');
const signout = document.getElementById('log-out');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
 
});
function begin() {
 const userEmail = document.getElementById("field_email").value;
 const userPassword = document.getElementById("field_password").value;
 
 firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert("Logged in")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Email and or password wrong, try again.")
  });
}
