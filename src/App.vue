<template lang="pug">
<div class="qw" style="background:url(https://bittrading.club/img/background-index4.png)">
<HomeView/>
 <Home/>
</div>

</template>

<script>
import HomeView from './views/HomeView.vue'
import Home from './views/Home.vue'
export default {
  name: "App",
  components: {HomeView, Home},
};
</script>

<style scoped>
.qw{
  background-size: cover;
  background-repeat: no-repeat;
}
</style>