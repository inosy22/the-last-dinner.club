<template>
  <div>
    <GlobalHeaderFlex />
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <div class="top-image-wrapper">
          <div class="top-image-overlay" />
          <div class="top-image-inner-text">
            <p class="top-image-inner-header">海外旅行！</p>
            <p>あの悲劇の晩餐会から一年</p>
            <p>今度の6人の料理人はみんなで海外旅行！</p>
            <p>しかし、彼らの旅が何事もなく終わるはずもなく...</p>
            <p>全ての謎が今明かされる！！！</p>
          </div>
        </div>
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
