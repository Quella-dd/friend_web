<template>
    <div>
        <div class="view-footer">
            <div>浏览40次</div>
            <div class="action">
                <div class="action-item">点赞</div>
                <div class="action-item">评论</div>
            </div>
        </div>
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            textarea1: ''
        }
    }
}
</script>

<style lang="less" scoped>
.view-footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 10px;
}

.action {
    display: flex;
}

.action-item {
    margin-left: 10px;
}
</style>