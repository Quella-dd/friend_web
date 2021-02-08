<template>
<div class="body">
    <div v-if="!registryBool" class="login-form">
        <div class="ui-item">
            <div class="ui-item-label">请输入用户名</div>
            <el-input v-model="name" placeholder="请输入内容"></el-input>
        </div>
        <div class="ui-item">
            <div class="ui-item-label">请输入密码</div>
            <el-input v-model="password" placeholder="请输入内容"></el-input>
        </div>
        <div class="ui-item">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button @click="trigger">注册</el-button>
        </div>
    </div>
    <div v-if="registryBool" class="login-form">
        <div class="ui-item">
            <div class="ui-item-label">请输入用户名</div>
            <el-input v-model="name" placeholder="请输入内容"></el-input>
        </div>
        <div class="ui-item">
            <div class="ui-item-label">请输入密码</div>
            <el-input v-model="password" placeholder="请输入内容"></el-input>
        </div>
        <div class="ui-item">
            <div class="ui-item-label">请输入邮箱</div>
            <el-input v-model="email" placeholder="请输入内容"></el-input>
        </div>
        <div class="ui-item">
            <el-button type="primary" @click="registry">注册</el-button>
            <el-button @click="trigger">取消</el-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            name: "",
            password: "",
            email: "",
            registryBool: false
        };    
    },
    methods: {
        login() {
        },
        trigger() {
            this.registryBool = !this.registryBool;
        },
        registry() {

        }
    }
}
</script>

<style lang="less" scoped>
.body {
    display: flex;
    justify-content: center;
    align-content: center;
}

.login-form {
    height: 40%;
    width: 60%;
}

.ui-item {
    margin-top: 10px;

    .ui-item-label {
        display: flex;
        justify-self: left;
        margin-bottom: 10px;
    }
}
</style>