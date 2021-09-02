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

  .example::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .example {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

</style>
