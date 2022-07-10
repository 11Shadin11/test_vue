<template>
    <div
          style="
            margin-left: 10px ;
            width: 800px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding: 18px 26px 0 26cm;
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
              font: 13px/20px 'uni_sans_semiboldregular', Arial, Helvetica,
                sans-serif;
              display: inline-block;
              vertical-align: middle;
              letter-spacing: 0;
              padding: 0;
              margin-left: 5px;
            "
            >SIGN IN</v-btn
          >
          <v-btn
            depressed
            style="
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
