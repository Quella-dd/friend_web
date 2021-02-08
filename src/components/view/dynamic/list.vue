<template>
    <div>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input" clearable>
  </el-input>
        <div class="item-list">
            <div v-for="user of users" :key="user" class="item">
                <div>{{ user.name }}</div>
                <div>{{ user.displayName }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [{
                name: "admin",
                displayName: "admin"
            },{
                name: "admin",
                displayName: "admin"
            },{
                name: "admin",
                displayName: "admin"
            },{
                name: "admin",
                displayName: "admin"
            },{
                name: "admin",
                displayName: "admin"
            }],
            input: ''
        }
    }
}
</script>

<style lang="less" scoped>
.item-list {
}

.item {
    padding: 5px 5px;
    display: flex;
    height: 30px;
    justify-content: space-between;
    align-items: center;
}
</style>