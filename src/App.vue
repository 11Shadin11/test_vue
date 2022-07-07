<template lang="pug">
<div >
  <div>
    <Menu></Menu>
  </div>
</div>
</template>

<script>
import Menu from './views/HomeView.vue'
import Cont from './views/Home.vue'
import About from './views/About.vue'
export default {
  name: "App",
  components: {Menu, Cont,About},
};
</script>

<style scoped>
</style>