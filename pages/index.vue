<template>
  <div>
    <GlobalHeaderFlex />
    <v-layout row wrap>
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
      <v-flex xs12 sm6 pa-3>
        <h1 class="header">制作ゲーム</h1>
        <a href="https://www.freem.ne.jp/win/game/16125">
          <img
            src="/img/freem_13_programing_gold.jpg"
            alt="6chefs_fullcourse"
            width="100%"
          />
        </a>
        <a href="/6chefs2">
          <img src="/img/6chefs2_banner.png" alt="6chefs2" width="100%" />
        </a>
        <a href="/6chefs">
          <img src="/img/6chefs_banner.png" alt="6chefs" width="100%" />
        </a>
      </v-flex>
      <v-flex xs12 sm6 pa-3>
        <h1 class="header">NEWS</h1>
        <v-card style="overflow: scroll; height: 450px;">
          <v-card-text>
            <NewsItem date="2018/05/02" color="green" type="リリース">
              「6人の料理人と隻眼の少女～Full
              course～」Ver.1.2の提供を開始しました。
            </NewsItem>
            <NewsItem date="2018/04/26" color="red" type="お知らせ">
              「6人の料理人と隻眼の少女～Full course～」が
              <a href="https://www.freem.ne.jp/contest/fgc/13">
                第13回ふりーむ！ゲームコンテスト
              </a>
              にて、 プログラミング部門金賞を受賞いたしました！
            </NewsItem>
            <NewsItem date="2017/11/30" color="green" type="リリース">
              「6人の料理人と隻眼の少女～Full
              course～」Ver.1.1の提供を開始しました。
            </NewsItem>
            <NewsItem date="2017/11/02" color="green" type="リリース">
              「6人の料理人と隻眼の少女～Full
              course～」Ver.1.0の提供を開始しました。
            </NewsItem>
            <NewsItem date="2017/04/02" color="green" type="リリース">
              続編「6人の料理人と隻眼の少女2」Ver.1.3の提供を開始しました
            </NewsItem>
            <NewsItem date="2017/03/04" color="green" type="リリース">
              続編「6人の料理人と隻眼の少女2」Ver.1.2の提供を開始しました
            </NewsItem>
            <NewsItem date="2017/03/03" color="green" type="リリース">
              続編「6人の料理人と隻眼の少女2」Ver.1.1(ダウンロード版)の提供を開始しました
            </NewsItem>
            <NewsItem date="2016/12/29" color="red" type="イベント">
              続編「6人の料理人と隻眼の少女2」Ver.1.0(β版)をコミケ先行販売を行いました。
            </NewsItem>
            <NewsItem date="2016/12/29" color="primary" type="更新">
              ホームページに続編「6人の料理人と隻眼の少女2」の情報を追加しました。
            </NewsItem>
            <NewsItem date="2016/08/09" color="green" type="リリース">
              「6人の料理人と隻眼の少女」Ver.1.4の提供を開始しました。
            </NewsItem>
            <NewsItem date="2016/06/28" color="green" type="リリース">
              「6人の料理人と隻眼の少女」Ver.1.3の提供を開始しました。
            </NewsItem>
            <NewsItem date="2016/06/18" color="green" type="リリース">
              「6人の料理人と隻眼の少女」Ver.1.2の提供を開始しました。
            </NewsItem>
            <NewsItem date="2016/06/17" color="primary" type="更新">
              最後の晩餐公式ホームページのリニューアルを行いました！
            </NewsItem>
            <NewsItem date="2016/01/05" color="green" type="リリース">
              「6人の料理人と隻眼の少女」Ver.1.1(ダウンロード版)の提供を開始しました。
            </NewsItem>
            <NewsItem date="2016/01/04" color="primary" type="更新">
              「6人の料理人と隻眼の少女」の説明書等のページを追加しました。
            </NewsItem>
            <NewsItem date="2015/12/31" color="red" type="イベント">
              コミックマーケット89で「6人の料理人と隻眼の少女」Ver1.0(コミケ限定版)を販売しました。
            </NewsItem>
            <NewsItem date="2015/12/30" color="primary" type="更新">
              最後の晩餐公式ホームページを正式にOPENしました！
            </NewsItem>
          </v-card-text>
        </v-card>
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

.header {
  padding: 3px;
}
</style>

<script>
import { defineComponent } from '@vue/composition-api'
import NewsItem from '@/components/NewsItem'
import GlobalHeaderFlex from '@/components/GlobalHeaderFlex'

export default defineComponent({
  components: {
    NewsItem,
    GlobalHeaderFlex
  }
})
</script>
