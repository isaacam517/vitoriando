<template>
  <div id="app">
    <Header />
    <Branco/>
    <Vermelho/>
    <Amarelo/>
    
    <Footer/>
    <router-view/>
  </div>
</template>

<script>

import Header from './components/Header';
import Amarelo from './components/Amarelo';
import Branco from './components/Branco';
import Vermelho from './components/Vermelho';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Amarelo,
    Branco,
    Vermelho,
    Footer
  }
}
</script>

<style scoped>
  #app {
  margin: 0;
  padding: 0;
  }
  
</style>

