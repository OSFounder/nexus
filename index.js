(function() {

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

      //get data
      const txtemail = document.getElementById('email_field');
      const txtpword = document.getElementById('pass_field');
      const binsignin = document.getElementById('log-in');
      const binsignup = document.getElementById('sign-up')
      const binsignout = document.getElementById('log-out');
 
      //listen for sign in attempt
      binsignin.addEventListener('click', e => {
          //get email and pword
          const email = txtemail.value;
          const pass = txtpword.value;
          const auth = firebase.auth();
          //sign in
          const promise = auth.signInWithEmailAndPassword(email, pass);
          promise.catch(e => console.log(e.message()));
          
      });
        binsignup.addEventListener('click', e => {
          //get email and pword
          const email = txtemail.value;
          const pass = txtpword.value;
          const auth = firebase.auth();
          //sign in
          const promise = auth.createUserWithEmailAndPassword(email, pass);
          promise.catch(e => console.log(e.message()));
          
      });
       
      firebase.auth().onAuthStateChanged(firebaseUser => {
          if(firebaseUser) {
              console.log(firebaseUser);
          }
          else {
              console.log('not logged in');
          }
      });
}());
