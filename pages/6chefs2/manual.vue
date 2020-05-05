<template>
  <div>
    <GlobalHeaderFlex />
    <v-layout row wrap>
      <v-flex xs12 sm12 pa-2>
        <h2>説明書 - 6人の料理人と隻眼の少女2</h2>
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="インストール" />
        <p class="text-warning font20">Windows</p>
        <p>
          6chefs2_setup.exeファイルを実行してください。
        </p>
        <br />

        <p class="text-warning font20">注意事項</p>
        <p>
          ・本アプリケーションを日本語を含むパス(フォルダ)に入れないでください。起動できなくなる等の不具合が起きます。<br />
          ・Windows版で長時間プレイするとメッセージ表示がおかしくなる場合があります。その場合は再起動してください。
        </p>
        <br />
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="操作方法" />
        <p class="text-warning font20">キャラ移動・コマンド移動</p>
        <p>
          <kbd>↑</kbd>
          <kbd>↓</kbd>
          <kbd>→</kbd>
          <kbd>←</kbd>
          または、
          <kbd>w</kbd>
          <kbd>s</kbd>
          <kbd>d</kbd>
          <kbd>a</kbd>
          <br />
          ※キーコンフィグで設定が可能です。<br />
          ※デフォルトでは↑←↓→が設定されています。
        </p>
        <br />

        <p class="text-warning font20">調べる・決定</p>
        <div>
          <p>
            <kbd>space</kbd>
            <kbd>enter</kbd>
            <kbd>z</kbd>
            のいずれか
          </p>
        </div>
        <br />

        <p class="text-warning font20">キャンセル・メニュー</p>
        <p>
          <kbd>X</kbd>
        </p>
        <br />

        <p class="text-warning font20">走る</p>
        <p>
          <kbd>shift</kbd>を押しながら移動キー
          ※デフォルトでは左シフトが設定されています。<br />
          ※キーコンフィグで設定が可能です。
        </p>
        <br />

        <p class="text-warning font20">画面サイズ設定</p>
        <p>
          <kbd>F4</kbd>ボタンを押すと、
          0.75倍、1.00倍、1.25倍、1.50倍の4段階の設定ができます。
        </p>
        <br />

        <p class="text-warning font20">キーコンフィグ(操作設定)</p>
        <p>
          <kbd>F1</kbd>ボタンを押すとキーコンフィグ画面が出てきます。<br />
          移動キーとダッシュキーの設定ができるので、お好きな設定をしてから、「適用」ボタンを押してください。
        </p>
        <br />

        <p class="text-warning font20">キーコンフィグ(操作設定)</p>
        <p>
          <kbd>F1</kbd>ボタンを押すとキーコンフィグ画面が出てきます。<br />
          移動キーとダッシュキーの設定ができるので、お好きな設定をしてから、「適用」ボタンを押してください。
        </p>
        <br />
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 id="battle" title="戦闘イベント・操作方法" />
        <p class="text-warning font20">戦闘イベントについて</p>
        <p>
          一部のイベントでは戦闘を行うことがあります<br />
          普段は敵に触れるとゲームオーバーですが、このイベントでは敵キャラの攻撃を何回か受けてしまうとゲームオーバーになってしまいます。<br />
          ※操作キャラのHP・敵の攻撃力はキャラクターによって異なります<br />
          <br />
          また、戦闘イベント中は走ることができません。<br />
          走る代わりに、ステップ(回避)を行うことができます。
        </p>
        <br />

        <p class="text-warning font20">戦闘キャラクターについて</p>
        <p>
          戦闘で操作するキャラクターはそれぞれ能力が違います。<br />
          <br />
          加藤 蘭丸：アタックタイプ、高い攻撃力で他を圧倒するが回避は苦手<br />
          大善
          吾郎：テクニックタイプ、平均的な能力に加えて、広い攻撃範囲で戦うことができる<br />
          希崎 雪 ：スピードタイプ、攻撃力は低いが高いスピードで敵を翻弄<br />
          田村
          剣神：バランスタイプ、攻撃・HP・スピードなど平均的に優れた能力の持ち主
        </p>
        <br />

        <p class="text-warning font20">キャラ移動</p>
        <p>
          <kbd>↑</kbd>
          <kbd>↓</kbd>
          <kbd>→</kbd>
          <kbd>←</kbd>
          または、
          <kbd>w</kbd>
          <kbd>s</kbd>
          <kbd>d</kbd>
          <kbd>a</kbd>
          <br />
          ※キーコンフィグで設定が可能です。<br />
          ※デフォルトでは↑←↓→が設定されています。
        </p>
        <br />

        <p class="text-warning font20">攻撃</p>
        <div>
          <kbd>space</kbd>
          <kbd>enter</kbd>
          <kbd>z</kbd>
          のいずれか<br />
          ※攻撃時はスタミナを消費します。<br />
          ※スタミナの消費量はキャラクターによって異なります。
        </div>
        <br />

        <p class="text-warning font20">ステップ(回避)</p>
        <p>
          <kbd>shift</kbd>を押しながら移動キー
          ※デフォルトでは左シフトが設定されています。<br />
          ※キーコンフィグで設定が可能です。<br />
          <br />
          ※ステップ時はスタミナを消費します。<br />
          ※スタミナの消費量はキャラクターによって異なります。
        </p>
        <br />
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="メニュー" />
        <p class="text-warning font20">アイテム</p>
        <p>
          所持しているアイテムを確認することができます。また、アイテムを装備したり外したりすることができます。
        </p>
        <br />

        <p class="text-warning font20">セーブ</p>
        <p>
          これまでの状況を記録することができます。<br />
          現在のチャプター、マップ、プレイ時間、パーティが表示されます。
        </p>
        <br />

        <p class="text-warning font20">資料</p>
        <p>
          キャラクターや場所、用語などの情報を見ることができます。<br />
          ストーリーが進むにつれて、見れる情報が増えていきます。<br />
          前作のストーリーを忘れてしまっている方、知らない方はこの資料を見ることで、よりストーリーを楽しむことができます。
        </p>
        <br />

        <p class="text-warning font20">タイトル</p>
        <p>
          タイトルへ戻ることができます。セーブしていないとデータは失われるので注意してください。
        </p>
        <br />

        <p class="text-warning font20">閉じる</p>
        <p>
          メニューを閉じます
        </p>
        <br />
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="アイテム" />
        <p class="text-warning font20">自動使用</p>
        <p>
          扉や引き出しを開ける「鍵」などは、自動的に使用されます。
        </p>
        <br />

        <p class="text-warning font20">装備</p>
        <p>
          その他の謎解きやストーリーに必要なアイテムは「装備する」ことで使用できます。<br />
          アイテムを使用する場合は「装備すること」を忘れないようにしましょう。
        </p>
        <br />

        <p class="text-warning font20">入手</p>
        <p>
          一定のイベントをクリアすることで入手可能になるアイテムも存在します。<br />
          一度調べた部屋も、物語を進めた後にもう一度調べてみると、アイテムが見つかるかもしれません。
        </p>
        <br />
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="体力ゲージ" />
        <p class="text-warning font20">スタミナゲージについて</p>
        <p>
          敵から逃げているときや、一部のイベント中では画面の右上に「スタミナゲージ」が表示されます。<br />
          スタミナゲージは、「走っている間」又は「特殊な地形上で移動している間」に減少していきます。<br />
          また、「走るのをやめる」又は「移動をやめる」ことで回復します。<br />
          先頭イベント中の攻撃・ステップ(回避)でもスタミナを消費します。<br />
          <br />
          スタミナゲージがなくなるとゲージが満タンに回復するまで動くことが出来なくなります。<br />
          <br />
          スタミナゲージには注意して、ゲージがなくならないように気を付けて敵を退けましょう。
        </p>
        <br />
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="ルート分岐" />
        <p class="text-warning font20">ルート分岐について</p>
        <p>
          このゲームには2種類のエンディングが存在します。<br />
          Aルートではあるキャラクターの過去のお話を楽しむことができます。
        </p>
        <br />
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="トロフィー・おまけ部屋" />
        <p class="text-warning font20">トロフィー</p>
        <p>
          特定の条件を達成するとトロフィーを獲得することができます。<br />
          獲得したキャラクタートロフィーでは、決定キーを押すことで、キャラクターのボイスを聞くことができます。<br />
          また、キャラクタートロフィーを獲得すると、おまけ部屋で各キャラクターの番外編のストーリーを見ることができます。<br />
          トロフィーコンプリートを達成した場合、ダウンロード版では特典を用意する予定です。(2016.12.29現在)
        </p>
        <br />

        <p class="text-warning font20">おまけ部屋</p>
        <p>
          おまけ部屋でキャラクタートロフィーを獲得しているキャラクターに話しかけると番外編のストーリーを見ることができます。<br />
          前編と今作の間のストーリーや今作の後のお話などをお楽しみいただけます。
        </p>
        <br />
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="実況動画について" />
        <p>実況動画投稿大歓迎です！</p>
        <p class="text-warning font20">お願い</p>
        <p>
          動画のタイトルにはゲーム名の「6人の料理人と隻眼の少女2」を入れてください。<br />
          また、動画の説明文にはこのゲームページURL(http://the-last-dinner.club/6chefs2)か作者サイトURL(http://the-last-dinner.club)を入れてください。
        </p>
        <br />
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
.text-warning {
  color: #ff8800;
}
.font20 {
  font-size: 18px;
}
</style>

<script>
import { defineComponent } from '@vue/composition-api'
import GlobalHeaderFlex from '@/components/GlobalHeaderFlex'
import HeadLine2 from '@/components/HeadLine2'
import VueHeaderHelper from '@/lib/VueHeaderHelper'

export default defineComponent({
  components: {
    GlobalHeaderFlex,
    HeadLine2
  },
  head() {
    const title = '説明書 - 6人の料理人と隻眼の少女2'
    const description =
      '説明書 - ホラーアクションアドベンチャーゲーム「6人の料理人と隻眼の少女2」公式サイト'
    const url = '/6chefs2/manual'
    return VueHeaderHelper.generateHeadObject(title, description, url)
  }
})
</script>
