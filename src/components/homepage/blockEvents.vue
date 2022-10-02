<template>
  <div name="eventsBlock" class="block">
    
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />

    <div class="w-100 h-420p gap-24">
<!-- First item -->
      <div class="wc-4 ovr-hidden bor-r-20 pos-rel">

        <div class="w-100 w--48p mt-a z-idx2 mr-s-24">
          <h3>Буддийские монахи в Археологическом музее Термеза</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <iconText
            icon="calendar"
            text="22 июнь 2022г"
            color="white"
          />

          <iconText
            icon="share"
            :text="$t('share')"
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
          <h3>Буддийские монахи в Археологическом музее Термеза</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <iconText
            icon="calendar"
            text="22 июнь 2022г"
            color="white"
          />

          <iconText
            icon="share"
            :text="$t('share')"
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
          <h3>Полная реставрация шахматной доски времен Темуридов</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <iconText
            icon="calendar"
            text="22 июнь 2022г"
            color="white"
          />

          <iconText
            icon="share"
            :text="$t('share')"
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
          <h3>Изучение древних чашек правителей древней Бактрии</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <iconText
            icon="calendar"
            text="22 июнь 2022г"
            color="white"
          />

          <iconText
            icon="share"
            :text="$t('share')"
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
      title:{
        ru:'Мероприятия',
        uz:'Voqealar',
        en:'Events',
        uzcyr:'Воқеалар',
      }
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