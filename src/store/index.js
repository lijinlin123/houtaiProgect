import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import login from './login/login'
import menu from './modules/menu'
import role from './modules/role'
import manger from './modules/manger'
import cate from './modules/cate'
import specs from './modules/specs'
import goods from './modules/goods'
import banner from './modules/banner'
import seck from './modules/seck'
import member from './modules/member'

export default new Vuex.Store({
    modules:{
        login,
        menu,
        role,
        manger,
        cate,
        specs,
        goods,
        banner,
        seck,
        member
    }
})