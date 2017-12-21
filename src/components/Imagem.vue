<template>
  <container class="imagem">
    <div class="img-mini thumb">
      foto : {{foto}}
      <img class="img-default" v-lazy="foto" @click="openFile('imagens')" v-if="inUpdate">
      <input type="file" id="imagens">
    </div>
  </container>
</template>

<script>
export default {
  data () {
    return {
      inUpdate: true
    }
  },
  methods: {
    openFile (acao) {
      document.getElementById(acao).click()
    },
    getImg (acao) {
      return '../assets/logo/logo.png'
    }
  },
  computed: {
    foto () {
      return atob('../assets/logo/logo.png')
    }
  }
}
</script>

<style lang="css" scoped>
.img-default {
    margin-top: 40px;
}
.img-mini h4, .img-mini p  {
    color: var(--fontColor);
    font-size: 18px;
}
.img-mini p {
  margin-top: 10px;
}
.img-default img {
    margin: 0px 0px;
    object-fit: cover;
    height: 65px;
}
.thumb{
  width: 350px;
  margin: 0;
}
.img-mini input[type="file"] {
  display:none;
}
.imagem h1 img{
  float: left;
  height: 4vh;
  margin: 3px 5px 3px 0
}

.imagem img.imagem{
  float: right;
  height: 5vh
}
</style>