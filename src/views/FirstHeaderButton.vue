<template >
  <div
    style="
      margin: 0 auto;
      width: 1100px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding: 18px 26px 10px 34px;
      text-align: right;
    "
  >
    <v-dialog v-model="dialog" max-width="598px" overlay-color="#fff">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="all" outlined v-bind="attrs" v-on="on">SIGN IN</v-btn>
      </template>
      <v-card>
        <br />
        <v-card-title>
          <h2
            style="
              margin: auto;
              padding: auto;
              font-size: 30px;
              font-weight: 500;
              color: #333333;
            "
          >
            Login
          </h2>
        </v-card-title>
        <v-card-text>
          <v-container style="float: right">
            <v-row>
              <span style="color: black">
                Please fill in your credentials to login.
              </span>
              <v-col cols="12">
                <label
                  style="
                    font-size: 14px;
                    font-weight: 700;
                    color: #333;
                    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
                    margin-bottom: 50px;
                  "
                  >Login or email</label
                >
                <input
                  height="50px"
                  outlined
                  v-model="passE"
                  style="
                    display: block;
                    width: 100%;
                    height: 34px;
                    padding: 6px 12px;
                    font-size: 14px;
                    line-height: 1.42857143;
                    color: #555;
                    background-color: #fff;
                    background-image: none;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
                    transition: border-color ease-in-out 0.15s,
                      box-shadow ease-in-out 0.15s,
                      -webkit-box-shadow ease-in-out 0.15s;
                  "
                />
              </v-col>
              <v-col cols="12">
                <label
                  style="
                    font-size: 14px;
                    font-weight: 700;
                    color: #333;
                    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
                  "
                  >Password</label
                >
                <input
                  outlined
                  type="password"
                  v-model="pass"
                  color="red"
                  style="
                    display: block;
                    width: 100%;
                    height: 34px;
                    padding: 6px 12px;
                    font-size: 14px;
                    line-height: 1.42857143;
                    color: #555;
                    background-color: #fff;
                    background-image: none;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
                    transition: border-color ease-in-out 0.15s,
                      box-shadow ease-in-out 0.15s,
                      -webkit-box-shadow ease-in-out 0.15s;
                  "
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="checkinf"> Login </v-btn>
          <v-btn color="primary" dark text @click="dialog = false">
            Close
          </v-btn>
          <div style="color: red">
            {{ error }}
          </div>
        </v-card-actions>
        
        <span> Don't have an account?</span> <a href="#1"> Sign up now.</a> 
        <br />
        <span>Forgot Password or Two-Factor Device? </span> <a href="#1"> Request Password Reset.</a>
      </v-card>
    </v-dialog>
    <v-btn class="reg" outlined>REGISTER</v-btn>
    <v-btn class="all" outlined>TRADING</v-btn>
    <v-btn class="all" outlined>ABOUT US</v-btn>
  </div>
</template>
<script>
export default {
  name: "FirstHeaderButton",

  data() {
    return {
      dialog: false,
      error: null,
      passE: "",
      pass: "",
    };
  },
  methods: {
    checkinf() {
      console.log(this.pass);
      if (this.pass == "123" && this.passE == "112233") {
        this.error = "";
        return false;
      } else {
        this.error = "Incorrect username or password.";
        return true;
      }
    },
  },
};
</script>
<style scoped>
.all {
  color: #fff;
  border: 1px solid white;
  background: transparent;
  border-radius: 3px;
  width: 69px !important;
  height: 32px !important;
  margin: 5px;
  font-size: 13px;
}
.all:hover {
  background: #59d0ff;
  border-color: #59d0ff;
}
.reg {
  background: #fff;
  border: 1px solid white;
  color: #093152;
  font-size: 13px;
  width: 69px !important;
  height: 32px !important;
}
.reg:hover {
  background: #59d0ff;
  border-color: #59d0ff;
  color: #fff;
}
/* .dialog-position{
  align-self: flex-end;
  max-width: 598px;
  max-height: 398px;
} */
/* .v-dialog:not(.v-dialog--fullscreen) {
    bottom: 0 !important;
    right: 0 !important;
    position: sticky !important;
} */
</style>