<template>
    <div id="vagas">
            <h2 class="display-4">Vagas</h2>
        <router-link tag="button" class="btn btn-info my-4" to="/login">Anuncie GRÁTIS vagas aqui</router-link>
        
        <div v-if="loading">
            <h2>Buscando posts...</h2>
        </div>

        <div v-else>
        <article class="my-4" v-for="post in posts" :key="post.id">
            <div>
                <b-card :title="post.funcao" :sub-title="'Tipo de Contrato: ' +  post.tipoDeContratacao">
                    <b-card-text>
                    Salário: <strong>{{post.salario}}</strong>
                    </b-card-text>
                    <b-card-text>
                    Descrição da vaga: {{post.descricao}}
                    </b-card-text>

                    <b-card-text>Contato: {{post.contato}}</b-card-text>

                    <span class="card-link">Quantidade de vagas: {{post.qtdVagas}}</span>
                    <span class="card-link">validade até: {{post.dataVencimento}}</span>
                    <span class="card-link">Anunciante: {{post.autor}}</span>

                </b-card>
            </div>
        </article>
        </div>
        
    </div>
</template>
<script>
import firebase from '../services/firebaseConnection';


export default {
    name: 'Vagas',
    data(){
        return{
            loading:true,
            posts: [],

        }
    },

    async created(){
      const user = localStorage.getItem('devpost');
      this.user = JSON.parse(user);

      await firebase.firestore().collection('posts')
      .orderBy('created', 'desc')
      .onSnapshot((doc)=>{
        this.posts = [];

        doc.forEach((item)=>{
          this.posts.push({
            id: item.id,
            autor: item.data().autor,
            funcao: item.data().funcao,
            tipoDeContratacao: item.data().tipoDeContratacao,
            qtdVagas: item.data().qtdVagas,
            descricao: item.data().descricao,
            contato: item.data().contato,
            dataVencimento: item.data().dataVencimento,
            userId: item.data().userId,
            salario: item.data().salario
          });
        })

        this.loading = false;
        console.log(this.posts);
      })
    },

}
</script>
<style scoped>
    #vagas{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }
</style>