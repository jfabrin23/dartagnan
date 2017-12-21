<template>
  <div class="config">
    <Header/>
    <div class="container justify-center">
      <div class="conteudo">
        <div class="form">
          <h1>Configurações</h1>
          <hr />
          <p>
            <label for="logo">Logotipo:</label>
            <Imagem></Imagem>
          </p>
          <p>
            <label for="limite">Limite:</label>
            <input type="number" id="limite" v-model="config.Limite">
          </p>
          <p>
            <label for="limite">Limite:</label>
            <input type="number" id="limite" v-model="config.Limite">
          </p>

          <div class="container justify-end">
            <p>
              <button type="button" class="btn-reset">Resetar Sistema</button>
              <button type="reset" class="btn-reset">Limpar</button>
              <button type="button" class="btn-default" @click="add">Salvar</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Icon from 'vue-awesome'
import Imagem from '@/components/Imagem'
import Firebase from 'firebase'

var dbProdutos = Firebase.database().ref('product')
export default {
  name: 'Venda',
  components: {
    Header,
    Icon,
    Imagem
  },
  data () {
    return {
      config: {
        Limite: 0,
        Imagem: './assets/logo.png',
        Estoque: 0
      },
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false
      },
      loading: false,
      showModal: false
    }
  },
  firebase: {
    produtos: dbProdutos
  },
  methods: {
    formatNumber (number) {
      return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(number)
    },
    listarProduto () {
      this.showModal = true
    },
    add () {
      console.log(this.produto.Descricao)
      if (this.produto['.key']) {
        dbProdutos = this.produto
      }
      console.log(this.produtos[0].Descricao)
    },
    selecionar (registro) {
      this.produto = registro
    }
  }
}
</script>

<style lang="css" scoped>
  .produto {
    width: 100vw;
    height: 100vh;
    display: block;
  }

  .conteudo {
    width: 85vw;
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
