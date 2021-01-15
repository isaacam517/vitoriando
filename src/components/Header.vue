<template>
    <header id="header">
        <b-navbar class="navbar" toggleable="lg w-100" type="dark" variant="info">
            <div class="div-logo">
                <img alt="Vitoriando logo" src="../assets/brasao_vitoria_PE.png">
                <router-link tag="h1" to="/">Vitoriando</router-link>
            </div>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <div class="links-sup">
                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link tag="button" to="/sobremim">Sobre Mim</router-link>
                    <router-link tag="button" to="/historia">História</router-link>
                    <router-link tag="button" to="/contato">Contato</router-link>
                    <router-link tag="button" to="/noticias">Notícias</router-link>
                    <router-link tag="button" to="/entretenimento">Entretenimento</router-link>
                    <router-link tag="button" to="/vagas">Vagas</router-link>
                    <router-link tag="button" to="/cadastrarvagas/:userid">Cadastrar Vagas</router-link>
                </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
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
        box-shadow: 0 0 10px rgbd(0,0,0, 0.2);
        color: #FFF;
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
    .navbar{
        width: 100%;
        justify-content: space-around;
        background-color:rgb(7, 98, 153)!important;

    }
</style>