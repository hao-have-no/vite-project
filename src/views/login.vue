<template>
    <div class="infisa-login-container">
        <div class="infisa-login-title">
            登录页面
        </div>
        <div class="infisa-login-content">
            <el-form ref="form" :model="loginModel" label-width="80px">
                <el-form-item>
                    <el-input v-model="loginModel.mobile" placeholder="用户名: admin or user"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="loginModel.password" placeholder="密码: ***" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {useLogin} from "/@/model/loginModel";
    import { useRouter,useRoute } from "vue-router";
    import {toRefs} from 'vue';
    import {Message} from "element3";

    export default {
        name: "login",
        setup(){
            const {loginModel,login} = useLogin();
            const route= useRoute();
            const router = useRouter();

            function onSubmit(){
                const {mobile,password} = loginModel;
                if (!mobile||!password){
                    Message.success({
                        title:'提示',
                        message: "用户名和密码不能为空",
                        duration: 2000,
                        type:"error"
                    });
                    return;
                }

                login().then(res=>{
                    //是否登录成功
                    console.log(res);
                    if (res){
                        Message.success({
                            message: "登录成功",
                            duration: 2000,
                        });
                        localStorage.setItem('token',res.data.token);
                        const path = route.query.redirect||'/';
                        router.push(path);
                    }
                })
            }

            return {
                loginModel,
                onSubmit
            }
        }
    }
</script>

<style scoped>
.infisa-login-container{
    height: 100vh;
    background-image: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg");
}
.infisa-login-content{
    width: 328px;
    margin: 120px auto;
}
</style>
