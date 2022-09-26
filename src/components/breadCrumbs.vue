<template>
  <div class="breadcrumbs gap-12 d-f fd-r mt-80">

    <a href="/">
      <icons
        class="mr-12"
        icon="home"
      />
      Главная страница
    </a>

    <a
      v-if="prevPageName !== ''"
      :href="prevPageLink">
      <icons
        class="mr-12"
        icon="arrRight"
      />
      {{prevPageName}}
    </a>

    <h4
      class="currentPage"
      href=""
    >
      <icons
        class="mr-12"
        icon="arrRight"
      />
      <div class="curPageP">{{currentPage}}</div>
    </h4>

  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'breadCrumbsComponent',

  components: {
    Icons
  },

  data() {
    return {

    }
  },

  props: {
    currentPage: {
      type: String,
      required: true
    },

    prevPageName: {
      type: String,
      default: '',
    },

    prevPageLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>