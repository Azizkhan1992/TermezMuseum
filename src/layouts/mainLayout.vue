<template>
  <div
    class="mainLayout"
  >

    <!-- Modal Window -->

    <newFeedback
      v-if="feedbackModal"
      @closeModal="closeModal"
    />

    <searchWindow
      @closeModal="searchModalOpen = false"
      v-if="searchModalOpen"
    />

    <!-- Modal Window -->

    <header-menu
      @openSearch="openSearch"
      @openSideMenu="sideMenuIsOpen = true"
    />

    <!-- SideBar Menu Component -->

      <sideMenu
        v-if="sideMenuIsOpen"
        @closeMenu="sideMenuIsOpen = false"
      />
    <div class="contentView">
      <router-view/>
    </div>



    <sideBar
      v-if="showSideBar"
      :menuList="menuList"
      :currentPage="currentPage"
      :class="singlePage ? 'single' : 'main'"
    />

    <scrollToTop/>

    <feedbackButton
      @click.native="feedbackModal = true"
    />


    <footer-menu/>
  </div>
</template>

<script>
import headerMenu from '../components/header.vue'
import footerMenu from '../components/footer.vue'
import feedbackButton from '@/components/feedbackButton.vue'
import newFeedback from '@/views/modalWindows/newFeedback.vue'
import scrollToTop from '@/components/scrollToTop.vue'
import sideBar from '@/components/sideBar.vue'
import searchWindow from '@/views/modalWindows/searchWindow.vue'
import sideMenu from '@/components/sideMenu.vue'

export default {
  name: 'mainLayoout',

  components: {
    headerMenu,
    footerMenu,
    feedbackButton,
    newFeedback,
    scrollToTop,
    sideBar,
    searchWindow,
    sideMenu
  },

  data() {
    return {
      feedbackModal: false,
      allMenu: [],
      currentPath: '',
      sections: [],
      menuList: [],
      currentPage: '',
      searchModalOpen: false,
      singlePage: false,
      sideMenuIsOpen: false
    }
  },

  computed: {
    showSideBar() {
      if(this.currentPath !== '/' && this.currentPath !== '/contacts' && this.currentPath !== '/sitemap') {
        return true
      } else return false
    },
  },

  methods: {
    getMenu(){
      this.$api.get('/menu')
      .then(resp => {
        this.allMenu = resp?.data?.menuDocument
        this.sectionSelector()
        this.menuChanger()
      }).catch(err => {console.log(err)})
    },
    closeModal() {
      this.feedbackModal = false
    },

    sectionSelector() {
      const len = this.allMenu?.length

      for(let i = 0; i < len; i++) {
        if(this.allMenu[i].category == 'section') {
          this.sections.push(this.allMenu[i])
        }
      }
      
    },

    menuChanger() {
      let len = this.sections.length
      const menus = []
      for (let i = 0; i < len; i ++) {
        menus.push(this.sections[i].subMenu.filter(obj => obj.link == (this.currentPath)))
      }
      const index = menus.findIndex((obj) => Object.keys(obj).length !== 0);
      if(this.currentPath !== '/contacts' && this.currentPath !== '/sitemap' && this.currentPath !== '/') {
        this.menuList = this.sections[index]?.subMenu
        this.currentPage = this.sections[index]?.subMenu.find(obj => obj.link == this.currentPath).name
      }

    },

    openSearch() {
      this.searchModalOpen = true
    },
    routerChecker() {
      if (window.location.pathname.split('/').length === 2) {
        this.singlePage = false
      } else if (window.location.pathname.split('/').length === 3) {
        this.singlePage = true
      }
    }
  },

  watch: {
    '$route'() {
      this.currentPath = '/' + window.location.pathname.split('/')[1]
      this.menuChanger()
      this.routerChecker()
    }
  },

  mounted() {
    this.currentPath = '/' + window.location.pathname.split('/')[1]
    this.getMenu()
    this.sectionSelector()
    this.menuChanger()
    this.routerChecker()
  }
}
</script>

<style>

</style>
