<template>
  <div id="app">
    <div class="container">
      <router-link style="font-size: 35px" to="/"><ion-icon name="navigate"></ion-icon><p>Départements</p></router-link>
      <router-link style="font-size: 35px" to="/cm"><ion-icon name="business"></ion-icon><p>Communes</p></router-link>
      <router-link style="font-size: 35px" to="/rg"><ion-icon name="map"></ion-icon><p>Régions</p></router-link>
    </div>
  </div>
</template>


<style lang="scss">
  * {
    text-decoration: none;
  }
  h2 {
    color: #3880FF;
  }
  .router-link-exact-active {
    color: #3880FF;
  }
  .container {
    width: 100%;
    padding: 10px;
    background: #FFFFFF;
    display: flex;
    border-top: 1px solid darkgrey;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1000000000000;
  }
  a {
    display: flex;
    width: 33.3333333%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #3B3B3B;
  }

  p{
    color: #3B3B3B;
    margin: 0;
    font-size: 12px;
  }
  .router-link-exact-active {
    color: #3880ff;
  }
</style>

<script>
  export default {
    name: "Nav"
  }
</script>
