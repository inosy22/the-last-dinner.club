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
        <div class="top-image-overlay" />
        <div class="top-image-inner-text">
          <p class="top-image-inner-header">最後の晩餐とは</p>
          <p>同人ゲーム制作サークルです</p>
          <p>フリーホラーゲームを中心に</p>
          <p>Unity/Cocos2d-xなどを利用して</p>
          <p>ハイクオリティのゲームを</p>
          <p>制作することを目指しています</p>
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
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-image: url('/img/6chefs_top.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 300px;
}

.top-image-overlay {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 0;
}

.top-image-inner-text {
  text-align: center;
  color: white;
  font-weight: bold;
  z-index: 1;
}

.top-image-inner-header {
  font-size: 1.5em;
  color: orange;
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
