<template>
  <div class="mainPage">

    <div class="w-100 mt-120 gap-24 manage_single">
      <div class="w-4 pos-rel h-652p bor-r-20 ovr-hidden">
        <img class="back-img" :src="require('@/assets/temporary/' + this.managerInfo.img + '.jpg')" alt="">
      </div>

      <div class="w-8">
        <h2 class="grandTitle colorType ta-l line-h-68 ">{{managerInfo.name}}</h2>
        <h4 class="commonT colorGreyD mt-60">{{managerInfo.post}}</h4>

        <!-- 1 Start -->

        <div class="w-100 mt-60 gap-12">
          <Icons
            size="middle"
            icon="clock"
          />
          <div class="w-100 fd-c gap-12">
            <div class="w-100 gap-12">
              <p class="helpers font-s-16p mw-fit">{{$t("recDays")}}:</p>
              <p class="mainers font-s-16p">{{managerInfo.info.receptionDays}}</p>
            </div>

            <div class="w-100 gap-12">
              <p class="helpers font-s-16p mw-fit">{{$t("recHours")}}:</p>
              <p class="mainers font-s-16p">{{managerInfo.info.receptionHours}}</p>
            </div>
          </div>
        </div>

        <!-- 1 Stop -->

        <!-- 2 Start -->

        <div class="w-100 mt-24 gap-12">
          <Icons
            size="middle"
            icon="phone"
          />
          <div class="w-100 fd-c gap-12 justify-c">
            <div class="w-100 gap-12">
              <p class="helpers font-s-16p mw-fit">{{$t("phoneNumber")}}:</p>
              <a :href="'tel:' + managerInfo.info.phone" class="mainers font-s-16p">{{managerInfo.info.phone}}</a>
            </div>
          </div>
        </div>

        <!-- 2 Stop -->

        <!-- 3 Start -->

        <div class="w-100 mt-24 gap-12">
          <Icons
            size="middle"
            icon="mail"
          />
          <div class="w-100 fd-c gap-12 justify-c">
            <div class="w-100 gap-12">
              <p class="helpers font-s-16p mw-fit">{{$t("email")}}:</p>
              <a :href="'mailto:' + managerInfo.info.email" class="mainers font-s-16p">{{managerInfo.info.email}}</a>
            </div>
          </div>
        </div>

        <!-- 3 Stop -->

      </div>
    </div>

    <div class="w-100">
      <div class="table-simple pad-48p ovr-hidden box-brb bor-r-20 mt-60 gap-48">
        <div
          v-for="(info, idx) in managerInfo.additional"
          :key="idx"
          class="w-100 d-f fd-c gap-24"
        >
          <h4 class="commonT colorGreyD">{{info.title}}</h4>
          <p class="commonD" v-html="info.txt"></p>
        </div>
      </div>
    </div>

    <breadCrumbs
      :currentPage="managerInfo.name"
      :prevPageName="name[$i18n.locale]"
      :prevPageLink="'/management'"
    />  
  </div>
</template>

<script>
import breadCrumbs from '@/components/breadCrumbs.vue'
import Icons from '@/components/icons.vue'

export default {
  name: 'managersSinglePage',

  components: {
    breadCrumbs, Icons
  },

  data() {
    return {
      title: this.$route.params.id,
      name: {
        uz: 'Rahbariyat',
        uzcyr: 'Раҳбарият',
        ru: 'Руководство',
        en: 'Management',
      },
    }
  },

  computed: {
    managerInfo() {
      const allmanagers =  this.$store.state.managers

      return allmanagers.find(manager => manager.id == this.$route.params.id)
    }
  }
}
</script>

<style>

</style>