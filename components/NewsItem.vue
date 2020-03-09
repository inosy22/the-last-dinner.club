<template>
  <div>
    <h3>
      {{ date }}
      &nbsp;
      <v-chip label x-small :color="color">
        {{ type }}
      </v-chip>
    </h3>
    <p>
      <slot />
    </p>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    date: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
})
</script>
