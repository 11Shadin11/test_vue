<template>
  <v-app>
    <div class="bac">
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
    </div>
    <div class="sectionCurrency">
      <ul>
        <li>
          <h2 class="currencyHeader">BITCOIN PRICE</h2>
          <span>22979.39 USD</span>
        </li>
        <li>
          <h2 class="currencyHeader">BITCOIN PRICE</h2>
          <span>22568.89 EUR</span>
        </li>
        <li>
          <h2 class="currencyHeader">24H VOLUME</h2>
          <span>3822 BTC</span>
        </li>
        <li>
          <h2 class="currencyHeader">ACTIVE TRADERS</h2>
          <span>1,613,024</span>
        </li>
      </ul>
    </div>
    <div class="sectionDiagram">
      <div ></div>
    </div>
  </v-app>
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
  background: #1c5d7a url(https://bittrading.club/img/background-index4.png);
  background-repeat: no-repeat;
  /* background-size: 210.2%; */
  transform: scale(1);
  background-position: 50% 100%;
  min-height: 400px;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.ico {
  background: url(https://bittrading.club/img/sprite-index.svg);
  transform: scale(0.987);
  background-position: 86.4% 107.5%;
  width: 283px;
  height: 283px;
  float: left;
  margin: 12px 0 0 -16px;
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
  margin: 50px 0 0 -10px;
  font-family: "uni_sans_semiboldregular", Arial, Helvetica, sans-serif;
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-25%,-65%);
}
.h1 {
  font: 62px "uni_sans_semiboldregular", Arial, Helvetica, sans-serif;
  font-weight: 500;
  margin: 0 auto;
}
.sectionCurrency {
  width: 100% !important;
  height: 115px !important;
  background: #1e3063;
}
ul {
  text-align: center;
  padding: 0;
  list-style: none;
  overflow: hidden;
  color: #fff;
  font-size: 0;
  line-height: 0;
  letter-spacing: -4px;
}
li {
  padding: 0 45px;
  border-right: 1px solid #00b3bf;
  letter-spacing: 0;
  display: inline-block;
  vertical-align: top;
  font: 28px "uni_sans_lightregular", Arial, Helvetica, sans-serif;
}
li:last-child {
  border: none;
} 
.currencyHeader{
  color: #00b3bf;
  font: 15px/16px 'uni_sans_semiboldregular',Arial,Helvetica,sans-serif;
  margin: 0 0 6px;
}
.sectionDiagram {
  background: url(C:/Users/user1/Downloads/sec2.png);
  background-repeat: no-repeat;
  width: 100%;
  height: 730px;
}
</style>
