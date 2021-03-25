  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      document.getElementById("user-div").style.display= "block ";
      document.getElementById("login-div").style.display= "none";
      
      var user = firebase.auth().currentUser;


if (user != null) {
    var name, email;
  
    document.getElementById("user-para").innerHTML="Welcome User:" +email: +password;
      
  } else { 
      
      document.getElementById("user-div").style.display= "none";
      document.getElementById("login-div").style.display= "initial";
  }
});
 
function login(){
var userEmail = document.getElementById("email-field").value;
var userpass = document.getElementById("password-field").value;

    firebase.auth().signInWithEmailAndPassword(useremail, userpass)
  .then((userCredential) => {
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
        
        window.alert("Error:" + errorMessage);
  });

}
      
function logout(){
    firebase.auth().signOut()
}
      
