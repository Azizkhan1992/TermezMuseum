<template>
  <div class="topTags">
    <p>{{$t("tags")}}</p>

    <button
      class="tag-btn"
      v-for="tag in topTags"
      :key="tag._id"
      @click="goToNews(tag.text)"
    >
      <span>{{tag?.text?.[$i18n.locale]}}</span>
    </button>


  </div>
</template>

<script>
export default {
  name: 'topTags',

  props: {
    topTags: Array
  },
  methods: {
    goToNews(tag){
      let temp = tag?.[this.$i18n.locale]
      this.$router.push({
        path: '/news',
        query: {
          ...this.$route.query, 
          searchCategory: 'tags',
          search: temp
        }
      })
      // console.log(temp)
    }
  }
}
</script>

<style>

</style>