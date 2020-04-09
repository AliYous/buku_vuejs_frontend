<template>
  <div id="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader
  }
  
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
@import url('https://fonts.googleapis.com/css?family=Gotu');


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Gotu', 'Roboto Condensed' ,Helvetica, sans-serif;
  line-height: 1.4;
  background: '#FAFAFA';
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;  
}

.btn:hover {
  background: #666;
}
</style>
