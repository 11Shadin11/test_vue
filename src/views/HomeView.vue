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
      <div class="sectionCurrency">
        <ul>
          <li>
            <h2>BITCOIN PRICE</h2>
            <span>22979.39 USD</span>
          </li>
          <li>
            <h2>BITCOIN PRICE</h2>
            <span>22568.89 EUR</span>
          </li>
          <li>
            <h2>24H VOLUME</h2>
            <span>3822 BTC</span>
          </li>
          <li>
            <h2>ACTIVE TRADERS</h2>
            <span>1,613,024</span>
          </li>
        </ul>
      </div>
      <div class="sectionDiagram"></div>
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
  /* background-size: 210.2%; */
  transform: scale(1);
  background-position: 50% 100%;
  max-height: 400px;
  width: 100%;
}
.ico {
  background: url(https://bittrading.club/img/sprite-index.svg);
  transform: scale(0.98);
  background-position: 86.4% 107.5%;
  width: 283px;
  height: 283px;
  float: left;
  margin: 11px 0 0 -16px;
}
.firstContent {
  margin: 0 auto;
  width: 840px;
  text-align: center;
  overflow: hidden;
}
.homeText {
  color: #fff;
  text-align: left;
  float: right;
  margin-top: 70px;
  margin-left: -180px;
}
.h1 {
  font-size: 60px;
  letter-spacing: 2px;
  margin: 0;
  padding: 0;
}
.sectionCurrency {
  width: 100% !important;
  height: 115px !important;
  background: #1e3063;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.sectionCurrency, ul {
  text-align: center;
  padding: 0;
  margin: 30px 0;
  list-style: none;
  overflow: hidden;
  color: #fff;
  font-size: 0;
  line-height: 0;
  letter-spacing: -4px;
}
.sectionCurrency, ul, li {
  padding: 0 45px;
  border-right: 1px solid #00b3bf;
  letter-spacing: 0;
  display: inline-block;
  vertical-align: top;
  font: 28px "uni_sans_lightregular", Arial, Helvetica, sans-serif;
}
.sectionDiagram{
  width: 100%;
  height: calc(100% - 200px);
}
</style>
