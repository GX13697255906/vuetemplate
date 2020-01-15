<template>
  <div class="login">

    <h2>登录</h2>
    <div class="row">

      <div class="col-12">
        <div class="form-group">
          <div class="username">
            <div class="row">
              <div class="col-1"></div>
              <div class="col-10">
                <label for="username">USERNAME</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="用户名"/>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="password">
            <div class="row">
              <div class="col-1"></div>
              <div class="col-10">
                <label for="password">PASSWORD</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="密码"/>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="signin">
            <div class="row">
              <div class="col-1"></div>
              <div class="col-10">
                <button type="button" class="btn btn-light">登录</button>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {GET} from "../utils/http";
  export default {
    name: "login",
    methods:{
      get:GET("https://www.baidu.com/",null),
    }
  }
</script>

<style scoped>
  .login{
    width: 90%;
    border: black 1px solid;
    margin: 10% auto;
  }
</style>
