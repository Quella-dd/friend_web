<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-container>
            <el-aside width="20%">
                <el-row class="tac">
                    <el-col>
                        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                            <el-menu-item index="1">
                                <router-link to="/index">index</router-link>
                                <i class="el-icon-menu"></i>
                                <span slot="title">好友动态</span>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <router-link to="/dynamic">dynamic</router-link>
                                <i class="el-icon-menu"></i>
                                <span slot="title">我的好友</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <router-link to="/most_releation">most_releation</router-link>
                                <i class="el-icon-document"></i>
                                <span slot="title">特别关注</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <router-link to="/releation">releation</router-link>
                                <i class="el-icon-setting"></i>
                                <span slot="title">与我相关</span>
                            </el-menu-item>
                            <el-menu-item index="5">
                                <router-link to="/article">article</router-link>
                                <i class="el-icon-setting"></i>
                                <span slot="title">我的说说</span>
                            </el-menu-item>
                            <el-menu-item index="6">
                                <router-link to="/photo">photo</router-link>
                                <i class="el-icon-setting"></i>
                                <span slot="title">相册</span>
                            </el-menu-item>
                            <el-menu-item index="7">
                                <router-link to="/messageBoard">messageBoard</router-link>
                                <i class="el-icon-setting"></i>
                                <span slot="title">留言板</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from './header.vue'

export default {
    components: {
		Header
	}
}
</script>

<style lang="less" scoped>
.el-header {
    padding: 0;
}
</style>