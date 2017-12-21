<template>
  <div>
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
            <div class="user container center" @click="inAtivar = !inAtivar, inUser = !inUser">
                <img class="avatar" src="../assets/avatar.png">
                {{user.name}}
            </div>
          </div>
        </div>
      </div>

      <div class="menu-mobile">
        <icon class="link" name="bars" scale="1.5"></icon>
      </div>
    </div>
    <Drawer :in-ativar="inAtivar">
      <div slot="body" class="container row wrap justify-around align-center" v-show="inUser" style="height:100%">
        <icon name="edit" scale="2" />
        <icon name="asterisk" scale="2" />
        <icon name="sign-out" scale="2" />
      </div>
    </Drawer>
  </div>
</template>
<script>
import Icon from 'vue-awesome'
import Drawer from '@/components/Drawer'
export default {
  components: { Drawer, Icon },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  data () {
    return {
      inAtivar: false,
      inUser: false
    }
  },
  methods: {
    bodyDrawer (option) {
      switch (option) {
        case 'user':
          this.inUser = true
          break
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .header {
    z-index: 9997;
    width: 100vw;
    height: 10vh;
    background-color: var(--corVerdeLink);
    align-items: center;
  }

  .header .logo img{
    height: 5vh;
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
