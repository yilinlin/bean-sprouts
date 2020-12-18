<template>
  <div class="app-header">
    <section class="wrapper_left">
      <section class="icon_menu">
        <img :src="require('./assets/icon_menu.png')" alt="">
      </section>
      <div class="logo">
        <img class="header-icon" :src="require('./assets/logo.png')" alt="">
      </div>
      <div class="text_entrance">控制台</div>
    </section>
    <section class="wrapper_right">
      <section class="text_ul">
        <section class="text_li">链接1</section>
        <section class="text_li">链接2</section>
      </section>
      <div class="menu">
        <!-- <div class="btn">控制台</div> -->
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link user-info">
            {{ username }}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">账号中心</el-dropdown-item>
            <el-dropdown-item command="b">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div v-if="identifyStatus && identifyStatus !== 5" class="identify" @click="toIdentify">未实名</div>
      </div>

    </section>

  </div>
</template>

<script>
// import Hamburger from '@/components/Hamburger'
// import { HOME_URL } from '../../utils/constant'
import { mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  components: {
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    username() {
      return this.$store.getters.username
    },
    identifyStatus() {
      return this.$store.getters.identifyStatus
    }
    // showbread() {
    //   const path = this.$route.path
    //   return path.match('/register')
    // }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },

    handleCommand(command) {
      if (command === 'a') {
        this.$router.push({ path: '/manage/safety-setting' })
      }
      if (command === 'b') {
        this.$store.dispatch('user/logout').then(d => {
          window.location.reload()
        })
      }
    },
    toIdentify() {
      this.$router.push({ path: '/manage/certification' })
    }

  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables.scss";

  .app-header {
    @extend  %center_middle_flex;
    justify-content: space-between;

    height: 100%;
    font-size: 14px;
    padding:0;

    .wrapper_left{
        @extend  %center_middle_flex;
    }

    .icon_menu{
      width: 48px;
      height:48px;
      background:#006DFF ;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        display: block;
        width: 16px;
        height: 16px;
      }
    }
    .logo {
      position: relative;
      display: flex;
      align-content: center;
      margin-left: 13px;
      .header-icon{
        width: 141px;
      }

      &::after{
        content:"";
        position: absolute;
        width: 1px;
        height:16px;
        background: #BFC3CB;
         transform: translateY(-50%);
        right:-16px;
         top:50%;

      }

    }
    .text_entrance{
        margin-left: 33px;
      }
    .menu {
      display: flex;
      justify-content: center;
      align-content: center;
      line-height: 1.15;
      .btn {
        margin-right: 10px;
      }
      .user-info {
        cursor: pointer;
        color: #4A72E5;
      }
      .identify{
        cursor: pointer;
        margin-left: 5px;
        padding: 1px 5px;
        font-size: 10px;
        color: $white;
        background: #4A72E5;
        border-radius: 2px;
      }
    }

    .wrapper_right{
      @extend %center_middle_flex;

    }
    .text_ul{
      @extend  %center_middle_flex;
      @extend %header_font;

      .text_li{
        margin-right: 33px;
        cursor: pointer;

      }
    }

    .user_avartar{
      width: 32px;
      height:32px;
      background: #d8d8d8;
      border-radius: 100%;
      overflow: hidden;
      margin-right: 20px;
      cursor: pointer;
    }
  }

</style>
