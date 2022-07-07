<template lang="pug">
<div class="bggg">
HelloWorld
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.bggg{
  height: 500px;
  width: 500px;
}
.afff{
background-color: green;
width: 200px ;
height: 50px;
}
.afff:hover{
  border-color: red;
  width: 200px ;
height: 50px;
}
</style>
