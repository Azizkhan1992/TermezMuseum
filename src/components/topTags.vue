<template>
  <div class="topTags">
    <p>Tags</p>

    <button
      class="tag-btn"
      v-for="tag in topTags"
      :key="tag.id"
    >
      <span>{{tag.name}}</span>
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