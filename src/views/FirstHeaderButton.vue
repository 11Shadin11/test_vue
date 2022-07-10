<template>
    <div class="btn"
          style="
            margin: 12px;
            width: 800px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding: 20px;
            float:left;
            align-content: end; 
          "
        >
          <v-btn
            depressed
            style="
              background: transparent;
              color: white;
              border: 1px solid white;
              border-radius: 3px;
              width: 70px;
              min-height: 32px;
              <!-- font: 13px/20px 'uni_sans_semiboldregular', Arial, Helvetica, -->
                <!-- sans-serif; -->
              <!-- display: inline-block;
              vertical-align: middle; -->
              letter-spacing: 0;
              padding: 10px;
              margin-left: 5px;
            "
            >SIGN IN</v-btn
          >
          <v-btn
            depressed
            style="
              margin: 10px;
              background: white;
              color: #093152;
              border: 1px solid white;
              border-radius: 3px;
              width: 70px;
              min-height: 32px;
              font-size: 13px;
            "
            >REGISTER</v-btn
          >
          <v-btn
            depressed
            style="
              margin: 10px;
              background: transparent;
              color: white;
              border: 1px solid white;
              border-radius: 3px;
              width: 70px;
              min-height: 32px;
              font-size: 13px;
            "
            >TRADING</v-btn
          >
          <v-btn
            depressed
            style="
              margin: 10px;
              background: transparent;
              color: white;
              border: 1px solid white;
              border-radius: 3px;
              width: 70px;
              min-height: 32px;
              font-size: 13px;
            "
            >ABOUT US</v-btn
          >
        </div>
</template>
<script>
export default {
    name:"FirstHeaderButton"
}
</script>
<style scoped>
.v-btn:hover{
  background: red;
}
</style>