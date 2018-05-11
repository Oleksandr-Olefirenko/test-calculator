<template>
  <div id="app">
    <router-view/>
    <vStorage></vStorage>
  </div>
</template>

<script>
import vStorage from '@/components/Storage'
export default {
  name: 'App',
  components: {
    vStorage: vStorage
  }
}
</script>

<style scoped>
  #app {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 10%;
  }
</style>
