<template>
  <a-layout style="min-height: 100vh">
    <a-layout-content>
      <div :style="{ margin: '5%', background: '#fff', minHeight: '500px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      selectedKeys: ['1'],
    };
  },
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
