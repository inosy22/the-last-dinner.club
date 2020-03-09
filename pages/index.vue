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
      <div class="top-image-wrapper">
        <img class="top-image" src="/img/6chefs_top.jpg" />
        <div class="top-image-overlay" />
        <div class="top-image-inner">
          最後の晩餐とは
        </div>
      </div>
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

<style scoped>
.top-image-wrapper {
  position: relative;
}

.top-image-inner {
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: 2em;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.top-image {
  width: 100%;
}

.top-image-overlay {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
}
</style>

<script>
import { defineComponent } from '@vue/composition-api'
import CircleIconLink from '@/components/CircleIconLink'

export default defineComponent({
  components: {
    CircleIconLink
  }
})
</script>
