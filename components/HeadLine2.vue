<template>
  <h2 class="head-line">
    {{ title }}
  </h2>
</template>

<style scoped>
.head-line {
  background-color: #8b0000;
  padding: 0.4em;
  padding-left: 1em;
  margin: 15px -0.5%; /* -2%;*/
  width: 100%;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  font-size: 1.2em;
}
</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>
