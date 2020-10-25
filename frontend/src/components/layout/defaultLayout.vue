<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <a-row type="flex" justify="end">
        <a-col>
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              <a-card-meta :title="user.username">
                <template v-slot:avatar>
                  <a-avatar :src="user.img" />
                </template>
              </a-card-meta>
            </a>
            <template v-slot:overlay>
              <a-menu mode="inline">
                <a-menu-item key="setting">
                  <SettingOutlined />
                  <span>Setting userprofile</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <a-menu
          mode="inline"
          v-model:selectedKeys="$route.name"
          v-model:openKeys="$route.params.id"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="main">
            <laptop-outlined />
            <span>Main</span>
          </a-menu-item>
          <a-sub-menu key="sub2">
            <template v-slot:title>
              <span><user-outlined />Manage 2</span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template v-slot:title>
              <span><notification-outlined />subnav 3</span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import { mapState } from 'vuex';

export default {
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    SettingOutlined,
  },
  computed: mapState('fireAuth', ['user']),
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style>
.ant-card-meta-title {
  color: snow;
}
</style>
