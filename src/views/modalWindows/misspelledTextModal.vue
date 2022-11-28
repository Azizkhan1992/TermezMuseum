<template>
  <div class="modalBack" @click="closeMe">
    <div class="misspelled-content">
      <div class="misspelled-wrapper">
        <Icons
          @click.native="closeMe"
          icon="closeFilled"
          size="48"
          color="blue"
          class="closeModalIcon"
        />

        <div class="w-100 d-f justify-c">
          <p class="midP colorPrim t-align-c">{{ $t("modalT") }}</p>
        </div>

        <div class="w-100 d-f fd-c gap-24 mt-64">
          <p class="colorPrim">{{ $t("misspelledP") }}</p>
          <p>{{misspelledText.path}}</p>
        </div>

        <div class="w-100 d-f fd-c gap-24 mt-48">
          <div class="w-100 d-f fd-c gap-4">
            <label class="colorPrim line-h-20">{{
              $t("feedbacksSubject")
            }}</label>
            <div class="pseudoTextarea">
              <p>{{misspelledText.text}}</p>
            </div>
          </div>

          <div class="w-100 d-f fd-c gap-4">
            <label class="colorPrim line-h-20">{{
              $t("feedbacksSubject")
            }}</label>
            <textarea
              v-model="coreectedText"
              class="regularArea"
              :placeholder="this.$t('enterMisspelledTextMistake')"
            >
            </textarea>
          </div>
        </div>

        <div class="w-100 d-f justify-c">
          <button class="w-50 primBtn mt-48">
            <span>{{ $t("send") }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icons from "@/components/icons.vue";
export default {
  name: "misspelledTextCorrectingModal",
  components: { Icons },
  props: {
    misspelledText: {
        type: Object,
        default: () => {}
    }
  },
  data() {
    return {
      coreectedText: ''
    }
  },

  methods: {
    closeMe() {
      this.$emit('closeMe')
    },
  }
};
</script>
