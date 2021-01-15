<template>
  <div id="footer">
      <div class="mt-2">
        <p>© Copyright 2021 IAM</p>
      </div>
  </div>
</template>
<script>
export default {
    name: 'Footer',
}
</script>
<style scoped>
    #footer{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 40px;
        background-color:rgb(7, 98, 153);
        box-shadow: 0 0 10px rgbd(0,0,0, 0.2);
        color: #FFF;
        bottom: 0;
    }
</style>