<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button @click="logOut()" type="primary">
      Primary
    </a-button>
  </div>
</template>
<script>
import fire from 'firebase/app';

export default {
  methods: {
    logOut() {
      const isLogout = fire.auth().signOut();
      isLogout.then((d) => {
        console.log(d);
      });
    },
  },
};
</script>
