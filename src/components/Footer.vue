<template>
  <div class="footer">
    <div class="footer-container">
      <div class="extra">
        <div class="row-fluid row">
          <div class="span10 col-xs-12">
            <div class="row">
              <div class="row col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="span3 col-xs-6">
                  <h4>Services</h4>
                  <ul>
                    <li><a href="#">Bitcoin Trading</a></li>
                    <li><a href="profile.html">Profile</a></li>
                  </ul>
                </div>
                <div class="span3 col-xs-6">
                  <h4>Information</h4>
                  <ul>
                    <li><a href="profile.html">Wallet</a></li>
                    <li><a href="buysell.html">Getting Started</a></li>
                  </ul>
                </div>
              </div>
              <div
                class="row col-xs-12 col-sm-12 col-md-6 col-lg-6 col_l_foorter"
              >
                <div class="span3 col-xs-6">
                  <h4>About</h4>
                  <ul>
                    <li><a href="about-2.html">About Us</a></li>
                    <li><a href="terms.html">Terms of Use</a></li>
                  </ul>
                </div>
                <div class="span3 col-xs-6">
                  <h4>Partners</h4>
                  <ul>
                    <li><a href="https://binance.com/">Binance</a></li>
                    <li><a href="https://icobench.com/">Icobench</a></li>
                    <li>
                      <a href="https://cointelegraph.com/">Cointelegraph</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row-fluid row">
        <div class="text-center copyright">
          © 2014-2022 Bit Trading LTD
          <span class="hidden-phone"
            >Trademarks belong to their respective owners. All rights
            reserved</span
          >
          <span class="server-time">
            Server time:
            <span class="server-time-moment">
              <span id="time_date"> Thursday, December 22, 2022, 9:30 am </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  name: "footer",
};
</script>
<style scoped>
.footer .footer-bottom {
    background: #171d27;
}
.footer .container {
    padding-top: 20px;
    padding-bottom: 0;
}

.footer .container, footer .container {
    font-size: 12px;
    position: relative;
}
.footer {
  font-size: 12px;
  color: #999;
  background: #232a34;
  position: relative;
  z-index: 100;
}
.footer .footer-container {
  padding-top: 20px;
  padding-bottom: 0;
}

.footer .footer-container,
footer .footer-container {
  font-size: 12px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.extra {
  padding: 25px 30px 25px;
  font-size: 13px;
  color: #bbb;
  /* background: #212e3f; */
  /* border-bottom: 1px solid #555; */
}
.footer .footer-container .row,
.footer .footer-container .row-fluid {
  margin-left: -15px;
  margin-right: -15px;
}

.row {
  margin-right: -15px;
  margin-left: -15px;
}
.footer .footer-container .span10 {
  padding-left: 15px;
  padding-right: 15px;
}

.col-xs-12 {
  width: 100%;
}
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
  float: left;
}
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.footer .footer-container .row,
.footer .footer-container .row-fluid {
  margin-left: -15px;
  margin-right: -15px;
}

@media (min-width: 1200px) {
  .col-lg-6 {
    width: 50%;
  }
}
@media (min-width: 1200px) {
  .col-lg-1,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9 {
    float: left;
  }
}
@media (min-width: 992px) {
  .col-md-6 {
    width: 50%;
  }
}
@media (min-width: 992px) {
  .col-md-1,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9 {
    float: left;
  }
}
@media (min-width: 768px) {
  .col-sm-12 {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .col-sm-1,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9 {
    float: left;
  }
}
.col-xs-12 {
  width: 100%;
}
.extra h4,
.extra .h4 {
  display: block;
  margin-bottom: 12px;
  /* color: #00bcc7; */
  font-size: 12px;
  text-transform: uppercase;
}

.footer h4,
.footer .h4,
.footer h3 {
  margin: 0 0 18px;
  text-transform: uppercase;
  font: 14px/16px "source_sans_proregular", Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -ms-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
}
.extra ul {
  padding: 0;
  margin: 0;
}
ol,
ul {
  margin-top: 0;
  margin-bottom: 10px;
}
.extra ul li {
  margin-bottom: 0.4em;
  list-style: none;
  font-size: 11px;
  line-height: 20px;
}
.extra a {
  color: #989fa9;
}

.footer a {
  color: #989fa9;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a {
  background-color: transparent;
}
</style>