document.getElementById("regBtn").addEventListener("click", () => {
  // Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyAShQZdvxCaNAr8_8nmtFhUA-mgcPISfmk",
    authDomain: "fire-base-login-3d153.firebaseapp.com",
    projectId: "fire-base-login-3d153",
    storageBucket: "fire-base-login-3d153.appspot.com",
    messagingSenderId: "749758338592",
    appId: "1:749758338592:web:72ec66cb8099ac95774e45",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get the form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Register the user using Firebase Authentication
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Registration successful!");

      user
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          console.log("User profile updated with name:", name);

          window.location.href = "login.html";

          // Redirect to login page after registration
        })
        .catch((error) => {
          console.error("Error updating user profile:", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
      console.error("Error:", errorCode, errorMessage);
    });
});

document.getElementById("regBtn").addEventListener("click", () => {
  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAShQZdvxCaNAr8_8nmtFhUA-mgcPISfmk",
    authDomain: "fire-base-login-3d153.firebaseapp.com",
    projectId: "fire-base-login-3d153",
    storageBucket: "fire-base-login-3d153.appspot.com",
    messagingSenderId: "749758338592",
    appId: "1:749758338592:web:72ec66cb8099ac95774e45",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get the email and password from the form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Authenticate the user with Firebase
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Login successful!");
      console.log("User:", user);

      // Redirect to another page or perform any other action you need
      window.location.href = "dashboard.html"; // Example redirect after login
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error:${errorMessage}");
      console.error("Error:", errorCode, errorMessage);
    });
});
