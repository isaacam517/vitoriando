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
        @sliding-end="onSlideEnd">
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
</style>