<template>
    <div class="index">
        <el-container>
            <el-header>
                <h1>小U商城后台管理系统</h1>
            </el-header>
            <el-container>
                <el-aside>
                    <v-aside></v-aside>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import vAside from '../components/aside'
export default {
    data() {
        return {
            
        };
    },
    components:{
        vAside
    },
    methods: {
    },
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.el-container {
    // width: 90vw;
    // margin: 0 auto;

    .el-header {
        background-color: #2D6DB0;

        h1 {
            line-height: 60px;
            color: #fff;
            font-size: 22px;
        }
    }

    .el-aside {
        height: 90vh;
        width: 220px !important;
        background-color: #545c64 !important;


        .el-menu {
            width: 220px;
        }
    }
}
</style>
