<template>
  <div>
    <a-tabs tab-position="left">
      <a-tab-pane key="1" tab="Login">
        <loginUI @submit="login" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Register">
        <loginUI @submit="register" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import loginUI from '@/components/authen/LoginFrom.vue';
import firebase from 'firebase/app';

export default {
  components: { loginUI },
  methods: {
    login($data) {
      firebase
        .auth()
        .signInWithEmailAndPassword($data.user, $data.password)
        .catch((error) => {
          console.log('Error is : ', error.code + error.message);
        }).then((d) => {
          if (d.user && d.operationType === 'signIn') {
            this.$router.push('about');
          }
        });
    },
    register($data) {
      firebase
        .auth()
        .createUserWithEmailAndPassword($data.user, $data.password)
        .catch((error) => {
          console.log('Error is : ', error.code + error.message);
        });
    },
  },
};
</script>
