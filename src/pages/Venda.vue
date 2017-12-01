<template>
  <div class="venda">
    <Header/>
    <div class="conteudo container wrap">
      <div class="flex">
        <div class="form">
          <p>
            <label for="produto">Produto:</label>
            <div class="container wrap">
              <div class="flex">
                <input type="text" id="produto" v-model="bar.Produto">
              </div>
              <center>
                <div class="basis1 clicavel">
                  <icon name="search" scale="1"></icon>
                </div>
              </center>
            </div>
          </p>

          <p>
            <label for="produto">Produto:</label>
            <input type="text" id="produto" v-model="bar.Produto">
          </p>

          <p>
            <label for="produto">Produto:</label>
            <input type="text" id="produto" v-model="bar.Produto">
          </p>
        </div>
      </div>
      <div class="basis4 corpo">
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Icon from 'vue-awesome'

export default {
  name: 'Venda',
  components: {
    Header,
    Icon
  },
  data () {
    return {
      loading: false,
      bar: {
        produto: ''
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
  .venda {
    width: 100vw;
    height: 100vh;
    display: block;
  }

  .conteudo {
    width: 100vw;
    height: 80vh;
    animation-duration: 1s;
    animation-name: Opacity-Creator;
  }

  @keyframes Opacity-Creator {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .conteudo .corpo {
    height: 90vh;
    background-color: #FFF;
    color: var(--corVerdeLink);
  }
</style>
