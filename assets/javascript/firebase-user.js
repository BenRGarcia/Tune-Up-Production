/**
 *  Retrieve and store uid and displayName on load
**/

// Add realtime listener
initApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in
      // Set uid and displayment in userAuth object
      userAuth.setUid = user.uid;
      userAuth.setName = user.displayName;
      return $('#js-user-name').text(user.displayName);
    } else {
      // user is signed out
      return false;
    }
  }, function(error) {
    console.log(error);
  });
};

// Start listener on page load
$( function() {
  initApp();
});

// Object to return 'uid' and 'displayName' for use with firebase db
const userAuth = {
  _uid: null,
  _name: null,
  get getUid() {
    return this._uid;
  },
  get getName() {
    return this._name;
  },
  set setUid(uid) {
    return this._uid = uid;
  },
  set setName(displayName) {
    return this._name = displayName;
  },
  signOut() {
    firebase.auth().signOut().then( function() {
      this._uid = null;
      this._name = null;
      }, function(error) {
        console.log(error);
      }
    );
  }
};

/* // Sample data available for firebase auth ui user:
{ 
  "displayName": "Ben...", 
  "email": "ben@email.com", 
  "emailVerified": false, 
  "phoneNumber": null, 
  "photoURL": "https://avatars3.gith...", 
  "uid": "I9QtY5OfJLdgqLuz...", 
  "accessToken": "eyJh.....................", 
  "providerData": [ 
    { 
      "uid": "26......", 
      "displayName": "Ben...", 
      "photoURL": "https://avatars3.gith...", 
      "email": "ben@email.com", 
      "phoneNumber": null, 
      "providerId": "github.com" 
    } 
  ] 
}
*/