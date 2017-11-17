<template>
  <div class="home">
    <Header/>
    <div class="conteudo container wrap justify-center align-items">
      <div class="item basis4 container justify-center align-center">
        <div class="container column align-center justify-center">
          <icon name="barcode" scale="4"></icon>
          <div class="ex-txt">
            Registrar Entrada
          </div>
        </div>
      </div>

      <div class="item basis4 container justify-center align-center">
        <div class="container column align-center justify-center">
          <icon name="ticket" scale="4"></icon>
          <div class="ex-txt">
            Vender Cartela
          </div>
        </div>
      </div>

      <div class="item basis4 container justify-center align-center">
        <div class="container column align-center justify-center">
          <icon name="shopping-basket" scale="4"></icon>
          <div class="ex-txt">
            Vender Bebida
          </div>
        </div>
      </div>

      <div class="item basis4 container justify-center align-center">
        <div class="container column align-center justify-center">
          <icon name="line-chart" scale="4"></icon>
          <div class="ex-txt">
            Relatório
          </div>
        </div>
      </div>

      <div class="item basis4 container justify-center align-center">
        <div class="container column align-center justify-center">
          <icon name="cogs" scale="4"></icon>
          <div class="ex-txt">
            Configurações
          </div>
        </div>
      </div>

      <div class="item basis4 container justify-center align-center">
        <div class="container column align-center justify-center">
          <icon name="sign-out" scale="4"></icon>
          <div class="ex-txt">
            Sair
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Icon from 'vue-awesome'

export default {
  name: 'Home',
  components: { Header, Icon },
  data () {
    return {
      login: {
        Login: '',
        Senha: ''
      },
      loading: false
    }
  },
  method: {
  }
}
</script>

<style lang="css" scoped>
  .home {
    width: 100vw;
    height: 100vh;
    display: block;
  }

  .conteudo {
    margin-top: 5vh;
    width: 99vw;
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

  .conteudo .item {
    background-color: #FFF;
    color: var(--corVerdeLink);
    margin: 0.5vw;
    border-radius: 0.5vw;
    cursor: pointer;
    position: relative;
    opacity: 0.7;
  }

  .conteudo .item:hover {
    animation-name: teste;
    animation-duration: 0.3s;
    animation-fill-mode: forwards
  }

  @keyframes teste {
    0% {
      top:0vh;
      opacity: 0.7;
    }
    100% {
      top:-0.5vh;
      opacity: 1;
    }
  }
</style>
