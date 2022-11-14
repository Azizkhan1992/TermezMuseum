<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="volunteers-program"
    />

    <!-- Modal Window -->

    <volunteering
      v-if="modalIsOpen"
      @closeModal="closeModal"
    />

    <!-- Modal Window -->


    <div class="w-100">
      <h4 v-html="description" class="commonD"></h4>
    </div>

    <div class="w-100 mt-80">
      <h4 class="commonT colorGreyD">{{$t("expectEvents")}}</h4>
    </div>

    <!-- Events List Start -->

    <div
      v-if="eventsList !== 'no events'"
      class="w-100 fd-c mt-48"
    >
      
      <hr class="divider">
      
      <div class="w-100 fd-c">
        <div class="w-100 gap-24 pad-t-24p align-c pad-b-24p">
          
          <div class="w-50">
            <h4 class="commonT colorGreyD">Встреча с заместителем директора по научной работе Института востоковедения Российской Академии Наук</h4>
          </div>

          <div class="w-3 d-f fd-c gap-24">
            <div class="w-a d-f fd-r align-c gap-24">
              <Icons
                icon="calendar"
                size="middle"
              />
              <div class="w-a d-f fd-r gap-12">
                <p class="helpers">22 июнь 2022г</p>
                <Icons
                  icon="tailArrRight"
                  size="sm"
                />
                <p class="helpers">30 июнь 2022г</p>
              </div>
            </div>

            <div class="w-a d-f fd-r align-c gap-24">
              <Icons
                icon="location"
                size="middle"
              />
              <p class="helpers">г. Ташкент</p>
            </div>
          </div>

          <button
            @click="openModal()"
            class="w-3 prim"
          >
            <span>{{txt[$i18n.locale]}}</span>
          </button>

        </div>

        <hr class="divider">
      
      </div>
    
    </div>

    <!-- Events List Stop -->


    <!-- No Events Start -->

    <div class="w-100 mt-60">
      <h2 class="grandTitle line-h-68 txt-align-l">{{$t("noEvents")}}</h2>
    </div>



    <paginate
      :currentPageNumber="curPage"
      :pages="pages"
    />

    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import Icons from '@/components/icons.vue'
import paginate from '@/components/paginate.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';
import volunteering from '../modalWindows/volunteering.vue';

export default {
  name: 'volunteersProgramPage',

  components: {
    pageTitleAnimated, Icons, paginate, breadCrumbs, volunteering
  },

  data() {
    return {
      modalIsOpen: false,
      title:{
        language_uzlatin: 'Ko\'ngillilar',
        language_uzCyrillic: 'Кўнгиллилар',
        language_ru: 'Волонтерам',
        language_en: 'Volunteers',
      },
      txt:{
        language_uzCyrillic: 'Кўнгилли бўлиш',
        language_ru: 'Стать волонтером',
        language_uzlatin: 'Ko\'ngilli bo\'lish',
        language_en: 'Become a volunteer',
      },

      curPage: 2,
      pages: 122,

      eventsList: 'no events',

      description: `
        Волонтерство в Музее Археологии – прекрасный способ найти единомышленников, познакомиться с уникальными экспозициями Музея Археологии и внести свой вклад в дело сохранения культурного наследия Узбекистана. 
        <br/><br/>
        Волонтеры Музея Археологии — это возможность: 
        <br/><br/>
        пообщаться с посетителями музея
        <br/>
        получить опыт организации и проведения массовых мероприятий 
        <br/>
        участвовать в развитии музея, предлагая и реализуя собственные проекты 
        <br/>
        получить языковую практику в общении с посетителями из разных стран 
        <br/>
        посещать основные экспозиции и временные выставки Музея Археологии 
        <br/>
        взглянуть на музей «изнутри» и стать частью большой дружной команды 
        <br/><br/>
        Ежегодно в Музее Археологии реализуются свыше 800 различных мероприятий разного уровня — от выставок до международных форумов и слетов. На каждом мероприятии участвуют волонтеры разных возрастов, профессий и социальных категорий: от школьников и студентов ведущих вузов Узбекистана до представителей Серебряного возраста (волонтеров старше 50-ти лет). Активно участвуя в мероприятиях Музея, волонтеры получают возможность посетить филиалы Музея Археологии, расположенные в различных регионах нашей страны: Бухара, Андижан, Самарканд и т.д. Во время выездных мероприятий волонтеры знакомятся с музейным пространством наших филиалов и музеев-партнеров, а также участвуют в экскурсиях и обмениваются опытом. 
        <br/><br/>
        Мы очень хотим, чтобы у нас в Музее вам стало еще интереснее. 
        <br/><br/>
        Музей Археологии запускает новый проект "Культурные люди", который направлен на вовлечение школьников и студентов, а также пожилых людей в добровольческую деятельность, для участия в мероприятиях Музея Археологии. С помощью платформы ООО "The Voluntourist" будет проходить заранее набор неравнодушных граждан, которые хотят продемонстрировать тот или иной свой талант в рамках мероприятий Музея Археологии. Это будет затрагивать абсолютно все области культурной деятельности, от проведения мастер-классов для детей до организации целых мероприятий совместно с сотрудниками музея. Участники данного проекта смогут прикоснуться к работе культурного сотрудника и увидеть все подготовительные процессы к мероприятиям. О наборе участников проекта будет известно за неделю до каждого мероприятия и также будет перечислен перечень событий, в которых можно будет принять участие на платформе ООО "The Voluntourist".
      `,
    }
  },

  methods: {
    closeModal() {
      this.modalIsOpen = false
    },

    openModal() {
      this.modalIsOpen = true
    }
  }
}
</script>

<style>

</style>