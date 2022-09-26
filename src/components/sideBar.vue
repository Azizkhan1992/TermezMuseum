<template>
  <div
    class="sideBar"
  >
    
    <div
      class="sideBarMenu"
      :class="open ? '' : 'closed'"
    >
      <a
        v-for="menu in menuList"
        :key="menu.id"
        :href="menu.link"
        class="commonP colorGreyD line-h-20"
        :class="menu.page == currentPage ? 'active' : ''"
      >
        {{menu.page}}
      </a>
    </div>

    <div
      @click="open = !open"
      class="sideBarBtn"
      :class="open ? 'open' : ''"
    >

      <p class="commonP bold line-h-20">{{currentPage}}</p>
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
      open: false
    }
  },

  props: {
    menuList: Array,
    currentPage: String
  }
}
</script>

<style>

</style>