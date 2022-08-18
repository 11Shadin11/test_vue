<template >
  <div style="margin: 0 auto; width: 1100px; border-bottom: 1px solid rgba(255, 255, 255, 0.3); padding: 21px 0px 16px 36px; text-align: right;">
    <v-dialog v-model="dialog" width="598px" height="320" overlay-color="#fff">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="all" outlined v-bind="attrs" v-on="on" style="max-width:69px">SIGN IN</v-btn>
      </template>
      <v-card >
        <v-card-title>
          <h2 style="margin: auto; padding:25px 20px 20px 20px; font-size: 30px; font-weight: 500; color: #333333;">Login</h2>
        </v-card-title>
        <v-card-text>
          <v-container style="float: right">
            <v-row>
              <span style="color: #333333; padding-bottom:10px">
                Please fill in your credentials to login.
              </span>
              <v-col cols="12">
                <label style="font-size: 14px; font-weight: 700; color: #333; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; margin-bottom: 50px;">Login or email</label>
                <input height="50px" outlined v-model="passE" class="input"/>
                <br>
              </v-col>
              <v-col cols="12">
                <label style="font-size: 14px;font-weight: 700;color: #333;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">Password</label>
                <input outlined type="password" v-model="pass" color="red" class="input"/>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions style="padding:15px 0 15px 25px">
          <v-btn color="primary" style="background:#337ab7 !important; width:60px !important; height:34px !important; font-size:14px; font-weight:400"  @click="checkinf" > Login </v-btn>
          <v-btn depressed @click="dialog = false">Close</v-btn>
          <div style="color: red">
            {{ error }}
          </div>
        </v-card-actions>
        <div style="padding-left:25px; padding-bottom:25px">
          <span style="color:#333333;"> Don't have an account?<a href="#1" style="text-decoration:none;color:#337ab7"> Sign up now.</a></span> <br>
          <span style="color:#333333"> Forgot Password or Two-Factor Device? <a href="#1" style="text-decoration:none;color:#337ab7"> Request Password Reset.</a></span>
        </div>
      </v-card>
    </v-dialog>
    <v-btn class="reg" outlined style="max-width:83.61px">REGISTER</v-btn>
    <v-btn class="all" outlined style="max-width:78.3px">TRADING</v-btn>
    <v-btn class="all" outlined style="max-width:85.86px" >ABOUT US</v-btn>
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
* {
  padding: 0;
  margin: 0;
}
.v-btn{
  padding: 6px 12px !important;
}
.all {
  color: #fff;
  border: 1px solid white;
  background: transparent;
  border-radius: 3px;
  width: auto;
  height: 32px !important;
  margin: 2px;
  font-size: 12px;
  letter-spacing: 0px;
  font-weight: 600;
  font-family: 'uni_sans_semiboldregular',Arial,Helvetica,sans-serif;
}
.all:hover {
  background: #59d0ff;
  border-color: #59d0ff;
}
.reg {
  background: #fff;
  border: 1px solid white;
  color: #093152;
  font-size: 12px;
  margin: 2px;
  letter-spacing: 0px;
  font-weight: 700;
  width: auto !important;
  height: 32px !important;
  font-family: 'uni_sans_semiboldregular',Arial,Helvetica,sans-serif;
}
.reg:hover {
  background: #59d0ff;
  border-color: #59d0ff;
  color: #fff;
}
.input{
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
}
</style>