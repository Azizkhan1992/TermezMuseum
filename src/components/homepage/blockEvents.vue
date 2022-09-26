<template>
  <div name="eventsBlock" class="block">
    
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title"
    />

    <div class="w-100 h-420p gap-24">
<!-- First item -->
      <div class="wc-4 ovr-hidden bor-r-20 pos-rel">

        <div class="w-100 w--48p mt-a z-idx2 mr-s-24">
          <h3>This is title</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <iconText
            icon="calendar"
            text="22 июнь 2022г"
            color="white"
          />

          <iconText
            icon="share"
            text="Поделиться"
            color="white"
          />
        </div>
        
        <div class="dark-layer z-idx1"></div>
        <img class="back-img" src="@/assets/static/museums-collection.png" alt="">
      
      </div>
<!-- First item -->

<!-- Second item -->
      <div class="w-8 df-c ovr-hidden bor-r-20 pos-rel">

        <div class="w-100 w--48p mt-a z-idx2 mr-s-24">
          <h3>This is title</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <iconText
            icon="calendar"
            text="22 июнь 2022г"
            color="white"
          />

          <iconText
            icon="share"
            text="Поделиться"
            color="white"
          />
        </div>

        <div class="dark-layer z-idx1"></div>
        <img class="back-img" src="@/assets/static/services.png" alt="">
      </div>
<!-- Second item -->
    </div>

    <div class="w-100 h-420p gap-24 mt-24">
<!-- Third item -->
      <div class="w-8 df-c ovr-hidden bor-r-20 pos-rel">

        <div class="w-100 w--48p mt-a z-idx2 mr-s-24">
          <h3>This is title</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <iconText
            icon="calendar"
            text="22 июнь 2022г"
            color="white"
          />

          <iconText
            icon="share"
            text="Поделиться"
            color="white"
          />
        </div>

        <div class="dark-layer z-idx1"></div>
        <img class="back-img" src="@/assets/static/services.png" alt="">
      </div>
<!-- Third item -->

<!-- Fourth item -->
      <div class="wc-4 ovr-hidden bor-r-20 pos-rel">

        <div class="w-100 w--48p mt-a z-idx2 mr-s-24">
          <h3>This is title</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <iconText
            icon="calendar"
            text="22 июнь 2022г"
            color="white"
          />

          <iconText
            icon="share"
            text="Поделиться"
            color="white"
          />
        </div>

        <div class="dark-layer z-idx1"></div>
        <img class="back-img" src="@/assets/static/museums-collection.png" alt="">

      </div>
      
<!-- Fourth item -->
    </div>

  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'
import iconText from '../iconText.vue'

export default {
  name: 'blockEvents',

  components: {
    animatedTitle, iconText
  },

  data() {
    return {
      offTop: 1,
      title: 'Мероприятия'
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('eventsBlock')[0].offsetTop - 400
    }
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>