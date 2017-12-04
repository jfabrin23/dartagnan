<template>
  <div class="home">
    <Header/>
    <div class="conteudo container wrap justify-center align-items">
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">{{modal.header}}</h3>
        <div slot="body" class="form">
          <div class="wrap container center">
            <div class="flex">
              <label for="login">Código de Barras:</label>
              <input type="text" id="codigoBarra" v-model="entrada.CodigoBarra" v-on:keyup.enter="registrarEntrada">
            </div>
          </div>
          {{erro.Entrada}}
        </div>
        <div slot="footer">
          Entradas Registradas: {{checkins.length}} / 250
        </div>
      </Modal>

      <div class="item basis4 container justify-center align-center" @click="openModal('Registrar Entrada','','')">
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

      <div class="item basis4 container justify-center align-center" @click="acessar('venda')">
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
import Modal from '@/components/Modal'
import Icon from 'vue-awesome'
import Firebase from 'firebase'

var dbCheckin = Firebase.database().ref('checkin')
export default {
  name: 'Home',
  components: {
    Header,
    Icon,
    Modal
  },
  data () {
    return {
      login: {
        Login: '',
        Senha: ''
      },
      modal: {
        header: '',
        body: '',
        footer: ''
      },
      entrada: {
        CodigoBarra: ''
      },
      loading: false,
      showModal: false,
      erro: {
        Entrada: ''
      }
    }
  },
  firebase: {
    checkins: dbCheckin
  },
  methods: {
    openModal (titulo, corpo, rodape) {
      this.modal.header = titulo
      this.modal.body = corpo
      this.modal.footer = rodape
      this.showModal = true
    },
    registrarEntrada () {
      if (!this.checkins.find(element => element.CodigoBarras === this.entrada.CodigoBarra)) {
        dbCheckin.push({CodigoBarras: this.entrada.CodigoBarra, Data: new Date().toString()})
        this.entrada.CodigoBarra = ''
        this.erro.Entrada = ''
      } else {
        this.erro.Entrada = 'Código já existente'
      }
    },
    acessar (local) {
      this.$router.push(local)
    }
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
