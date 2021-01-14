<template>
    <div id="contato">
        <h2>Contatos: </h2>
        <div class="icons">
            <a href="https://github.com/isaacam517" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/isaac.martiniano/" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.linkedin.com/in/isaac-martiniano-aa799a147/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/isaacmartiniano/" target="_blank"><i class="fab fa-instagram-square"></i></a>
            <a href="https://api.whatsapp.com/send?phone=5581995073317&text=Olá%20" target="_blank"><i class="fab fa-whatsapp-square"></i></a>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'Contato',
}
</script>
<style scoped>
    #contato{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }
    .icons{
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        font-size: 60px;
        gap: 6px;
    }
    .icons a{
        color: black;
    }
    
  
</style>