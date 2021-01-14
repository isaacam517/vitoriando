<template>
    <div id="sobremim">
        <b-div class="w-100">
            <b-card no-body class="overflow-hidden" style="">
                <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="require('../assets/img-sobre-mim.jpg')" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body title="ISAAC A. MARTINIANO">
                    <b-card-text>
                    <p>Olá, sou formado em Análise e Desenvolvimento de Sistemas,
                    atualmente cursando informática para WEB, com foco em desenvolvimento de sistemas.
                    </p>
                    <p><strong>Conhecimentos:</strong></p>
                    <p>HTML5, CSS3, JAVASCRIPT, ReactJS, VueJS, ASP.NET, PHP, Firebase, MySQL, Bootstrap.</p>
                    <p>O <strong>Vitoriando</strong> tem o intuito de divulgar, informar e entreter seus usuários 
                    com notícias e informações de história, vagas de emprego, lazer e informações geral.</p>
                    <p>Até o momento essa aplicação foi desenvolvida com <strong>html5, css3, javascript(VueJS)</strong>, 
                        a mesma passará por atualizações contínuas para uma melhor experiência dos usuários.</p>
                    <p> <i> "A persistência é o caminho do êxito"</i></p>    
                    </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
        </b-div>    
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