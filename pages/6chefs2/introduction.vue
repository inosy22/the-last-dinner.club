<template>
  <div>
    <GlobalHeaderFlex />
    <v-layout row wrap>
      <!-- <v-flex xs12 sm12>
        <v-breadcrumbs :items="breadclumbs" />
      </v-flex> -->
      <v-flex xs12 sm12 pa-2>
        <h2>ゲーム紹介 - 6人の料理人と隻眼の少女2</h2>
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
          <v-img :src="`/img/6chefs2/characters/${character.image}`" />
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
        <p>
          基本的なシステムは<a href="/6chefs/introduction"
            >前作のゲームシステム</a
          >と同様です。
        </p>
        <p>追加された要素だけをご紹介！</p>
      </v-flex>
      <v-flex v-for="system in systems" :key="system.title" xs12 sm3 pa-2>
        <v-card>
          <v-img :src="`/img/6chefs2/systems/${system.image}`" />
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
        speciality: '料理：カレー',
        description:
          '当時中学生であったにも関わらず、全国にチェーン展開しているカレー屋「MaGo一番屋」の看板メニュー「マゴイチカレー」のスパイス調合比率を考案した天才料理人。'
      },
      {
        name: '中山 撫子 (ナカヤマ ナデシコ)',
        image: 'nadeshiko_stand.png',
        speciality: '料理：和食',
        description:
          '中学生の頃に両親を亡くしてしまっているため、弟や妹の面倒も見ている。<br>晩餐会では、いち早く事件の真相に触れ、過ちを犯したが、事件解決に大きく貢献した。'
      },
      {
        name: '加藤 蘭丸 (カトウ ランマル)',
        image: 'ranmaru_stand.png',
        speciality: '料理：ジビエ料理',
        description:
          '実家の拳法道場「加岩流」の当主として稽古を行いつつ狩猟と料理も行っている。<br>晩餐会にて起こった事件により片目を失ったが、想像を絶する鍛錬により狩猟と武術は続けられているようだ。'
      },
      {
        name: '一色 真夏 (イッシキ マナカ)',
        image: 'manaka_stand.png',
        speciality: '料理：ジュース',
        description:
          'ジュース農家である実家に併設されている喫茶店の看板娘。<br>晩餐会の後、希﨑雪に「人肉以外の料理」を食べさせた料理人として、四代目晩餐会の優秀者に選ばれた。'
      },
      {
        name: '荒間田 暖暖 (アラマダ ダンダン)',
        image: 'dandan_stand.png',
        speciality: '料理：鍋',
        description:
          '全国にチェーン展開している鍋料理屋「鍋奉行」のオーナーシェフ。鍋料理にかける情熱は誰よりも強く、暖暖と鍋をする時には注意しなければならない。<br>「・・・ですぞ」が口癖。'
      },
      {
        name: '大善 吾郎 (ダイゼン ゴロウ)',
        image: 'daigoro_stand.png',
        speciality: '料理：鉄板料理',
        description:
          '全国の祭りで屋台を出して回っていることから「お祭り男」のアダ名が付いた。<br>しかし料理のクオリティは屋台のレベルを遥かに超えており、大善の料理目当てで祭り巡りをする人もいるという。'
      },
      {
        name: '咲賀谷 朱花(サキガヤ シュカ)',
        image: 'syuka_stand.png',
        speciality: '料理：アメリカ菓子',
        description:
          'キャンディやポップコーンなど「見た目がカワイイ」お菓子を作ることが好き。<br>第一回晩餐会ではオリジナルのスイーツで優秀者に選ばれた。'
      },
      {
        name: '田村 剣神 (タムラ ケンシン)',
        image: 'tamuken_stand.png',
        speciality: '料理：ハンバーグステーキ',
        description:
          '大善の高校の先輩で、大善が料理人となるきっかけとなった男。共に同じ店で料理の修行をしていた。<br>第二回晩餐会では「一口毎に味が変わる」ハンバーグで優秀者に選ばれた。'
      },
      {
        name: '希崎 雪 (キザキ ユキ)',
        image: 'yuki_stand.png',
        speciality: '加岩流門下',
        description:
          '人肉を食べることによって発症する病「狂人病」を患っていたが、加藤や一色の尽力により徐々に回復していった。<br>現在では加藤の元で強大すぎる身体能力と未熟な精神の鍛練を行っている。'
      }
    ]
    const systems = [
      {
        title: '探索・謎解きパワーアップ',
        image: 'question.PNG',
        summary: '隅々まで探索しよう！',
        description:
          '今作は謎解きのクオリティーが大幅にパワーアップ！たくさんの謎を探索で解決していこう！'
      },
      {
        title: '戦闘',
        image: 'battle.PNG',
        summary: '敵と戦う時もある！？',
        description: '一部のキャラは戦うことができるぞ！'
      },
      {
        title: 'アイテム',
        image: 'item.PNG',
        summary: 'アイテムを使いこなそう！',
        description:
          '装備すると効果を発揮するアイテムがパワーアップ！時には探索やトロフィー獲得の手助けになるかも？'
      },
      {
        title: 'おまけストーリー',
        image: 'omake.PNG',
        summary: 'トロフィーを集めよう！',
        description:
          '取得したトロフィーによってはおまけストーリーを見ることができるようになるぞ！全てのトロフィーを獲得すると、特別ストーリーを見ることができる！？'
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
