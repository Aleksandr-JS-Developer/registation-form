<template>
  <div id="app">
    <Registration />
  </div>
</template>

<script>
import Registration from './components/Registration.vue';

export default {
  name: 'App',
  components: { Registration }
}
</script>


<style lang="scss">
  @import './assets/styles/normalize.css';

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;  
  }

</style>
