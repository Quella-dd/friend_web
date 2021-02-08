<template>
    <div class="item-list">
        <div v-for="request of requests" :key="request" class="item">
            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
            <div>{{ request.name }}二个月前</div>
            <el-row>
                <el-button type="primary">同意</el-button>
                <el-button type="primary">拒绝</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            requests: [{
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
            squareUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
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
    justify-content: space-between;
    align-items: center;
}
</style>