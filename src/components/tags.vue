<template>
  <div class="tag">
    <p
      class="tagName"
    >
      {{tagsName}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'tagButton',

  props: {
    tagsName: String,
  }
}
</script>

<style>

</style>