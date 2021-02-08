<template>
    <div>
        <el-row>
            <el-button type="primary" @click="triggerUpload">上传照片</el-button>
            <el-button type="primary" @click="triggerDialogVisible">创建相册</el-button>
        </el-row>
        <div class="album-lists">
            <div v-for="album of photoAlbum" :key="album.id" class="album-list">
                <div class="album">
                    <el-image :src="src"></el-image>
                    <div>{{ album.count }}</div>
                    <div>{{ album.name }}</div>
                </div>
            </div>
        </div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
            <AddAlum></AddAlum>
        </el-dialog>
        <el-dialog title="提示" :visible.sync="uploadVisible" width="80%">
            <Upload></Upload>
        </el-dialog>
    </div>
</template>

<script>
import AddAlum from './photo/add_alum.vue'
import Upload from './photo/upload.vue'

export default {
    components: {
        AddAlum,
        Upload
    },
    data() {
        return {
            photoAlbum: [{
                id: 1,
                name: 'admin',
                count: 10,
            },{
                id: 2,
                name: 'admin',
                count: 10,
            },{
                id: 3,
                name: 'admin',
                count: 10,
            },{
                id: 4,
                name: 'admin',
                count: 10,
            },{
                id: 5,
                name: 'admin',
                count: 10,
            }],
            dialogVisible: false,
            uploadVisible: false,
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        }
    },
    methods: {
        triggerDialogVisible: function() {
            this.dialogVisible = !this.dialogVisible;
        },
        triggerUpload: function() {
            this.uploadVisible = !this.uploadVisible;
        }
    }
}
</script>

<style lang="less" scoped>
.album-list {
    display: flex;
    margin-left: 40px;
}

.album {
    width: 160px;
    height: 200px;
    padding: 10px 10px 10px 10px;
}

.album-lists {
    display: flex;
}
</style>