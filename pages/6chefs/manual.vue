<template>
  <div>
    <GlobalHeaderFlex />
    <v-layout row wrap>
      <v-flex xs12 sm12 pa-2>
        <h2>説明書 - 6人の料理人と隻眼の少女</h2>
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="インストール" />
        <p class="text-warning font20">MacOSX</p>
        <p>
          6chefs.dmgファイルを開き、デスクトップやFinderにあるボリューム「6chefs」を開き、「6人の料理人と隻眼の少女.app」ファイルをApplicationフォルダへ移動してください。
        </p>
        <br />
        <p class="text-warning font20">Windows</p>
        <p>
          6chefs_setup.exeファイルを実行してください。
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
        <div>
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
          <p><span class="label label-danger">ver1.2以降</span></p>
          ※キーコンフィグで設定が可能です。<br />
          ※デフォルトでは↑←↓→が設定されています。
        </div>
        <br />

        <p class="text-warning font20">調べる・決定</p>
        <div>
          <p><span class="label label-danger">ver1.2以降</span></p>
          <p>
            <kbd>space</kbd>
            <kbd>enter</kbd>
            <kbd>z</kbd>
            のいずれか
          </p>
          <p><span class="label label-danger">ver1.1</span></p>
          <kbd>space</kbd>のみ
        </div>
        <br />

        <p class="text-warning font20">キャンセル・メニュー</p>
        <p>
          <kbd>X</kbd>
        </p>
        <br />

        <p class="text-warning font20">走る</p>
        <div>
          <kbd>shift</kbd>を押しながら移動キー
          <p><span class="label label-danger">ver1.2以降</span></p>
          ※デフォルトでは左シフトが設定されています。<br />
          ※キーコンフィグで設定が可能です。<br />
          <p><span class="label label-danger">ver1.1</span></p>
          ※左シフトのみ操作可能です。
        </div>
        <br />

        <p><span class="label label-danger">ver1.2以降</span></p>
        <p class="text-warning font20">画面サイズ設定</p>
        <p>
          <kbd>F4</kbd>ボタンを押すと、
          0.75倍、1.00倍、1.25倍、1.50倍の4段階の設定ができます。
        </p>
        <br />

        <p><span class="label label-danger">ver1.2以降</span></p>
        <p class="text-warning font20">キーコンフィグ(操作設定)</p>
        <p>
          <kbd>F1</kbd>ボタンを押すとキーコンフィグ画面が出てきます。<br />
          移動キーとダッシュキーの設定ができるので、お好きな設定をしてから、「適用」ボタンを押してください。
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
          友好度がMAXのキャラの人数に応じて、ハートが出現します。
        </p>
        <br />

        <p class="text-warning font20">キャラ</p>
        <p>
          キャラクターの情報を見ることができます。<br />
          ストーリーが進むにつれて、見れる情報が増えていきます。<br />
          また、キャラの現在の友好度をハートの数で確認することができます。(MAXは3個)
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
          扉や引き出しを開ける「鍵」や、キャラクターに渡すアイテムは「所持しているだけで」自動的に使用されます。
        </p>
        <br />

        <p class="text-warning font20">装備</p>
        <p>
          その他の謎解きに必要なアイテムや、「たいまつ」等の装備することで効果を発揮するアイテムは「装備する」ことで使用できます。<br />
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
        <p class="text-warning font20">体力ゲージについて</p>
        <p>
          敵から逃げているときや、一部のイベント中では画面の右上に「体力ゲージ」が表示されます。<br />
          体力ゲージは、「走っている間」又は「特殊な地形上で移動している間」に減少していきます。<br />
          また、「走るのをやめる」又は「移動をやめる」ことで回復します。<br />
          <br />
          体力ゲージがなくなるとゲージが満タンに回復するまで動くことが出来なくなります。<br />
          <br />
          体力ゲージには注意して、ゲージがなくならないように気を付けて敵を退けましょう。
        </p>
        <br />
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="キャラクター好感度" />
        <p>
          主人公「佐々木孫一」以外の5人の料理人、「中山撫子」、「加藤蘭丸」、「一色真夏」、「荒間田暖暖」、「大善吾郎」とは、特定のアイテムを渡すことで仲良くなることが出来ます。<br />
          <br />
          仲良くなったキャラクターは自分の過去や悩みを打ち明けてくれるようになります。<br />
          是非彼らの好感度を上げてみてください。
        </p>
        <br />
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="ルート分岐" />
        <p class="text-warning font20">ルート分岐について</p>
        <p>
          このゲームには３種類のエンディングが存在します。<br />
          TRUEルート以外にも晩餐会の謎を解き明かすヒントが隠れています。<br />
          <br />
          是非全てのルートを見てみてください。
        </p>
        <br />
      </v-flex>
      <v-flex xs12 sm12 pa-2>
        <HeadLine2 title="実況動画について" />
        <p>実況動画投稿大歓迎です！</p>
        <p class="text-warning font20">お願い</p>
        <p>
          動画のタイトルにはゲーム名の「6人の料理人と隻眼の少女」を入れてください。<br />
          また、動画の説明文にはこのゲームページURL(http://the-last-dinner.club/6chefs)か作者サイトURL(http://the-last-dinner.club)を入れてください。
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

export default defineComponent({
  components: {
    GlobalHeaderFlex,
    HeadLine2
  }
})
</script>
