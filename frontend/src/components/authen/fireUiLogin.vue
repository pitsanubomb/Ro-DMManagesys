<template>
  <div>
    <section id="ui-auth"></section>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

export default {
  mounted() {
    // FirebaseUI config.
    const uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: '/',
      // Privacy policy url/callback.
    };
    const uiFire = new firebaseui.auth.AuthUI(firebase.auth());
    uiFire.start('#ui-auth', uiConfig);
  },
};
</script>
