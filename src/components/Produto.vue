<template>
  <div class="produto">
    <Header/>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Lista de Produtos</h3>
      <div slot="body">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Descrição</th>
              <th>Valor (R$)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="registro in produtos" :key="registro['.key']">
              <td class="center">{{registro['.key']}}</td>
              <td>{{registro.Descricao}}</td>
              <td>{{formatNumber(registro.Valor)}}</td>
              <td class="center">
                <div class="clicavel" @click="selecionar(registro), showModal = false">
                  <icon name="edit" scale="1"></icon>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer">
      </div>
    </Modal>
    <div class="container justify-center">
      <div class="conteudo">
        <div class="form">
          <h1>Cadastro de Produto</h1>
          <hr />
          <p>
            <label for="produto">Descrição:</label>
            <div class="container">
              <div class="flex">
                <input type="text" id="produto" v-model="produto.Descricao">
              </div>
              <div class="basis1 clicavel" @click="listarProduto">
                <center>
                  <icon name="search" scale="1"></icon>
                </center>
              </div>
            </div>
          </p>

          <div class="container justify-start">
            <div class="flex">
              <p>
                <label for="valor">Valor:</label>
                <money v-model="produto.Valor" id="valor" v-bind="money"></money>
              </p>
            </div>
            <div class="basis1">
            </div>
            <div class="flex">
              <p>
                <label for="estoque">Estoque:</label>
                <input type="number" id="produto" v-model="produto.Estoque">
              </p>
            </div>
          </div>

          <div class="container justify-end">
            <p>
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
import Modal from '@/components/Modal'
import Firebase from 'firebase'

var dbProdutos = Firebase.database().ref('product')
export default {
  name: 'Venda',
  components: {
    Header,
    Icon,
    Modal
  },
  data () {
    return {
      produto: {
        Descricao: '',
        Valor: 0.00,
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
