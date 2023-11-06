<template>
  <div id="app">
    <HeaderComponent />

    <!-- сюда будет грузиться страница -->
    <!-- буду доставать страницы из папки views (указывается импортом в router.js). Это всё теже компоненты только названы иначе -->
    <router-view></router-view>

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Lato:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost&family=Lato:wght@300;400;700;900&display=swap');

* {
  padding: 0;
  margin: 0;
}



#app {
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 400;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>
