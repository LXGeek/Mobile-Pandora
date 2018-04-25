<template>
  <div class="forgetPass">
    <div class="content">
      <div id="name">
        <h2>姓名</h2>
        <input class="name" type="text" name="" value="">
      </div>
      <div id="email">
        <h2>邮箱</h2>
        <input class="email" type="text" name="" value="">
      </div>
      <div id="other">
        <div class="submit">提交</div>
        <div class="goback" @click="goBack()">返回首页</div>
      </div>
      <h1 class="warning">提示：请正确输入您的姓名和邮箱，您的密码将会被重置，新密码会被发送到您的邮箱中。</h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push({ path: '/login' });
    }
  }
}
</script>

<style lang="scss">
.forgetPass {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #fff;
  .content {
    width: 600px;
    height: 600px;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    // background-color: #eee;
    #name , #email ,#other{
      width: 600px;
      height: 80px;
      display: flex;
      margin-top: 30px;
      color: #fff;
      h2 {
        font-size: 14px;
      }
      input {
        width: 500px;
        height: 60px;
        margin-left: 30px;
        padding-left: 10px;
        outline: none;
      }
    }
    #other {
      width: 400px;
      margin: 0 auto;
      margin-top: 70px;
      justify-content: space-around;
      .submit, .goback {
        width: 120px;
        height: 70px;
        text-align: center;
        border-radius: 10px;
        line-height: 70px;
        background-color: #409efe;
        // margin-right: 30px;
      }
      .goback {
        width: 120px;
        background-color: #fff;
        color: rgb(30, 30, 30);
      }
    }
    .warning {
      color: #ce1e33;
      font-size: 15px;
      margin-top: 60px;
      text-align: center;
    }
  }
}
</style>
