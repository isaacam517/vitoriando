<template>
  <div id="home">
      <div class="imagem">
        <h2>Vitória de Santo Antão - PE</h2>
        <img alt="Vitoriando logo" src="../assets/vista-aerea-vitoria.jpg">
    </div>
  </div>
</template>
<script>
export default {
    name: 'Home',
}
</script>
<style scoped>
    #home{
      margin-top: 50px;  
    }
    img {
        width: 800px;
    }
    .imagem{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
  }
</style>