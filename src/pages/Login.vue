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
            <button @click="entrar">Entrar</button>
          </p>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: {
        Login: '',
        Senha: ''
      },
      loading: false
    }
  },
  methods: {
    entrar () {
      this.$router.push('home')
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

  .form {
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 2vh;
    padding-bottom: 2vh;
  }

  .form label {
    font-size: 12px;
  }

  .form input[type="text"], .form input[type="tel"], .form input[type="email"], .form input[type="password"]{
    background-color: transparent;
    color: var(--corPrincipal);
    word-wrap: break-word;
    word-break: break-all;
    width: 100%;
    margin-bottom: 20px;
    border: 0;
    border-bottom: 1px solid var(--corPrincipal);
    padding-left: 0;
    font-size: 2.5vh;
    position: relative
  }

  .form button{
    width: 10vw;
    height: 5vh;
    margin-top: 4vh;
    background-color: #4CAF50;
    color: var(--corSecundaria);
    border: none;
    border-radius: 1vw;
    cursor: pointer;
  }
  .form button:hover {
    background-color: #46a049;
  }
</style>
