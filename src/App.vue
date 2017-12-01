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

.form .btn-default{
  width: 10vw;
  height: 5vh;
  margin-top: 4vh;
  background-color: #4CAF50;
  color: var(--corSecundaria);
  border: none;
  border-radius: 1vw;
  cursor: pointer;
}
.form .btn-default:hover {
  background-color: #46a049;
}

.form .btn-secondary{
  height: 5vh;
  margin-top: 4vh;
  background-color: #4CAF50;
  color: var(--corSecundaria);
  border: none;
  border-radius: 1vw;
  cursor: pointer;
}
.form .btn-secondary:hover {
  background-color: #46a049;
}
</style>
