<template>
    <div>
        <div v-for="artical in articals" :key="artical" class="view-profile">
            <Header></Header>
            <div class="content">
                {{ artical.name }}
                {{ artical.content }}
            </div>
            <Footer></Footer>
         </div>
    </div>
</template>

<script>
import Header from './index/header.vue'
import Footer from './index/footer.vue'

export default {
    components: {
        Header,
        Footer
	},
    data() {
        return {
            articals: [{
                name: "name",
                content: "content",
            },{
                name: "name",
                content: "content",
            },{
                name: "name",
                content: "content",
            },{
                name: "name",
                content: "content",
            },{
                name: "name",
                content: "content",
            },{
                name: "name",
                content: "content",
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.view-profile {
    border: 1px solid red;
    padding: 15px 10px 15px 10px;
}

.content {
    text-align: left;
}
</style>