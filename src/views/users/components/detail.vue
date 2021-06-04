<template>
  <div class="container">
    <el-form ref="form" :model="model" :rules="rules" label-width="140px">
      <el-form-item prop="realName" label="用户名">
        <el-input v-model="model.realName"></el-input>
      </el-form-item>
      <el-form-item prop="mobile" label="电话号">
        <el-input v-model="model.mobile"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码" v-if="!isEdit">
        <el-input v-model="model.password" placeholder="请输入密码" @blur="checkPass" show-password></el-input>
      </el-form-item>
      <el-form-item prop="passwords" label="确认密码" v-if="!isEdit">
        <el-input v-model="model.passwords" placeholder="请再次输入密码" @blur="checkPass" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm" type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from "element3";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useItem } from "../model/userModel";

export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    // 路由
    const route = useRoute();
    let isTrue  = !!props.isEdit;
    const { model, addUser, updateUser } = useItem(props.isEdit, route.params.id);
    console.log('model',model,model.value);
    const rules = reactive({
      // 校验规则
      realName: [{ required: true, message: "用户名为必填项" }],
      mobile: [{ required: true, message: "手机号为必填项" }],
      password: [{ required: true, message: "密码为必填项" }],
      passwords: [{ required: true, message: "确认密码为必填项" }]
    });

    function checkPass(){
      const {password,passwords} = model.value;
      console.log('sss');
      if (password&&passwords&&password !== passwords){
        Message.error({
          title: "错误",
          message: "密码不一致,请确认",
          duration: 2000,
        });
      }else if (password&&passwords&&password === passwords){
        isTrue = true;
      }
    }

    // 表单实例
    const form = ref(null);
    // 提交表单
    function submitForm() {
      // 校验
      form.value.validate((valid) => {
        if (valid&&isTrue) {
          // 提交
          if (props.isEdit) {
            updateUser().then(() => {
              // 操作成功提示信息
              Message.success({
                title: "操作成功",
                message: "更新用户数据成功",
                duration: 2000,
              });
            });
          } else {
            addUser().then(() => {
              // 操作成功提示信息
              Message.success({
                title: "操作成功",
                message: "新增玩家数据成功",
                duration: 2000,
              });
            });
          }
        }
      });
    }

    return {
      model,
      rules,
      form,
      submitForm,
      checkPass
    };
  },
};
</script>

<style scoped>
.container {
  width: 60%;
  padding: 10px;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
