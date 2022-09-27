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
    />
   
    <div class="contentView">
      <router-view/>
    </div>



    <sideBar
      v-if="showSideBar"
      :menuList="menuList"
      :currentPage="currentPage"
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

export default {
  name: 'mainLayoout',

  components: {
    headerMenu,
    footerMenu,
    feedbackButton,
    newFeedback,
    scrollToTop,
    sideBar,
    searchWindow
  },

  data() {
    return {
      feedbackModal: false,
      allMenu: this.$store.state.menuLinks,
      currentPath: '',
      sections: [],
      menuList: [],
      currentPage: '',
      searchModalOpen: false
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
    closeModal() {
      this.feedbackModal = false
    },

    sectionSelector() {
      const len = this.allMenu.length

      for(let i = 0; i < len; i++) {
        if(this.allMenu[i].page !== false) {
          this.sections.push(this.allMenu[i])
        }
      }
    },

    menuChanger() {
      let len = this.sections.length
      const menus = []
      for (let i = 0; i < len; i ++) {
        menus.push(this.sections[i].pages.filter(obj => obj.link == (this.currentPath)))
      }

      const index = menus.findIndex((obj) => Object.keys(obj).length !== 0);

      if(this.currentPath !== '/contacts' && this.currentPath !== '/sitemap' && this.currentPath !== '/') {
        this.menuList = this.sections[index].pages
        this.currentPage = this.sections[index].pages.find(obj => obj.link == this.currentPath).page
      }

    },

    openSearch() {
      this.searchModalOpen = true
    },
  },

  watch: {
    '$route'() {
      this.currentPath = '/' + window.location.pathname.split('/')[2]
      this.menuChanger()
    }
  },

  mounted() {
    this.sectionSelector()
    this.currentPath = '/' + window.location.pathname.split('/')[2]
    this.menuChanger()
  }
}
</script>

<style>

</style>