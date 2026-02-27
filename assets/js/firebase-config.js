// Firebase Configuration for Snake Game Leaderboard
// --------------------------------------------------
// 1. Go to https://console.firebase.google.com
// 2. Create a new project (or use an existing one)
// 3. Add a Web App and copy the config below
// 4. Enable Cloud Firestore in the Firebase console
// --------------------------------------------------

var firebaseConfig = {
  apiKey: "AIzaSyC04PJb7h2_pAFbJKlrDMR1CNHyL6xbKlc",
  authDomain: "grtushar-github-io.firebaseapp.com",
  projectId: "grtushar-github-io",
  storageBucket: "grtushar-github-io.firebasestorage.app",
  messagingSenderId: "919081127260",
  appId: "1:919081127260:web:b3235bec790f01b686c599",
  measurementId: "G-4VRX47YF6L"
};

// Initialize Firebase (only if config is filled in)
if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
} else {
  var db = null;
}
