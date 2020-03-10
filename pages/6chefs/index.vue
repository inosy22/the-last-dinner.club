<template>
  <div>
    <GlobalHeaderFlex />
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <div class="top-image-wrapper">
          <div class="top-image-overlay" />
          <div class="top-image-inner-text">
            <p class="top-image-inner-header">「晩餐会」</p>
            <p>優秀な成績を収めれば料理人としての将来が約束され、</p>
            <p>結果を残せなければ日の目を見ることはほぼない</p>
            <p>という若い料理人にとっての関門。</p>
            <br />
            <p>今宵晩餐会に集まった料理人は6人。</p>
            <p>しかしそこに待ち受けていたのは・・・</p>
            <br />
            <p>喰うか喰われるか、料理するかされるか、</p>
            <p>料理人たちと協力したり、探索しながら</p>
            <p>晩餐会の裏に隠された秘密を暴く。</p>
            <p>ホラーアドベンチャー×ノベル ゲーム。</p>
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
            link="/6chefs/introduction"
          />
        </v-row>
      </v-flex>
      <v-flex xs6 sm3 pa-3>
        <v-row justify="center">
          <CircleIconLink
            icon="mdi-file-document-outline"
            title="説明書"
            link="/6chefs/manual"
          />
        </v-row>
      </v-flex>
      <v-flex xs6 sm3 pa-3>
        <v-row justify="center">
          <CircleIconLink
            icon="mdi-star"
            title="攻略のヒント"
            link="/6chefs/hint"
          />
        </v-row>
      </v-flex>
      <v-flex xs12 sm6 pa-2>
        <v-row justify="center">
          <div class="embed-responsive embed-responsive-4by3">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/uj_5n0Fnhjw"
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
  background-image: url('/img/6chefs/title.png');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 500px;
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
