<template>
    <div class="header">
        <div>朋友圈系统</div>
        <div>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>登出</el-dropdown-item>
                    <el-dropdown-item @click="hrefEdit">编辑用户信息</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        hrefEdit: function() {
            this.$router.push("/edit")
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid red;
}
</style>