<!DOCTYPE html>
<html lang="eng">
  <head>
    <link rel="stylesheet" href="https://nexuslive.tech/index.css">
    <script src="https://nexuslive.tech/index.js"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
  <body>
      <script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>
      <pre id='data'></pre>

<!-- Top navigation -->
<div class="topnav">

  <!-- Centered link -->
  <div class="topnav-centered">
    <a id="home" href="https://nexuslive.tech/">Nexus</a>
  </div>

  <!-- Left-aligned links (default) -->
  <a href="https://nexuslive.tech/catalog.html">Learn</a>
  <!-- Right-aligned links -->
  <div class="topnav-right">
    <a href="https://nexuslive.tech/login.html">Login</a>
    <a href="https://nexuslive.tech/register.html">Register</a>
  
  </div>

</div>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
</script>

  </body>
</html>
