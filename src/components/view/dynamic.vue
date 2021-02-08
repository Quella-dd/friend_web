<template>
    <div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="好友列表" name="first">
                <List></List>
            </el-tab-pane>
            <el-tab-pane label="好友请求" name="second">
                <Request></Request>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import List from './dynamic/list.vue'
import Request from './dynamic/request.vue'

export default {
    components: { 
        List,
        Request
    },
    data() {
      return {
        activeName: 'first'
      };
    },
}
</script>

<style lang="less" scoped>

</style>