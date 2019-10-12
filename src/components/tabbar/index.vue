<template>
  <div>
    <van-nav-bar title="首页|搜索" />
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/" >首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/login">登录</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  created () {
    this.$router.push({
      path: '/'
    })
  }
}
</script>

<style>
</style>
