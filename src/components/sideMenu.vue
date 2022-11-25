<template>
  <div
    @click.self="closeMenu"
    class="sideMenu"
  >
    <div class="menuBar" >
      <div class="w-100 justify-r">
        <div
          @click="closeMenu"
          class="closeBtn"
        >
          <Icons
            icon="closeCircle"
            size="middle"
          />
        </div>
      </div>

        <div class="langSwitcher w-100 mb-32">
          
              <p
              class="lang"
                @click="changeLang(lang)"
                v-for="lang in locales"
                :key="lang.id"
                :class="{active:lang.lang==$i18n.locale}"
              >
                {{lang.name}}
              </p>
        </div>
              <div class="tablet-icon-btn">
                <button
                    class="icon-btn"
                  >
                    <Icons
                      icon="glasses"
                      size="24"
                    />
                  </button>

                  <button
                    class="icon-btn"
                    @click="goToSitemap"
                  >
                    <Icons
                      icon="sitemap"
                      size="24"
                    />
                  </button>

                  <button
                    class="icon-btn"
                  >
                    <Icons
                      icon="vr"
                      size="24"
                    />
                  </button>
                  <button
                    class="icon-btn"
                  >
                    <Icons
                      icon="profile"
                      size="24"
                    />
                  </button>
              </div>
              <div class="mobile-icon-btn">
                <div class="mobile-icon">
                  <button
                    class="icon-btn"
                  >
                    <Icons
                      icon="glasses"
                      size="24"
                    />
                  </button>

                  <button
                    class="icon-btn"
                    @click="goToSitemap"
                  >
                    <Icons
                      icon="sitemap"
                      size="24"
                    />
                  </button>

                  <button
                    class="icon-btn"
                  >
                    <Icons
                      icon="vr"
                      size="24"
                    />
                  </button>
                  <button
                    class="icon-btn"
                  >
                    <Icons
                      icon="profile"
                      size="24"
                    />
                  </button>
                </div>
                  <div class="search__phone">
                    <div
                      @click="openSearch"
                      class="searchInput"
                    >
                      <Icons
                        icon="search"
                        size="24"
                      />

                      <p class="placeholder">{{$t('search')}}...</p>
                    </div>
                      <a href="tel: +998900073118"
                        class="icon-txt-btn"
                      >
                        <Icons
                          icon="phone"
                          size="middle"
                        />
                        <span>76 224-30-17</span>
                      </a>
                    <button
                      class="accent-btn"
                    >
                      <span>{{$t('onTicket')}}</span>
                    </button>
                  </div>
              </div>
            <div
              v-for="menu in menuLinks"
              :key="menu?.id"
              class="w-100 mt-24 fd-c"
            >
              <div
                @click="switcher(menu?.id)"
                class="accordionBtn w-100 cur-ptr gap-24 align-c backgrnd-white"
                :class="openAccrdn == menu.id ? 'open' : ''"
              >
                <p v-if="menu?.subMenu.length>0" class="commonP us-none colorGreyD bold">{{menu?.name[$i18n.locale]}}</p>
                <router-link @click.native="closeMenu" v-else tag="p" :to="menu.url" class="commonP us-none colorGreyD bold">{{menu?.name?.[$i18n.locale]}}</router-link>

                <Icons
                  class="ml-a"
                  icon="arrDown"
                  size="large"
                  v-if="menu?.category == 'section'"
                />
              </div>

              <div
                class="accordionContent w-100 fd-c"
                :class="openAccrdn == menu.id ? '' : 'closed'"
                :style="{height: hghts[menu.id - 1] + 'px'}"
              >
                <div :id="'faqAccr' + menu.id">
                  <router-link @click.native="closeMenu" tag="p" :to="item?.link" v-for="item,index in menu.subMenu" :key="index" v-html="item?.name?.[$i18n.locale]" class="commonD mt-24 mb-12 ml-24 ">
                  </router-link>
                </div>

              </div>
          
        <hr class="divider mt-12">
      </div>
    </div>

  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'sideMenuComponent',

  components: {
    Icons
  },

  data() {
    return {
      openAccrdn: 1,
      hghts: [],
      
      menuLinks: [],
      locales: [
        {id: 1, lang: 'language_uzlatin', name: `O‘zb`},
        {id: 2, lang: 'language_uzCyrillic', name: 'Ўзб'},
        {id: 3, lang: 'language_ru', name: 'Рус'},
        {id: 4, lang: 'language_en', name: 'Eng'},
      ],

    }
  },

  methods: {
    getMobileMenu(){
      this.$api.get('/menu')
      .then(resp=> {
        this.menuLinks = resp.data.menuDocument
        for(let i=1; i<= this.menuLinks.length; i++){
          this.menuLinks[i-1].id = i
        }
        this.getDivsHeight()
      }).catch(err => {console.log(err)})
    },
    closeMenu() {
      this.$emit('closeMenu')
    },
    switcher(id) {
      // console.log(id)
      if(this.openAccrdn !== id) {
        this.openAccrdn = id
      } else this.openAccrdn = 0
    },
    getDivsHeight() {
      const len = this.menuLinks.length
      let arr = []

      for(let i = 1; i <= len; i++) {
        let id = 'faqAccr' + i
        arr.push(document.getElementById(id)?.clientHeight)
      }

      
      this.hghts = arr
    },
    changeLang(val){
      this.$i18n.locale = val.lang
      localStorage.lang = this.$i18n.locale
        this.$router.push({
          query: {
        ...this.$route.query,
        lang: this.$i18n.locale,
      },
      });
      this.$router.go()
    },
    openSearch() {
      this.$emit('openSearch')
    },
    
    goToSitemap() {
      this.$router.push('/sitemap')
    },
  },
  mounted(){
    this.getMobileMenu()
    this.getDivsHeight()

  }
}
</script>

<style lang="scss">
.lang{
  cursor: pointer;

  &.active{
    cursor: text;
  }
}

</style>