<template>
    <div id="cadastrarVagas">
        <div>
            <div>
                    <h2 class="display-4"> Cadastrar Vagas</h2>
            </div>
            <div class="d-flex justify-content-around">
                    <p> Olá, <strong>{{user.nome}}</strong> :</p>
                    <button class="btn btn-danger" @click="logOut">Sair</button>
            </div>
        </div>
        <div class="formulario">
            <div class="d-flex flex-direction-column">
                <form action="" @submit.prevent="createPost" >
                    <div>
                        <label for="">Função:</label>
                        <input type="text" v-model="funcao" >
                    </div>
                    <div>
                        <label for="">Salário:</label>
                        <input type="number" v-model="salario" >
                    </div>
                    <div>
                        <label for="">Tipo de contratação:</label>
                        <input type="text" v-model="contratacao" placeholder="CLT, Freelancer, PJ, outros">
                    </div>
                    <div>
                        <label for="" >Quantidade de vagas:</label>
                        <input type="number" v-model="qtdVagas" >
                    </div>
                    <div>
                        <textarea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="7" 
                        placeholder="Descrição da vaga... Atividades, dias, horários"
                        v-model="descricao"
                        >
                        </textarea>
                    </div>
                    <div>
                        <label for="">Contato por:</label>
                        <input type="text" v-model="contato" placeholder="E-mail, Telefone, Site, Endereço, outros">
                    </div>
                    <div>
                    <label for="">Vaga válida até:</label>
                    <input type="date" v-model="dataVencimento">
                    </div>
                    <div>
                        <button class="btn btn-success" type="submit" >Compartilhar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from '../services/firebaseConnection';

export default {
    name: 'CadastrarVagas',
    data(){
        return{
            user: {},
            funcao: '',
            contratacao: '',
            salario: '',
            qtdVagas: 0,
            descricao: '',
            contato: '',
            dataVencimento: '',
        }
    },
    created(){
      const user = localStorage.getItem('devpost');
      this.user = JSON.parse(user);
    },
    
    methods:{
        async createPost(){
        if(this.input === ''){
          return;
        }

        await firebase.firestore().collection('posts')
        .add({
            created: new Date(),
            autor: this.user.nome,
            userId: this.user.uid,
            funcao: this.funcao,
            salario: this.salario,
            tipoDeContratacao: this.contratacao,
            qtdVagas: this.qtdVagas,
            descricao: this.descricao,
            contato: this.contato,
            dataVencimento: this.dataVencimento,
        })
        .then(() => {
          this.$router.push('/vagas');
        }).catch((error) => {
          console.log('Error ao criar o post: ' + error)
        });
      },
        async logOut(){
            const confirm = window.confirm('Você realmente deseja sair?');

            if(confirm){
            await firebase.auth().signOut()
            .then(async ()=> {
                await localStorage.removeItem('devpost');
                this.$router.push('/login');
            })
            }else{
            return;
            }
        }
    }
}
</script>
<style scoped>
    #cadastrarVagas{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 200px;
        height: 100%;
        width: 100%;
    }
    .formulario{
        height: 100%;
    }
   
</style>