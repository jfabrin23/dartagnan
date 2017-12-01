<template>
  <div class="header wrap container align-center">
    <div class="logo flex">
      <h1>Logo</h1>
    </div>

    <div class="flex basis2">
      <div class="container center">
        <div class="link">Produto</div>
        <div class="link">Teste 2</div>
        <div class="link">Teste 3</div>
        <div class="link">Usuários</div>
        <div class="link">Teste 4</div>
      </div>
    </div>

    <div class="basis1">
      <div class="container center">
        <div>{{user.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user () {
      return this.$store.state.user
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
</style>
