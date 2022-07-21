<template>
  <div>
    <v-app
      style="
        background: url(https://bittrading.club/img/background-index4.png);
        background-clip: border-box;
        background-repeat: no-repeat;
        background-position: top;
        background-size: 230%;
        min-height: 400px;
        overflow: hidden;
        position: relative;
        object-fit: cover;
      "
    >
      <v-toolbar-items>
        <FirstHeaderButton></FirstHeaderButton>
      </v-toolbar-items>
      <div class="qwerty" style="width: 840px; height: 283px">
        <div
          style="
            font-size: 62px/60px;
            color: white;
            text-align: left;
            float: right;
          "
        >
          <h1 class="qwe">BIT TRADING</h1>
          <h2>SECURE, CONVINIENT AND FAST</h2>
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
  background-position: 88.1% 107.5%;
  width: 283px;
  height: 283px;
  float: left;
  min-width: 10px;
}
.qwerty {
  margin: 0 auto;
  width: 840px;
  text-align: center;
  overflow: hidden;
}
.qwe{
  font-size: 60px;
}
</style>
