<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入手机号"
      />
      <van-field v-model="user.password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        mobile: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .van-button--primary {
        width: 100%;

    }
</style>
