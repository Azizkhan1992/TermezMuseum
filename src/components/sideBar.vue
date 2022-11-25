<template>
  <div
    class="sideBar"
  >
  
    
    <div
      class="sideBarMenu"
      :class="open ? '' : 'closed'"
    >
      <a
        v-for="menu, idx in menuList"
        :key="idx"
        :href="menu?.link"
        class="commonP colorGreyD line-h-20"
        :class="menu?.link == currentPage ? 'active' : ''"
      >
        {{menu?.name?.[$i18n.locale]}}
      </a>
    </div>

    <div
      @click="open = !open"
      class="sideBarBtn"
      :class="open ? 'open' : ''"
    >

      <p class="commonP bold line-h-20">{{currentPage?.[$i18n.locale]}}</p>
      <Icons
        icon="arrUp"
        size="sm"
        color="white"
      />

    </div>

  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'sideBarComponent',

  components: {
    Icons
  },

  data() {
    return {
      open: false,
      SideBarMenu: []
    }
  },

  props: {
    menuList: Array,
    currentPage: [String,Object]
  },

  mounted(){
    this.logMenu()
  },
  methods: {
    logMenu(){
      this.menuList.forEach(elem => {
        this.SideBarMenu = elem.subMenu 
        // console.log(this.SideBarMenu)
      })
    }
  }
}
</script>

<style>

</style>