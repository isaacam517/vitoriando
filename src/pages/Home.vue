<template>
  <div id="home">
    <div class="imagem">
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
        caption="First slide"
        class="img"
        :img-src="require('../assets/img-index-1.png')"
        ></b-carousel-slide>
          <b-carousel-slide
        caption="First slide"
        class="img"
        :img-src="require('../assets/historia-img-01.png')"
        ></b-carousel-slide>
        <b-carousel-slide
        caption="First slide"
        class="img"
        :img-src="require('../assets/img-index-3.jpg')"
        ></b-carousel-slide>
        <b-carousel-slide
        caption="First slide"
        class="img"
        :img-src="require('../assets/img-index-4.jpg')"
        ></b-carousel-slide>
        <b-carousel-slide
        caption="First slide"
        class="img"
        :img-src="require('../assets/img-index-5.jpg')"
        ></b-carousel-slide>
        <b-carousel-slide
        caption="First slide"
        class="img"
        :img-src="require('../assets/img-index-6.jpg')"
        ></b-carousel-slide>
      </b-carousel>
    </div>

  <div class="container ">
    
      <div class="row d-flex justify-content-around my-3">
        <div>
          <b-card
            title="Portal da Transparência"
            :img-src="require('../assets/img-portal-da-transparencia.jpeg')"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Acompanhe as Licitações, Contratos, Orçamentos, Prestação de Contas, Despesas e outros serviços relacionados ao setor financeiro do município.
            </b-card-text>

            <b-button href="https://netuse.inf.br/vitoriapm/portaltransparencia/" variant="primary">Visitar Site</b-button>
          </b-card>
        </div>

        <div>
          <b-card
            title="Prefeitura do Município"
            :img-src="require('../assets/img-prefeitura.jpg')"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Informações e notícias em geral relacionados ao governo municipal e a população, nas áreas de Saúde, Educação, Infraestrutura e outros, confira
            </b-card-text>

            <b-button href="#" variant="primary">Visitar Site</b-button>
          </b-card>
        </div>

        <div>
          <b-card
            title="Shopping Vitória Park"
            :img-src="require('../assets/img-shopping.jpg')"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Lazer, gastronomia, serviços, diversas opções de lojas, Cinemas... um grande empreendimento que mudou o estilo de vida de Vitória de Santo Antão
            </b-card-text>

            <b-button href="#" variant="primary">Visitar Site</b-button>
          </b-card>
        </div>

      </div>
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
    }
    .img {
    }
    .imagem{
        /* display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center; */
  }
  .section-card{
    display: flex;
  }
</style>