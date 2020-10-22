<template>
  <div style="padding:25%">
    <a-form layout="inline" :model="formInline" @submit="handleSubmit">
      <a-form-item>
        <a-input v-model:value="formInline.user" placeholder="Username">
          <template v-slot:prefix><UserOutlined style="color:rgba(0,0,0,.25)"/></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-model:value="formInline.password" type="password" placeholder="Password">
          <template v-slot:prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formInline.user === '' || formInline.password === ''"
        >
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    UserOutlined,
    LockOutlined,
  },
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.formInline);
    },
  },
};
</script>
