import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXq9j76qqDnxcgnTHdHPis8-ZKcoig6H8",
  authDomain: "messaging-app-6698e.firebaseapp.com",
  projectId: "messaging-app-6698e",
  storageBucket: "messaging-app-6698e.appspot.com",
  messagingSenderId: "717188243994",
  appId: "1:717188243994:web:94d784da1108331bfde7a3",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// messaging
//   .requestPermission()
//   .then(() => {
//     console.log("Have Permission");
//     return messaging.getToken();
//   })
//   .then((token) => {
//     console.log("token", token);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("token", currentToken);
          } else {
            // Show permission request.
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}
