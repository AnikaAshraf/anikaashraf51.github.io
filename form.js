




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBpaGllU96tGcrX5YZH4B8Y7ju1T5Ck0ps",
    authDomain: "logout-c96b7.firebaseapp.com",
    databaseURL: "https://logout-c96b7.firebaseio.com",
    projectId: "logout-c96b7",
    storageBucket: "logout-c96b7.appspot.com",
    messagingSenderId: "525230975226",
    appId: "1:525230975226:web:affc3cb9dee5562c444143"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

  const auth=firebase.auth();
  function signup(){
      var email=document.getElementById("sign_up_email");
      var password=document.getElementById("sign_up_password");

      const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(r=>alert(e.message));
      alert("Signed Up");
      window.location.replace("index.html");
  }
  function signin(){
    var email=document.getElementById("sign_in_email");
    var password=document.getElementById("sign_in_password");

    const promise=auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(r=>alert(e.message));
    alert("Signed In " + email.value);
    window.location.replace("index.html");
  }
  function signout(){
      auth.signOut();
      alert("Signed out");
  }

  auth.onAuthStateChanged(function(user){
      if(user){
          //is signed in
          var email=user.email;
          alert("Active user : "+email);
      }else{
          //no user is signed
          //alert("No Active user"); 
      }

  });
