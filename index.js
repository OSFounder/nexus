(function() {
   //initialize application
   const config = {
      apiKey: "AIzaSyAkuL0kZgwpJZpv0eJF8N_fh3mpsYCrFNQ",
      authDomain: "nexus-database-b7220.firebaseapp.com",
      databaseURL: "https://nexus-database-b7220-default-rtdb.firebaseio.com",
      projectId: "nexus-database-b7220",
      storageBucket: "nexus-database-b7220.appspot.com",
      messagingSenderId: "75486796978",
      appId: "1:75486796978:web:d4fb7013ad6131a6257dab",
      measurementId: "G-RQNWQVCW9T"
};
  firebase.initializeApp(config);
    
   const txtEmail = document.getElementById('email_field');
   const txtPword = document.getElementById('pass_field');
   const binSignIn = document.getElementById('log-in');
   const binSignUp = document.getElementById('sign-up');
   const binSignOut = document.getElementById('log-out');
   
   //add login event
   binSignIn.addEventListener('click', e => {
       const email = txtEmail.value;
       const pass = txtPword.value;
       promise = firebase.auth.signInWithEmailAndPassword(email, pass)
       promse.catch(e => console.log(e.message));
       
   });
    
    
}());
