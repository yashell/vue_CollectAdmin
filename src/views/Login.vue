<template>
    <div class="loginmain">
        <vue-particles
                color="#fff"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#94b8ee"
                :linesWidth="2"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
        >
        </vue-particles>
        <div class="login">
            <div class="login_title">
                <span>管理员登录</span>
            </div>
            <div class="login_fields">
                <div class="login_fields__user">
                    <div class="icon" style="opacity: 0.5;">
                        <img alt="" src="../assets/user_icon_copy.png">
                    </div>
                    <input name="login" placeholder="用户名" maxlength="16" type="text" autocomplete="off" value="admin">
                    <div class="validation">
                        <img alt="" src="../assets/tick.png">
                    </div>
                </div>
                <div class="login_fields__password">
                    <div class="icon" style="opacity: 0.5;">
                        <img alt="" src="../assets/lock_icon_copy.png">
                    </div>
                    <input name="pwd" placeholder="密码" maxlength="16" type="password" autocomplete="off">
                    <div class="validation">
                        <img alt="" src="img/tick.png">
                    </div>
                </div>
                <div class="login_fields__password">
                    <div class="icon">
                        <img alt="" src="../assets/key.png">
                    </div>
                    <input name="code" placeholder="验证码" maxlength="4" type="text" autocomplete="off">

                </div>
                <div class="login_fields__submit">
                    <input type="button" @click="gopage" value="登录">
                </div>
            </div>
            <div class="success">
            </div>
            <div class="disclaimer">
                <p>欢迎登陆后台管理系统</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        methods: {
            gopage() {
                this.$router.push({path: '/index'})
            },
        }
    };
</script>

<style lang="scss" scoped>
    .loginmain {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: url('../assets/login_bg.jpg');
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }


    body .login {
        box-shadow: -15px 15px 15px rgba(6, 17, 47, .7);
        opacity: 1;
        top: 20px;
        -webkit-transition-timing-function: cubic-bezier(.68, -.25, .265, .85);
        -webkit-transition-property: -webkit-transform, opacity, box-shadow, top, left;
        transition-property: transform, opacity, box-shadow, top, left;
        -webkit-transition-duration: .5s;
        transition-duration: .5s;
        -webkit-transform-origin: 161px 100%;
        -ms-transform-origin: 161px 100%;
        transform-origin: 161px 100%;
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        position: relative;
        width: 300px;
        height: 450px;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: 0;
        bottom: 0;
        padding: 100px 40px 40px;
        background: #35394a;
        background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #35394a), color-stop(100%, rgb(0, 0, 0)));
        background: -webkit-linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
        background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba(53, 57, 74, 0)', endColorstr='rgb(0, 0, 0)', GradientType=1)
    }

    body .login .validation {
        position: absolute;
        z-index: 1;
        right: 10px;
        top: 14px;
        opacity: 0
    }

    body .login .disclaimer {
        position: absolute;
        bottom: 20px;
        left: 35px;
        width: 250px;
        color: #d3d7f7;
    }

    body .login_title {
        color: #d3d7f7;
        height: 60px;
        text-align: left;
        font-size: 16px
    }

    body .login_fields {
        height: 208px;
        position: absolute;
        left: 0
    }

    body .login_fields .icon {
        position: absolute;
        z-index: 1;
        left: 36px;
        top: 8px;
        opacity: .5
    }

    body .login_fields input[type=password], body .login_fields input[type=text] {
        color: #61bfff !important
    }

    body .login_fields input[type=text], body .login_fields input[type=password] {
        color: #afb1be;
        width: 190px;
        margin-top: -2px;
        background: transparent;
        left: 0;
        padding: 10px 65px;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-right: 0;
        border-left: 0;
        outline: 0;
        font-family: gudea, sans-serif;
        box-shadow: none
    }

    body .login_fields__user, body .login_fields__password {
        position: relative
    }

    body .login_fields__submit {
        position: relative;
        top: 17px;
        left: 0;
        width: 80%;
        right: 0;
        margin: auto
    }

    body .login_fields__submit .forgot {
        float: right;
        font-size: 10px;
        margin-top: 11px;
        text-decoration: underline
    }

    body .login_fields__submit .forgot a {
        color: #606479
    }

    body .login_fields__submit input {
        border-radius: 50px;
        background: 0 0;
        padding: 10px 50px;
        border: 2px solid #4fa1d9;
        color: #4fa1d9;
        text-transform: uppercase;
        font-size: 11px;
        -webkit-transition-property: background, color;
        transition-property: background, color;
        -webkit-transition-duration: .2s;
        transition-duration: .2s
    }

    body .login_fields__submit input:focus {
        box-shadow: none;
        outline: 0
    }

    body .login_fields__submit input:hover {
        color: #fff;
        background: #4fa1d9;
        cursor: pointer;
        -webkit-transition-property: background, color;
        transition-property: background, color;
        -webkit-transition-duration: .2s;
        transition-duration: .2s
    }


</style>

