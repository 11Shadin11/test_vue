<template>
  <v-app>
    <section class="bac">
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
    </section>
    <section class="platform">
      <div class="sectionCurrency">
        <div class="containerli">
          <ul>
            <li>
              <h2 class="currencyHeader">BITCOIN PRICE</h2>
              <span>{{BITCOINUSD}} USD</span>
            </li>
            <li>
              <h2 class="currencyHeader">BITCOIN PRICE</h2>
              <span>{{BITCOINEUR}} EUR</span>
            </li>
            <li>
              <h2 class="currencyHeader">24H VOLUME</h2>
              <span>{{VOLUME}} BTC</span>
            </li>
            <li>
              <h2 class="currencyHeader">ACTIVE TRADERS</h2>
              <span>{{ACTIVETRADERS}}</span>
            </li>
          </ul>
        </div>
    </div>
    <div class="platform-features" style="margin-left:0">
      <div class="container">
        <div>
          <div class="tradingview-widget-container">
            <div id="tradingview_7288d">
              <div id="tradingview_38905-wrapper" class="tradingview_38905-wrapper">
                <div class="qwe">
                  <iframe id="tradingview_38905" src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_38905&amp;symbol=COINBASE%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=dark&amp;style=0&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=bittrading.club&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD" style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen="">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <section>
      <InfoBtn></InfoBtn>
    </section>
    <section>
      <AddInfo></AddInfo>
    </section>
    <section>
      <Footer></Footer>
    </section>
  </v-app>
</template>

<script>
import FirstHeaderButton from "../components/FirstHeaderButton.vue";
import InfoBtn from "../components/AddInfoBtn.vue";
import AddInfo from "../components/AddInfo.vue";
import Footer from "../components/Footer.vue"
export default {
  name: "Menu",
  props:{
    BITCOINUSD: {
      type: Number,
      default:24092.45
    },
    BITCOINEUR:{
      type: Number,
      default:22568.89
    },
    VOLUME:{
      type: Number,
      default:3822
    },
    ACTIVETRADERS:{
      type:String,
      default:"1,613,024"
    }
  },
  components: { FirstHeaderButton, InfoBtn, AddInfo, Footer },
  
  mounted(){
    setInterval(()=>this.BITCOINUSD = 24092.45 + Math.ceil(Math.random()*10),6000000)
    setInterval(()=>this.BITCOINEUR = 22568.89 + Math.ceil(Math.random()*10),6000000)
    setInterval(()=>this.VOLUME = 3822 + Math.ceil(Math.random()*10),6000000)

    setInterval(()=>this.BITCOINUSD = 24092.45 - Math.ceil(Math.random()*10),3000000)
    setInterval(()=>this.BITCOINEUR = 22568.89 - Math.ceil(Math.random()*10),3000000)
    setInterval(()=>this.VOLUME = 3822 - Math.ceil(Math.random()*10),6000000)

  },
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
.platform{
  background: #1e3063;
}
.sectionCurrency {
  width: 100% !important;
  min-height: 115px !important;
}
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 0;
  list-style: none;
  overflow: hidden;
  color: #fff;
  letter-spacing: -4px;
}
li {
  padding: 0 45px;
  border-right: 1px solid #00b3bf;
  letter-spacing: 0;
  display: inline-block;
  font: 28px "uni_sans_lightregular", Arial, Helvetica, sans-serif;
}
li:last-child {
  border: none;
}
ul, li, span {
  letter-spacing: 0;
  font: 28px 'uni_sans_lightregular',Arial,Helvetica,sans-serif;
  font-weight: 100 !important;
} 
.currencyHeader{
  color: #59d0ff;
  font: 14px'uni_sans_semiboldregular',Arial,Helvetica,sans-serif;
  font-weight: 700;
  margin: 0 0 6px;
}
.platform-features {
  background:#19264a;
  color: #fff;
  text-align: center;
  padding: 60px 0;
}
.container{
  /* padding-right: 2px;
  padding-left: 15px; */
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
}
.containerli{
  padding-top:30px;
}
.qwe{
  width: 1024px;
  height: 610px;
  /* margin-left: 440px; */
}
.tradingview_38905-wrapper {
  margin: 0 auto;
  text-align: center;
}
</style>
