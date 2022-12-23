<template>
  <div>
    <section class="add-info-btn">
    <div class="btn-holder2">
      <p>Open account for free and start trading Bitcoin now!</p>
      <a>GET STARTED</a
      >
    </div>
  </section>
  <section class="platform">
    <div class="container2">
      <div class="row">
        <div class="col-lg-6 blue">
          <div class="area">
            <div class="block">
              <div class="img-holder">
                <div class="buy-bitcoins"></div>
              </div>
              <h2>Buy/Sell Bitcoin</h2>
              <p>
                Bit Trading is a place for everyone who wants to easily store
                and trade crypto currency. The most convenient way to buy
                bitcoin using an electronic wallet. Instant buy/sell of Bitcoin
                at fair price is guaranteed. Nothing extra. Join over 2,000,000
                users from all over the world satisfied with our services.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 blue">
          <div class="area">
            <div class="block">
              <div class="img-holder">
                <div class="trade-icon"></div>
              </div>
              <h2>Bitcoin Trading</h2>
              <p>
                Advanced order-matching algorithms are backed by unique trade
                engine. Orderbook liquidity allows to execute high-volume orders
                and apply market making trading, high frequency trading and
                scalping strategies. Compliant with security standards, we
                guarantee safety of your assets and data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
<script>
export default {
  name: "InfoBtn",
};
</script>
<style scoped>
.add-info-btn {
  overflow: hidden;
  padding: 0 0 0;
  background: #1783ac;
  margin-top: 0;
}
.btn-holder2 {
  overflow: hidden;
  padding: 10px 0;
  text-align: center;
  background: #00c2d2;
  margin-top: 10px;
  margin-bottom: 10px;
}
.btn-holder2 p {
  text-align: center;
  color: #fff;
  margin: auto;
  padding: 10px 90px;
  font: 20px "source_sans_prolight", Arial, Helvetica, sans-serif;
}
a {
  display: inline-block;
  padding: 22px 41px;
  color: #fff;
  border: 2px solid #fff;
  text-decoration: none;
  font: 26px "uni_sans_boldregular", Arial, Helvetica, sans-serif;
  font-weight: 600;
  width: 18%;
  min-width: 280px;
  border-radius: 3px;
}
.v-application a {
    color: #fff;
}
a:hover {
  color: #00c2d2;
  background: #fff;
}
.platform {
  margin: 0;
  overflow: hidden;
  background: linear-gradient();
}
.container2 {
  padding: 10px;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.col-lg-6 {
  width: 50%;
}
.platform .col-lg-6 .block {
  background: #1c8fbb;
  padding: 15px 5px;
  margin: 0 0 10px;
  color: #fff;
  overflow: hidden;
  font: 18px/22px 'source_sans_proregular',Arial,Helvetica,sans-serif;
  transition: all .2s ease;
  -webkit-transition: all .2s ease;
}
.platform .img-holder {
  float: left;
  margin: 40px 10px 0 15px;
}
.buy-bitcoins {
  margin: 0 auto;
  min-width: 10px;
  background: url(https://bittrading.club/img/sprite-index.svg);
  width: 120px;
  height: 101px;
  background-size: 630%;
  background-position: -.3% 79.3%;
  display: flex;
  justify-content: center;
}
.platform .block h2 {
  text-align: left;
  margin: 0 0 16px;
  color: #fff;
  letter-spacing: 1px;
  word-spacing: 2px;
  font: 31px/34px 'uni_sans_semiboldregular',Arial,Helvetica,sans-serif;
  padding-left: 165px;
}
.platform .block p {
  padding-left: 165px;
  font-family: uni_sans_bookregular,Arial,Helvetica,sans-serif;
  letter-spacing: .5px;
  font-size: 16px;
}
.trade-icon {
  margin: 0 auto;
  min-width: 10px;
  width: 120px;
  height: 101px;
  background: url(https://bittrading.club/img/sprite-index.svg) no-repeat;
  background-size: 630%;
  background-position: 20.2% 79.3%;
}
.blue{
  background: linear-gradient(#192743 30%, #0f4c77 30% 80%);
}
</style>