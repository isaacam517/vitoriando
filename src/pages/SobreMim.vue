<template>
    <div id="sobremim">
            <h2>Sobre Mim</h2>
        
            <div class="imagem-e-p">
                <img alt="Vitoriando logo" src="../assets/img-sobre-mim.jpg">
                <div>
                    <p>Olá, meu nome é <strong>ISAAC A. MARTINIANO</strong> formado em Análise e Desenvolvimento de Sistemas,
                        atualmente cursando informática para WEB, com foco em desenvolvimento de sistemas.
                    </p>
                    <p><strong>Conhecimentos:</strong></p>
                    <p>HTML5, CSS3, JAVASCRIPT, ReactJS, VueJS, ASP.NET, PHP, Firebase, MySQL, Bootstrap.</p>
                    <p>O <strong>Vitoriando</strong> tem o intuito de divulgar, informar e entreter seus usuários 
                    com notícias e informações de história, vagas de emprego, lazer e informações geral.</p>
                    <p>Até o momento essa aplicação foi desenvolvida com <strong>html5, css3, javascript(VueJS)</strong>, 
                        a mesma passará por atualizações contínuas para uma melhor experiência dos usuários.</p>
                    <p> <i> "A persistência é o caminho do êxito"</i></p>    
                </div>
            </div>
        
    </div>
</template>
<script>
export default {
    name: 'Sobremim',
}
</script>
<style scoped>
    #sobremim{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }
    img {
        width: 450px;
    }
   .imagem-e-p {
        width: 80%;  
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 15px;
   }
</style>