<template>
  <div class="topTags">
    <p>{{$t("tags")}}</p>

    <button
      class="tag-btn"
      v-for="tag in topTags"
      :key="tag.id"
    >
      <span>{{tag.name[$i18n.locale]}}</span>
    </button>


  </div>
</template>

<script>
export default {
  name: 'topTags',

  props: {
    topTags: Array
  }
}
</script>

<style>

</style>