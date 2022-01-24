var firebaseConfig = {
    apiKey: "AIzaSyAqrhgAjY_ARhBW_RbJwWXMttAQ3sXzbLQ",
    authDomain: "kwitter-b24e3.firebaseapp.com",
    projectId: "kwitter-b24e3",
    storageBucket: "kwitter-b24e3.appspot.com",
    messagingSenderId: "76325781687",
    appId: "1:76325781687:web:e9429e0ca9114843e3cd32",
  };
  firebase.initializeApp(firebaseConfig);
  function getData() {
    firebase
      .database()
      .ref("/")
      .on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          });
      });
  }
  getData();
  