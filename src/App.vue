<template>
  <div id="app">
    <Header />
    <Branco/>
    <Vermelho/>
    <Amarelo/>
    
    <router-view/>
    <div class="footer">
      <Footer/>
    </div>
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
  .footer{
    bottom: 0;
  }
  
</style>

