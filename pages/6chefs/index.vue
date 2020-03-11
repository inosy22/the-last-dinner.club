<template>
  <div>
    <GlobalHeaderFlex />
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <div class="top-image-wrapper">
          <div class="top-image-overlay" />
          <div class="top-image-inner-text">
            <p class="top-image-inner-header">6人の料理人と隻眼の少女</p>
            <p>「晩餐会」</p>
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
      <GameHeader6chefs />
      <v-flex xs12 sm3 />
      <v-flex xs12 sm6 pa-3>
        <v-row justify="center">
          <v-card style="width: 100%">
            <v-card-title style="text-align: center">
              【PV】6人の料理人と隻眼の少女
            </v-card-title>
            <v-card-text>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/uj_5n0Fnhjw"
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
            <NewsItem date="2016/06/28" color="red" type="Ver1.3">
              <ul>
                <li>操作性の改善(方向転換機能を削除)</li>
                <li>誤字脱字の修正</li>
              </ul>
            </NewsItem>
            <NewsItem date="2016/06/18" color="red" type="Ver1.2">
              <ul>
                <li>Windows版文字バグの修正</li>
                <li>TRUEエンドのストーリーを修正</li>
                <li>ゲーム内の一部イベントの演出を修正</li>
                <li>画面サイズ設定を追加</li>
                <li>キーコンフィグを追加</li>
                <li>トロフィーコンプリート特典を追加</li>
              </ul>
            </NewsItem>
            <NewsItem date="2016/01/05" color="red" type="Ver1.1">
              <p>公式サイトおよびふりーむでのダウンロード版の提供開始</p>
              <ul>
                <li>
                  Windows版インストーラのデフォルトディレクトリをProgram
                  Filesへ変更
                </li>
                <li>一部イベントのメッセージ表現を修正</li>
                <li>一部グラフックの差し替え</li>
                <li>その他細かい不具合を修正</li>
              </ul>
            </NewsItem>
            <NewsItem date="2015/12/31" color="red" type="Ver1.0">
              コミックマーケット89限定版として先行販売
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
  background-image: url('/img/6chefs/title.png');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 550px;
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
import GameHeader6chefs from '@/components/GameHeader6chefs'

Vue.use(VueCompositionApi)

export default defineComponent({
  components: {
    CircleIconLink,
    NewsItem,
    GlobalHeaderFlex,
    GameHeader6chefs
  },
  setup() {
    const table = [
      { key: 'タイトル', value: '6人の料理人と隻眼の少女' },
      { key: 'バージョン', value: '2.1 (2018/05/03)' },
      { key: 'ジャンル', value: 'ホラーアクションADV' },
      { key: '対象年齢', value: '15歳以上 ※暴力的な表現あり' },
      { key: 'プレイ人数', value: '1人' },
      { key: 'プレイ時間', value: '1プレイ約2時間' },
      { key: 'エンディング数', value: '3つ' },
      { key: 'ハード', value: 'PC' },
      { key: 'OS', value: 'MacOS,Windows' },
      { key: '開発環境', value: 'C++/Cocos2d-x3.10' },
      { key: '必要ランタイム', value: 'なし' }
    ]
    return {
      table
    }
  }
})
</script>
