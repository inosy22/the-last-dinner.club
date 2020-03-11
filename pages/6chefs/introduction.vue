<template>
  <div>
    <GlobalHeaderFlex />
    <v-layout row wrap>
      <!-- <v-flex xs12 sm12>
        <v-breadcrumbs :items="breadclumbs" />
      </v-flex> -->
      <v-flex xs12 sm12 pa-2>
        <h2>ゲーム紹介 - 6人の料理人と隻眼の少女</h2>
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="キャラクター紹介" />
      </v-flex>
      <v-flex
        v-for="character in characters"
        :key="character.name"
        xs12
        sm4
        pa-2
      >
        <v-card>
          <v-img :src="`/img/6chefs/characters/${character.image}`" />
          <v-card-title>
            {{ character.name }}
          </v-card-title>
          <v-card-text>
            <div>{{ character.specialty }}</div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="character.description" />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="ゲームシステム" />
      </v-flex>
      <v-flex v-for="system in systems" :key="system.title" xs12 sm4 pa-2>
        <v-card>
          <v-img :src="`/img/6chefs/systems/${system.image}`" />
          <v-card-title>
            {{ system.title }}
          </v-card-title>
          <v-card-text>
            <div>{{ system.summary }}</div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="system.description" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCompositionApi, { defineComponent } from '@vue/composition-api'
import GlobalHeaderFlex from '@/components/GlobalHeaderFlex'
import HeadLine2 from '@/components/HeadLine2'

Vue.use(VueCompositionApi)

export default defineComponent({
  components: {
    GlobalHeaderFlex,
    HeadLine2
  },
  setup() {
    const breadclumbs = [
      {
        text: '最後の晩餐',
        disabled: false,
        href: '/'
      },
      {
        text: '6人の料理人と隻眼の少女',
        disabled: false,
        href: '/6chefs'
      },
      {
        text: 'ゲーム紹介',
        disabled: true,
        href: '/6chefs/introduction'
      }
    ]
    const characters = [
      {
        name: '佐々木 孫一 (ササキ マゴイチ)',
        image: 'magoichi_stand.png',
        specialty: '料理：カレー',
        description:
          '全国にチェーン展開しているカレー屋「MaGo壱番屋」の看板メニュー「マゴイチカレー」のスパイス調合比率を考案した天才料理人。'
      },
      {
        name: '中山 撫子 (ナカヤマ ナデシコ)',
        image: 'nadeshiko_stand.png',
        specialty: '料理：和食',
        description:
          '５人姉弟の長女。中学生の頃に両親を亡くしてしまっているため、弟や妹の面倒も見ている。'
      },
      {
        name: '加藤 蘭丸 (カトウ ランマル)',
        image: 'ranmaru_stand.png',
        specialty: '料理：ジビエ料理',
        description:
          '狩猟専門誌「月間狩猟生活」で毎月ジビエ料理のレシピを掲載している。<br>動物とは素手で戦うことに拘っている。'
      },
      {
        name: '一色 真夏 (イッシキ マナカ)',
        image: 'manaka_stand.png',
        specialty: '料理：ジュース',
        description:
          'ジュース農家である実家に併設されている喫茶店の看板娘。<br>真夏のジュースを飲みに来る客も多く、日に何度も農園と喫茶店の往復をして忙しい日々を過ごしている。'
      },
      {
        name: '荒間田 暖暖 (アラマダ ダンダン)',
        image: 'dandan_stand.png',
        specialty: '料理：鍋',
        description:
          '全国にチェーン展開している鍋料理屋「鍋奉行」のオーナーシェフ。鍋料理にかける情熱は誰よりも強く、暖暖と鍋をする時には注意しなければならない。<br>「・・・ですぞ」が口癖。'
      },
      {
        name: '大善 吾郎 (ダイゼン ゴロウ)',
        image: 'daigoro_stand.png',
        specialty: '料理：鉄板料理',
        description:
          '全国の祭りで屋台を出して回っていることから「お祭り男」のアダ名が付いた。<br>しかし料理のクオリティは屋台のレベルを遥かに超えており、大善の料理目当てで祭り巡りをする人もいるという。'
      }
    ]
    const systems = [
      {
        title: '探索',
        image: 'search.png',
        summary: '隅々まで探索しよう！',
        description:
          'マップの様々な場所に探索ポイントを探索することで、アイテムを手に入れたり、ストーリーが進んだりするぞ！'
      },
      {
        title: '協力',
        image: 'friendship2.png',
        summary: '仲間と協力しよう！',
        description:
          '仲間と協力することで、晩餐会の謎を解き明かそう！<br>仲間が思わぬヒントをくれたり、仲良くなれば他の料理人の悩みや過去を知ることができるぞ！'
      },
      {
        title: '謎解き',
        image: 'mistery.png',
        summary: '謎解きに挑もう！',
        description:
          '立ちはだかる晩餐館の謎に挑もう！「探索」と「協力」が大きな助けとなるはずだ！'
      },
      {
        title: 'アクション',
        image: 'action.png',
        summary: '敵から逃げろ！',
        description:
          '現れる危険な敵から逃げよう！主人公にある限られたスタミナを温存しながら走って逃げたり、物陰に隠れることでやりすごすなど、その場に応じて対処しよう！'
      },
      {
        title: 'マルチエンディング',
        image: 'ending.png',
        summary: '晩餐会の謎を解き明かせ！',
        description:
          'TRUE END, MEDIUM END, BAD ENDの3つのエンディングと、最大12通りのストーリー分岐が存在する！仲間との協力が晩餐会の真の謎へ迫る鍵となる！'
      },
      {
        title: 'やり込み機能',
        image: 'trophy.png',
        sumary: 'トロフィーを集めよう！',
        description:
          '条件に応じて、トロフィー(実績)を獲得できる。全てのトロフィーを集めたとき、君は一流の料理人になれる！？'
      }
    ]
    return {
      breadclumbs,
      characters,
      systems
    }
  }
})
</script>
