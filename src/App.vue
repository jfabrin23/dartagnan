<template>
  <router-view/>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
:root {
  --corPrincipal: black;
  --corSecundaria: white;
  --corVerdeLink: #4CAF50;
  --corVerdeHover: #46a049;
  --corTexto: black;
  --corTextoHover: #CCC;
}

@font-face {
	font-family: 'Roboto-Light';
	src: url('./assets/fonts/Roboto-Light.eot');
	src: url('./assets/fonts/Roboto-Light.eot?#iefix') format('embedded-opentype'),
		url('./assets/fonts/Roboto-Light.woff') format('woff'),
		url('./assets/fonts/Roboto-Light.ttf') format('truetype');
	font-weight: 300;
	font-style: normal;
}

body {
  margin: auto;
  background-color: #EEE9E9;
  max-width: 100vw;
  max-height: 100vh;
  font-family: 'Roboto-Light', sans-serif;
}

.container {
  display: flex
}
.container-inline {
  display: inline-flex
}
.row {
  flex-direction: row
}
.row-reverse {
  flex-direction: row-reverse
}
.column {
  flex-direction: column
}
.column-reverse {
  flex-direction: column-reverse
}
.wrap {
  flex-wrap: wrap
}
.nowrap {
  flex-wrap: nowrap
}
.wrap-reverse {
  flex-wrap: wrap-reverse
}
.justify-start {
  justify-content: flex-start
}
.justify-end {
  justify-content: flex-end
}
.justify-center {
  justify-content: center
}
.justify-around {
  justify-content: space-around
}
.justify-between {
  justify-content: space-between
}
.align-start {
  align-items: flex-start
}
.align-end {
  align-items: flex-end
}
.align-center {
  align-items: center
}
.align-baseline {
  align-items: baseline
}
.align-stretch {
  align-items: stretch
}
.center {
  justify-content: center;
  align-items: center
}
.basis1 {
  flex-basis: 100px
}
.basis2 {
  flex-basis: 200px
}
.basis3 {
  flex-basis: 300px
}
.basis4 {
  flex-basis: 400px
}
.basis5 {
  flex-basis: 500px
}
.basis6 {
  flex-basis: 600px
}
.flex {
  flex: 1;
}
.flex1 {
  flex-grow: 1;
}
.flex2 {
  flex-grow: 2;
}
.flex3 {
  flex-grow: 3;
}
.flex4 {
  flex-grow: 4;
}
.flex5 {
  flex-grow: 5;
}
</style>
