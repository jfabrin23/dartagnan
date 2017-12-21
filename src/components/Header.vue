<template>
  <div class="header wrap container align-center">
    <div class="logo flex clicavel" @click="$router.push('home')">
      <img src="../assets/logo/logo.png">
    </div>

    <div class="menu-desk">
      <div class="basis3">
        <div class="container center">
          <div class="link" @click="$router.push('produto')">Produto</div>
          <div class="link">Teste 2</div>
          <div class="link">Teste 3</div>
          <div class="link">Usuários</div>
          <div class="user container center" @click="inAtivar = true" >
              <img class="avatar" src="../assets/avatar.png">
              {{user.name}}

              <div v-bind:class="{'teste':inAtivar}">
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="menu-mobile">
      <h1>Teste</h1>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  data () {
    return {
      inAtivar: false
    }
  }
}
</script>

<style lang="css" scoped>
  .header {
    width: 100vw;
    height: 10vh;
    background-color: var(--corVerdeLink);
    align-items: center;
  }

  .header .logo img{
    height: 8vh;
    padding: 1vh
  }

  .header h1{
    color: var(--corSecundaria);
    padding-left: 1vw;
  }

  .header .link{
    padding-left: 1vw;
    padding-right: 1vw;
    color: var(--corSecundaria);
    cursor: pointer;
  }

  .header .link:hover{
    color: var(--corTextoHover)
  }

  .header .user {
    margin-right: 1vw;
    color: var(--corSecundaria);
    -webkit-transition: width 2s;
    transition: width 2s;
  }

  .header .user:hover {
    color: var(--corTextoHover);
    cursor: pointer;
  }

  .teste {
    margin-top:10vh;
    height: 100px;
    background-color: black;
    animation: teste 2s ease;
  }

  @keyframes teste {
    0% {
      height: 0px;
    }
    100% {
      height: 100px;
    }
  }

  .header .avatar {
    height: 5vh;
    border-radius: 50%;
    border: 2px solid var(--corSecundaria);
    margin-right: 0.5vw;
  }

  @media screen and (max-width:480px){
    .menu-desk {
        display:none;
    }
    .menu-mobile {
      display: block;
    }
  }
  @media screen and (min-width:481px){
    .menu-mobile {
        display:none;
    }
    .menu-desk {
      display: block;
    }
  }
</style>
