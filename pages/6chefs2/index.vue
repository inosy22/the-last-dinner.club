<template>
  <div>
    <GlobalHeaderFlex />
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <div class="top-image-wrapper">
          <div class="top-image-overlay" />
          <div class="top-image-inner-text">
            <p class="top-image-inner-header">悲劇の「晩餐会」から1年</p>
            <p>あの悲劇の晩餐会から一年</p>
            <p>今度の6人の料理人はみんなで海外旅行！</p>
            <p>しかし、彼らの旅が何事もなく終わるはずもなく...</p>
            <p>全ての謎が今明かされる！！！</p>
            <p>改めて問おう。</p>
            <p>君には・・・</p>
            <p>食べられる覚悟はあるかい・・・？</p>
          </div>
        </div>
      </v-flex>
      <v-flex xs6 sm3 pa-3>
        <v-row justify="center">
          <CircleIconLink
            icon="mdi-download"
            title="ダウンロード"
            link="https://www.freem.ne.jp/win/game/16125"
          />
        </v-row>
      </v-flex>
      <v-flex xs6 sm3 pa-3>
        <v-row justify="center">
          <CircleIconLink
            icon="mdi-gamepad-variant"
            title="ゲーム紹介"
            link="/6chefs2/introduction"
          />
        </v-row>
      </v-flex>
      <v-flex xs6 sm3 pa-3>
        <v-row justify="center">
          <CircleIconLink
            icon="mdi-file-document-outline"
            title="説明書"
            link="/6chefs2/manual"
          />
        </v-row>
      </v-flex>
      <v-flex xs6 sm3 pa-3>
        <v-row justify="center">
          <CircleIconLink
            icon="mdi-star"
            title="攻略のヒント"
            link="/6chefs2/hint"
          />
        </v-row>
      </v-flex>
      <v-flex xs12 sm6 pa-2>
        <v-row justify="center">
          <div class="embed-responsive embed-responsive-4by3">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/oGGY-QaC2eM"
              frameborder="1"
              allowfullscreen
            ></iframe>
          </div>
        </v-row>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
.top-image-wrapper {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-image: url('/img/6chefs2/title.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
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
import NewsItem from '@/components/NewsItem'
import GlobalHeaderFlex from '@/components/GlobalHeaderFlex'

export default defineComponent({
  components: {
    CircleIconLink,
    NewsItem,
    GlobalHeaderFlex
  }
})
</script>
