<template>
  <header id="header">
      <div class="div-logo">
        <img alt="Vitoriando logo" src="../assets/brasao_vitoria_PE.png">
        <router-link tag="h1" to="/">Vitoriando</router-link>
      </div>
      <div class="links-sup">
        <router-link tag="button" to="/sobremim">Sobre Mim</router-link>
        <router-link tag="button" to="/historia">História</router-link>
        <router-link tag="button" to="/">Contato</router-link>
        <router-link tag="button" to="/">Notícias</router-link>
        <router-link tag="button" to="/">Entretenimento</router-link>
        <router-link tag="button" to="/">Vagas</router-link>
      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
    #header{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 60px;
        background-color:rgb(7, 98, 153);
        box-shadow: 0 0 10px rgbd(0,0,0, 0.2);
        color: #FFF;
        position: fixed;
    }
    header a{
        text-decoration: none;
        font-size: 30px;
        cursor: pointer;
        color: #FFF;
        font-weight: bold;
    }
    button{
        cursor: pointer;
        border: 0;
        color: #FFF;
        background: transparent;
        padding: 5px 15px;
        outline: none;
        font-weight: bold;
    }
    img{
        width: 40px;
        margin-right: 10px;
    }
    .div-logo{
        display: flex;
        align-items: center;
    }
    .links-sup{
        display: flex;
        gap: 20px;
    }
</style>