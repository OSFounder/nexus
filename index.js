
function begin() {
 var userEmail = document.getElementById("field_email").value;
 var userPassword = document.getElementById("field_password").value;
 alert(userPassword)
 
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
