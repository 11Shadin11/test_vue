<template >
  <div
    class="btn"
    style="
      margin: 0 auto;
      width: 1200px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding: 20px;
      align-content: space-between;
    "
  >
    <v-row>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="598px"
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            outlined
            v-bind="attrs"
            v-on="on"
            style="
              color: #fff;
              border: 1px solid white;
              border-radius: 3px;
              width: 70px;
              min-height: 32px;
              font: 13px/20px 'uni_sans_semiboldregular', Arial, Helvetica,
                sans-serif;
              display: inline-block;
              vertical-align: middle;
              letter-spacing: 0;
              padding: 6px;
              margin-left: 650px;
            "
            >SIGN IN</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <span >Login</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Login or Email*"
                    required
                    class="mb-2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    v-model="pass"
                    :error-messages="error"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="checkinf"> Login </v-btn>
            <v-btn color="primary" dark text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-btn
      depressed
      style="
        margin: 5px;
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
        margin: 5px;
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
      style="
        margin: 5px;
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
  name: "FirstHeaderButton",

  data() {
    return {
      dialog: true,
      error:null,
    };
  },
  methods: {
    checkinf() {
      console.log(this.pass);
      if (this.pass == "123") {
        this.error=""
        return false;
      } else {
        this.error="ERROR"
        return true;
        
      }
    }
  },
};
</script>
<style scoped>
</style>