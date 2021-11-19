//login 相关的请求与数据模型
import { reactive } from "vue";
import request from "/@/utils/request";

export function useLogin(){
    //登录模块数据源
    const loginModel = reactive({
        mobile:"",
        password:"",
    });

    //登录
    function login(){
        return request({
            url:'/auth/jwt/login',
            method:'post',
            params: loginModel
        })
    }

    return {loginModel,login}
}
