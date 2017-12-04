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
            </tr>
          </thead>
          <tbody>
            <tr v-for="registro in produtos" :key="registro['.key']">
              <td>{{registro['.key']}}</td>
              <td>{{registro.Descricao}}</td>
              <td>{{registro.Valor | money}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer">
      </div>
    </Modal>
    <div class="container center">
      <div class="conteudo align-stretch">
        <div class="form">
          <h1>Cadastro de Produto</h1>
          <hr />
          <p>
            <label for="produto">Descrição:</label>
            <div class="container justify-center">
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

          <div class="container justify-end">
            <div class="flex">
              <p>
                <label for="valor">Valor:</label>
                <input type="tel" id="valor" v-model="produto.Valor">
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
              <button type="button" class="btn-default">Salvar</button>
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
      loading: false,
      produto: {},
      showModal: false
    }
  },
  firebase: {
    produtos: dbProdutos
  },
  methods: {
    listarProduto () {
      this.showModal = true
    },
    add () {

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
