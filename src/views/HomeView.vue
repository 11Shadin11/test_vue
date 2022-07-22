<template>
  <div>
    <v-app
      style="
        background: url(https://bittrading.club/img/background-index4.png);
        background-repeat: no-repeat;
        background-position: top;
        background-size: 230%;
        min-height: 400px;
      "
    >
      <v-toolbar-items>
        <FirstHeaderButton></FirstHeaderButton>
      </v-toolbar-items>
      <div class="qwerty">
        <div class="homeText">
          <h1 class="h1">BIT TRADING</h1>
          <h2 >SECURE, CONVINIENT AND FAST</h2>
          <h2>WAY OF EARNING AND TRADING CRYPTO</h2>
        </div>
        <div class="ico"></div>
      </div>
    </v-app>
  </div>
</template>

<script>
import FirstHeaderButton from "../views/FirstHeaderButton.vue";
export default {
  name: "Menu",

  components: { FirstHeaderButton },

  data() {},
};
</script>
<style scoped>
.ico {
  background: url(https://bittrading.club/img/sprite-index.svg);
  background-size: 295%;
  background-position: 87.1% 107.5%;
  width: 283px;
  height: 283px;
  float: left;
  margin: 10px 0 0 -15px;
}
.qwerty {
  margin: 0 auto;
  width: 840px;
  text-align: center;
  overflow: hidden;
}
.homeText {
  color: white;
  text-align: left;
  float: right;
  margin-top: 70px;
  margin-left: -160px;
}
.h1 {
  font-size: 60px;
  letter-spacing: 2px;
  margin: 0;
  padding: 0;
}
</style>
