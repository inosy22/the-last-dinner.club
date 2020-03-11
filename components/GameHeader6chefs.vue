<template>
  <v-flex xs12 sm12>
    <v-row>
      <v-flex xs6 sm3 pt-3>
        <v-row justify="center">
          <CircleIconLink
            icon="mdi-download"
            title="ダウンロード"
            link="https://www.freem.ne.jp/win/game/16125"
          />
        </v-row>
      </v-flex>
      <v-flex xs6 sm3 pt-3>
        <v-row justify="center">
          <CircleIconLink
            icon="mdi-gamepad-variant"
            title="ゲーム紹介"
            link="/6chefs/introduction"
          />
        </v-row>
      </v-flex>
      <v-flex xs6 sm3 pt-3>
        <v-row justify="center">
          <CircleIconLink
            icon="mdi-file-document-outline"
            title="説明書"
            link="/6chefs/manual"
          />
        </v-row>
      </v-flex>
      <v-flex xs6 sm3 pt-3>
        <v-row justify="center">
          <CircleIconLink
            icon="mdi-star"
            title="攻略のヒント"
            link="/6chefs/hint"
          />
        </v-row>
      </v-flex>
    </v-row>
  </v-flex>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import CircleIconLink from '@/components/CircleIconLink'

export default defineComponent({
  components: {
    CircleIconLink
  }
})
</script>
