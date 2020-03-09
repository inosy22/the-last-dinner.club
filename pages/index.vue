<template>
  <v-layout row wrap>
    <v-flex
      xs12
      sm6
      :style="'text-aligin: ' + $vuetify.breakpoint.xs ? 'center' : 'left'"
    >
      <a href="/">
        <img src="/img/the_last_dinner_logo.png" height="90px" />
      </a>
    </v-flex>
    <v-flex
      xs12
      sm6
      :style="'text-aligin: ' + $vuetify.breakpoint.xs ? 'center' : 'right'"
    >
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
    </v-flex>
    <v-flex xs12 sm12>
      <img src="/img/6chefs_top.jpg" width="100%" />
    </v-flex>
    <v-flex xs12 sm6>
      <blockquote>
        <p class="font20">制作ゲーム</p>
      </blockquote>
      <div class="pad">
        <a href="/6chefs">
          <img src="/img/6chefs_banner.png" width="100%" />
        </a>
      </div>
      <div class="pad">
        <a href="/6chefs2">
          <img src="/img/6chefs2_banner.png" width="100%" />
        </a>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { createComponent } from '@vue/composition-api'
import CircleIconLink from '@/components/CircleIconLink'

export default createComponent({
  components: {
    CircleIconLink
  }
})
</script>
