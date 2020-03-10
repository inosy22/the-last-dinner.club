<template>
  <div>
    <GlobalHeaderFlex />
    <v-layout row wrap>
      <v-flex xs12 sm12 pa-2>
        <h1>攻略のヒント - 6人の料理人と隻眼の少女2</h1>
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <h2 style="color: orange">
          現在復旧中です。<br />復旧までお待ちください。
        </h2>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import GlobalHeaderFlex from '@/components/GlobalHeaderFlex'

export default defineComponent({
  components: {
    GlobalHeaderFlex
  }
})
</script>
