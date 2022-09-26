<template>
  <div class="searchModal">
    
    <div class="w-100 justify-r">
      <Icons
        @click.native="closeModal"
        class="cur-ptr"
        icon="searchClose"
        size="48"
        color="white"
      />
    </div>

    <div class="w-100 justify-c mt-12">
      <h2 class="grandTitle colorWhite">Поиск по сайту</h2>
    </div>

    <div class="w-100 gap-12 mt-24">
      
      <Icons
        icon="search"
        size="48"
        color="white"
      />
      
      <input
        v-model="search"
        class="searchModalInput"
        type="text"
        placeholder="Поиск"
      >

      <button
        class="searchModalBtn"
      >
        <span>Click me</span>
      </button>
    </div>

    <div class="w-100 mt-12">
      <hr class="modalDivider"/>
    </div>

    <!-- Search Results Start -->

    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">Количество результатов поиска:</p>
      <p class="commonP line-h-30 bold colorWhite">1 694</p>
    </div>

    <div class="w-100 fd-c gap-24 mt-60">
      
      <div class="w-100 fd-c gap-12">
        <h2 class="commonT colorWhite">This is title</h2>
        <p class="commonP colorGreyD line-h-20">This is description</p>

        <div class="w-100 gap-48 mt-12">
          <p class="commonP colorGreyD line-h-30">Ссылка на результат поиска:</p>
          <a class="resultLink commonP line-h-30">.../news/3164-peredvijnaya-vystavka-puteshestvie</a>
        </div>

        <hr class="divider w-100">
      </div>

    </div>

    <!-- Search Results Stop -->

    <paginate
      :currentPageNumber="curPage"
      :pages="pages"
    />

  </div>
</template>

<script>
import Icons from '@/components/icons.vue'
import paginate from '@/components/paginate.vue';

export default {
  name: 'searchWindowModal',

  components: {
    Icons,
    paginate
  },

  data() {
    return {
      search: '',
      curPage: 7,
      pages: 144
    }
  },

  computed: {
    filteredNames() {
      return this.names.filter(search => {
        return search
            .toLowerCase()
            .includes(`<span class="highlight"> ${this.searchNameInput.toLowerCase()} </span>`);
      });
    }
  },

  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style>

</style>