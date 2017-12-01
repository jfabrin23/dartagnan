<template>
  <div class="login">
    <div class="caixaLogin">
      <h1>Login</h1>
      <div class="form">
        <p>
          <label for="login">Usuário:</label>
          <input type="text" id="login" v-model="login.Login">
        </p>

        <p>
          <label for="senha">Senha:</label>
          <input type="password" id="senha" v-model="login.Senha">
        </p>

        <center>
          <p>
            <button class="btn-default" @click="entrar">Entrar</button>
          </p>
        </center>
      </div>
      <p class="erro" :v-show="error.message">{{error.message}}</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyBRWW_JdjSzyzByx150Xq5OekCl-lQEbDw',
  authDomain: 'dartagnan-9ef83.firebaseapp.com',
  databaseURL: 'https://dartagnan-9ef83.firebaseio.com'
}

firebase.initializeApp(config)
var dbUser = firebase.database().ref('users')
export default {
  name: 'Login',
  data () {
    return {
      login: {
        Login: '',
        Senha: ''
      },
      loading: false,
      error: {
        message: ''
      }
    }
  },
  firebase: {
    users: dbUser
  },
  methods: {
    entrar () {
      if (this.users.find(element => element.user === this.login.Login && element.password === this.login.Senha)) {
        this.$store.commit('setUser', this.users.find(element => element.user === this.login.Login && element.password === this.login.Senha))
        this.$router.push('home')
      } else {
        this.error.message = 'usuario ou senha inválidos'
      }
    }
  }
}
</script>

<style scoped>
  .login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .caixaLogin {
    width: 20vw;
    height: 50vh;
    background-color: #FFF;
    border-radius: 1vw;
    animation-duration: 0.5s;
    animation-name: Opacity-Creator;
  }

  @keyframes Opacity-Creator {
    0% {
      width: 0vw;
      height: 0vh;
      opacity: 0;
    }
    90% {
      width: 21vw;
      height: 51vh;
    }
    100% {
      width: 20vw;
      height: 50vh;
      opacity: 1;
    }
  }

  .caixaLogin h1{
    text-align: center;
    animation-duration: 1s;
  }

  .caixaLogin .erro{
    text-align: center;
    color: red;
  }
</style>
