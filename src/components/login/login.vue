<template>
  <div class="login">
    <div class="content">
      <div class="logo">
        <img src="../../assets/img/logo.png" alt="">
      </div>
      <h1>科研业务综合管理系统</h1>
      <div class="infor">
        <input class="acc-number" type="text" name="" value="" placeholder="账号">
        <input class="password" type="password" name="" value="" placeholder="密码">
        <div class="submit">Login</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  .content {
    width: 600px;
    height: 900px;
    // background-color: #fff;
    .logo {
      width: 200px;
      height: 200px;
      margin: auto;
      margin-bottom: 30px;
      img {
        width: 200px;
        height: 200px;
      }
    }
    h1 {
      font-size: 40px;
      color: #fff;
      text-align: center;
      margin-bottom: 90px;
    }
    .infor {
      input {
        width: 600px;
        height: 80px;
        margin-bottom: 50px;
        border-radius: 10px;
        outline: none;
        border: 0px;
        padding-left: 20px;
      }
      input::placeholder {
      }
      .submit {
        width: 600px;
        height: 80px;
        border-radius: 10px;
        background-color: #223b73;
        padding-left: 20px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
      }
    }
  }
}
</style>
