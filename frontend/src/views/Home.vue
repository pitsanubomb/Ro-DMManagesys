<template>
  <div>
    <a-tabs tab-position="left">
      <a-tab-pane key="1" tab="Login">
        <loginUI />
      </a-tab-pane>
      <a-tab-pane key="3" tab="Register">
        <loginUI />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import loginUI from '@/components/authen/LoginFrom.vue';

export default {
  components: { loginUI },
};
</script>
