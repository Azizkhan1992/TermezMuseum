<template>
  <div
    :class="bigCard ? 'newsCard-big' : 'newsCard-sm'"
  >
    <img src="@/assets/static/media.png" alt="">

    <div class="newsContent">
      <h3>News' Title</h3>

      <p class="description">News' description</p>

      <div class="newsInfo">
        <tags
          v-for="tag in tagsArray"
          :key="tag.id"
          :tagsName="tag.name"
        />
      </div>

      <div class="newsInfo">
        <iconText
          icon="calendar"
          text="10 июнь 2022г"
        />

        <iconText
          icon="eye"
          text="Просмотрели 1 396"
        />

        <iconText
          icon="share"
          :text="this.textChecker"
          :lastItem="true"
        />
      </div>

    </div>
  </div>
</template>

<script>
import iconText from './iconText.vue'
import tags from './tags.vue'

export default {
  name: 'newsCard',

  components: {
    iconText, tags
  },

  data() {
    return {
      tagsArray: [
        {id: 1, name: 'Музей'},
        {id: 2, name: 'Культура'},
        {id: 3, name: '+7'},
      ]
    }
  },

  props: {
    bigCard: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    textChecker() {
      if(this.bigCard == true) {
        return 'Поделиться'
      } else return ''
    }
  }
}
</script>

<style>

</style>