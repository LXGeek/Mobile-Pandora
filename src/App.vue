<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
  }
  body, #app {
    background: #385e97;
  	font:12px "Open Sans", sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
