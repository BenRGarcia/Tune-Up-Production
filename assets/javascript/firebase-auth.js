/**
 *  https://firebase.google.com/docs/auth/web/firebaseui
 *  https://github.com/firebase/firebaseui-web
**/

// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'https://benrgarcia.github.io/Tune-Up/virtual-garage',
  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
