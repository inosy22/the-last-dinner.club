<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 pa-1>
      <v-row :justify="$vuetify.breakpoint.xs ? 'center' : 'start'">
        <a href="/">
          <img src="/img/the_last_dinner_logo.png" height="90px" />
        </a>
      </v-row>
    </v-flex>
    <v-flex xs12 sm6 pa-3>
      <v-row :justify="$vuetify.breakpoint.xs ? 'center' : 'end'">
        <CircleIconLink
          icon="mdi-silverware-fork-knife"
          title="6人の料理人"
          link="/6chefs"
        />
        <CircleIconLink
          icon="mdi-airplane"
          title="6人の料理人2"
          link="/6chefs2"
        />
        <CircleIconLink
          icon="mdi-twitter"
          title="お問い合わせ"
          link="https://twitter.com/the_last_dinner"
          to-new-window
        />
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import CircleIconLink from '@/components/CircleIconLink'

export default defineComponent({
  components: {
    CircleIconLink
  }
})
</script>
