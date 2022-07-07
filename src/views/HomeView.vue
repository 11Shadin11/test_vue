<template>
  <div >
    <div class="menu-bar">
      <ul class="ul">
        <li>SIGN IN</li>
        <li>REGISTER</li>
        <li>TRADING</li>
        <li>ABOUT US</li>
      </ul>
    </div>
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'HomeView',

    components: {
      // HelloWorld,
    },

    data()  {

    },
  }
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.menu-bar {
  width: 960;
  margin: 0 auto;
 }
 .menu-bar::before{
  content: '';
  display: block;
  height: 100px;
  width: 100%;
  background: coral;
  position: absolute;
  left: 0;
  z-index: -1;
 }
 ul{
  list-style: none;
  height: 50px;
  position: absolute;
 }
 ul li{
  float: right;
  color: white;
  padding: 0 30px;
 text-align: center;
 }
</style>
