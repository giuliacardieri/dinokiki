<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './assets/css/modules/variables';
@import './assets/css/modules/mixins';
@import './assets/css/modules/typography';

@import './assets/css/blocks/header.scss';
@import './assets/css/blocks/button.scss';
@import './assets/css/blocks/section.scss';
@import './assets/css/blocks/footer.scss';

@import './assets/css/blocks/dino.scss';
@import './assets/css/blocks/kiki-gallery.scss';

body {
    background-color: $blue;
    color: $white;
    font-family: 'Raleway', sans-serif;
    margin: 0 auto;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
}

.app__main {
  @media (max-width: $max-sm) {
    margin-bottom: 59px;
  }
}

</style>
