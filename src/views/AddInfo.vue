<template>
  <section class="add-info">
    <div class="container">
      <div class="row">
        <h2 class="add-info-header">Why millions chose Bitfast Trade</h2>
        <div class="info-holder">
          <ul class="list">
            <li>
              <div class="index-icon payment"></div>
              <div class="list-wrapper">
                <h2 class="list-title">Payment Options</h2>
                <p>
                  Most popular methods: electronic wallets, blockchain,
                  cryptocurrency
                </p>
              </div>
            </li>
            <li class="column1">
              <div class="index-icon security"></div>
              <div class="list-wrapper">
                <h2 class="list-title">Strong Security</h2>
                <p>
                  Protection against DDoS attacks, full data encryption,
                  compliant with PCI DSS standards
                </p>
              </div>
            </li>
            <li class="column2">
              <div class="index-icon coverage"></div>
              <div class="list-wrapper">
                <h2 class="list-title">World Coverage</h2>
                <p>Providing services in 100% countries around the globe.</p>
              </div>
            </li>
          </ul>
          <ul class="list">
            <li>
              <div class="index-icon legal"></div>
              <div class="list-wrapper">
                <h2 class="list-title">Legal Compliance</h2>
                <p>
                  Registration in Singapore, MSB status in FinCEN, essential
                  licenses and strong relations with banks
                </p>
              </div>
            </li>
            <li class="column1">
              <div class="index-icon margin"></div>
              <div class="title1 list-wrapper">
                <h2 class="list-title">Margin Trading</h2>
                <p>
                  1:2 and 1:3 leverages, automatic funds borrowing, no extra
                  accounts needed, negative balance protection.
                </p>
              </div>
            </li>
            <li class="column2">
              <div class="index-icon comissions"></div>
              <div class="list-wrapper">
                <h2 class="list-title">Competitive Commissions</h2>
                <p>
                  Reasonable trading fees for takers and makers, special
                  conditions for high volume traders, strong offers for market
                  makers.
                </p>
              </div>
            </li>
          </ul>
          <ul class="list">
            <li>
              <div class="index-icon cross-platform"></div>
              <div class="list-wrapper">
                <h2 class="list-title">Cross-Platform Trading</h2>
                <p>
                  Trading via website, <a href="mobile.html">mobile app</a>,
                  <a href="websocket.html">WebSocket</a> and
                  <a href="rest-api.html">REST API</a>.
                  <a href="fix-api.html">FIX API</a> for institutional traders
                </p>
              </div>
            </li>
            <li class="column1">
              <div class="index-icon reporting"></div>
              <div class="list-wrapper">
                <h2 class="list-title">AI-based assistance</h2>
                <p>
                  AI market predictions with machine learning on big data sets.
                </p>
              </div>
            </li>
            <li class="column2">
              <div class="index-icon liquidity"></div>
              <div class="list-wrapper">
                <h2 class="list-title">High Liquidity</h2>
                <p>
                  Fast order execution, low spread, access to high liquidity
                  orderbook for top currency pairs
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name:"AddInfo"
};
</script>
<style scoped>
.add-info {
  overflow: hidden;
  padding: 175px 0 0;
  background: #0f4c77;
}
.container {
  width: 1170px;
  margin-top: -100px;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.add-info .add-info-header {
  color: #fff;
  font: 40px/40px 'uni_sans_boldregular',Arial,Helvetica,sans-serif;
  text-transform: uppercase;
  margin: 0 auto;
  padding-bottom: 50px ;
  display: flex;
  justify-content: center;
}
.info-holder {
  overflow: hidden;
  padding: 0 15px 0 14px;
}
.add-info .list {
  padding: 0;
  margin: 0 0 20px -1px;
  list-style: none;
  color: #fff;
  overflow: hidden;
  font: 16px/24px 'source_sans_proregular',Arial,Helvetica,sans-serif;
}
.add-info .list li {
  width: 33.3%;
  float: left;
  padding: 0 40px 0 0;
}
.index-icon.payment {
  background-position: 24.7% 60%;
}
.index-icon {
  float: left;
  min-width: 10px;
  width: 55px;
  height: 55px;
  background: url(https://bittrading.club/img/sprite-index.svg) no-repeat;
  background-size: 926%;
}
.add-info .list .list-wrapper {
  color: #fff;
  letter-spacing: 1px;
  margin: 0 0 16px;
  padding: 0 0 10px 74px;
  position: relative;
  font: 16px/20px 'uni_sans_bookregular',Arial,Helvetica,sans-serif;
  text-align: left;
}
.add-info h2 span, .add-info h2.list-title {
  display: block;
  letter-spacing: 1px;
  font-size: 18px;
  font-style: normal;
  line-height: 20px;
  position: relative;
  margin: 0 0 5px;
  text-align: left;
  text-transform: uppercase;
  font-family: uni_sans_regular,Arial,Helvetica,sans-serif;
}
.add-info p {
  margin: 0 0 25px;
}
.index-icon.security {
  background-position: 12.7% 60%;
}
.index-icon {
  float: left;
  min-width: 10px;
  width: 55px;
  height: 55px;
  background: url(https://bittrading.club/img/sprite-index.svg) no-repeat;
  background-size: 926%;
}
.index-icon.coverage {
  background-position: 48.3% 60%;
}
.index-icon {
  float: left;
  min-width: 10px;
  width: 55px;
  height: 55px;
  background: url(https://bittrading.club/img/sprite-index.svg) no-repeat;
  background-size: 926%;
}
.index-icon.legal {
  background-position: 101% 60%;
}
.index-icon {
  float: left;
  min-width: 10px;
  width: 55px;
  height: 55px;
  background: url(https://bittrading.club/img/sprite-index.svg) no-repeat;
  background-size: 926%;
}
</style>