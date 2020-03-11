<template>
  <div>
    <GlobalHeaderFlex />
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <div class="top-image-wrapper">
          <div class="top-image-overlay" />
          <div class="top-image-inner-text">
            <p class="top-image-inner-header">6人の料理人と隻眼の少女2</p>
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
      <GameHeader6chefs2 />
      <v-flex xs12 sm3 />
      <v-flex xs12 sm6 pa-3>
        <v-row justify="center">
          <v-card style="width:100%">
            <v-card-title style="text-aling: center">
              【PV】6人の料理人と隻眼の少女2
            </v-card-title>
            <v-card-text>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/oGGY-QaC2eM"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-card-text>
          </v-card>
        </v-row>
      </v-flex>
      <v-flex xs12 sm3 />
      <v-flex xs12 sm6 pa-3>
        <h2 class="header">ゲーム概要</h2>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr v-for="item in table" :key="item.key">
                <td>{{ item.key }}</td>
                <td>{{ item.value }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-flex>
      <v-flex xs12 sm6 pa-3>
        <h2 class="header">ゲーム更新履歴</h2>
        <v-card style="overflow: scroll; height: 450px;">
          <v-card-text>
            <NewsItem date="2017/11/02" color="red" type="Ver2.0">
              <p>
                セット版「6人の料理人と隻眼の少女〜Full cource〜」の提供開始
              </p>
            </NewsItem>
            <NewsItem date="2016/08/09" color="red" type="Ver1.4">
              <ul>
                <li>連打イベントでPCスペックによっては落ちる問題を改善</li>
              </ul>
            </NewsItem>
            <NewsItem date="2017/04/02" color="red" type="Ver1.3">
              <ul>
                <li>エンディングの表現修正</li>
                <li>キャラクター及びイベントグラフィックの修正</li>
                <li>マップの修正</li>
                <li>その他細かいバグの修正</li>
              </ul>
            </NewsItem>
            <NewsItem date="2017/03/04" color="red" type="Ver1.2">
              <ul>
                <li>
                  スペックの低いPCでエンディングが正しく表示されない状態に対応
                </li>
              </ul>
            </NewsItem>
            <NewsItem date="2017/03/03" color="red" type="Ver1.1">
              <p>公式サイトおよびふりーむでのダウンロード版の提供開始</p>
              <ul>
                <li>キャラクター絵・イベント絵を追加</li>
                <li>装備すると効果を発揮するアイテムを2種類追加</li>
                <li>オープニング動画の追加</li>
                <li>トロフィーコンプリート特典追加</li>
                <li>その他細かい表現などの修正</li>
              </ul>
            </NewsItem>
            <NewsItem date="2016/12/29" color="red" type="Ver1.0β">
              コミックマーケット91で先行販売
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

.header {
  padding: 3px;
}
</style>

<script>
import Vue from 'vue'
import VueCompositionApi, { defineComponent } from '@vue/composition-api'
import CircleIconLink from '@/components/CircleIconLink'
import NewsItem from '@/components/NewsItem'
import GlobalHeaderFlex from '@/components/GlobalHeaderFlex'
import GameHeader6chefs2 from '@/components/GameHeader6chefs2'

Vue.use(VueCompositionApi)

export default defineComponent({
  components: {
    CircleIconLink,
    NewsItem,
    GlobalHeaderFlex,
    GameHeader6chefs2
  },
  setup() {
    const table = [
      { key: 'タイトル', value: '6人の料理人と隻眼の少女2' },
      { key: 'バージョン', value: '2.1 (2018/05/03)' },
      { key: 'ジャンル', value: 'ホラーアクションADV' },
      { key: '対象年齢', value: '15歳以上 ※暴力的な表現あり' },
      { key: 'プレイ人数', value: '1人' },
      { key: 'プレイ時間', value: '1プレイ約2時間' },
      { key: 'エンディング数', value: '2つ' },
      { key: 'ハード', value: 'PC' },
      { key: 'OS', value: 'Windows' },
      { key: '開発環境', value: 'C++/Cocos2d-x3.10' },
      { key: '必要ランタイム', value: 'なし' }
    ]
    return {
      table
    }
  }
})
</script>
