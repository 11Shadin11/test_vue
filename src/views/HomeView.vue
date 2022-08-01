<template>
  <div>
    <v-app class="bac">
      <v-toolbar-items>
        <FirstHeaderButton></FirstHeaderButton>
      </v-toolbar-items>
      <div class="firstContent">
        <div class="homeText">
          <h1 class="h1">BIT TRADING</h1>
          <h2>SECURE, CONVINIENT AND FAST</h2>
          <h2>WAY OF EARNING AND TRADING CRYPTO</h2>
        </div>
        <div class="ico"></div>
      </div>
      <div class="sectiontwo"></div>
    </v-app>
  </div>
</template>

<script>
import FirstHeaderButton from "../views/FirstHeaderButton.vue";
export default {
  name: "Menu",

  components: { FirstHeaderButton },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.bac {
  background: url(https://bittrading.club/img/background-index4.png);
  background-repeat: no-repeat;
  background-position: top;
  background-size: 210.2%;
  background-position: 50% 100%;
  max-height: 400px;
  width: 100%;
}
.ico {
  background: url(https://bittrading.club/img/sprite-index.svg);
  background-size: 295%;
  background-position: 87.1% 107.5%;
  width: 283px;
  height: 283px;
  float: left;
  margin: 10px 0 0 -15px;
}
.firstContent {
  margin: 0 auto;
  width: 840px;
  text-align: center;
  overflow: hidden;
}
.homeText {
  position: absolute;
  color: white;
  text-align: left;
  float: right;
  left: 50%;
  top: 50%;
  transform: translate(-30%, -200%);
}
.h1 {
  font-size: 60px;
  letter-spacing: 2px;
  margin: 0;
  padding: 0;
}
.sectiontwo {
  width: 100% !important;
  height: 115px !important;
  background: #1e3063;
}
</style>
