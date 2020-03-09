<template>
  <div class="circle-outer">
    <a :href="link" :target="toNewWindow ? '_blacnk' : ''">
      <div class="circle">
        <v-icon class="icon">
          {{ icon }}
        </v-icon>
      </div>
      <p class="icon-title" style="text-decolation: none;">{{ title }}</p>
    </a>
  </div>
</template>

<style scoped>
.circle-outer {
  display: inline-block;
  width: 100px;
  text-align: center;
}

.circle {
  font-size: 38px;
  display: inline-block;
  width: 64px;
  height: 64px;
  background: none;
  border: 3px solid #fff;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  -o-border-radius: 50px;
  -ms-border-radius: 50px;
  border-radius: 50px;
}

.icon {
  padding: 3px;
  font-size: 48px;
}

.icon-title {
  font-size: 14px;
  font-weight: bold;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:hover > .icon-title {
  color: orange;
}

a:hover > .circle {
  border-color: orange;
}

a:hover > .circle > i {
  color: orange;
}
</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    toNewWindow: {
      type: Boolean,
      deafult: false
    }
  }
})
</script>
