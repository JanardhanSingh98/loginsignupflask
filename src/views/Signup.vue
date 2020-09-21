<template>
  <mdb-row class="m-3 p-3 d-flex justify-content-center">
    <mdb-col md="6" sm="8" lg="4">
      <mdb-card>
        <mdb-card-body class="mx-4">
          <form v-on:submit.prevent="register">
            <div class="text-center">
              <h3 class="dark-grey-text mb-5">
                <strong>SignUp</strong>
              </h3>
            </div>
            <div class="grey-text form-group">
              <mdb-input v-model="name" label="Name" group type="text" required />
              <mdb-input v-model="mobile" label="mobile" group type="number" required />
              <mdb-input v-model="email" label="Your email" group type="email" required />
              <mdb-input v-model="password" label="Your password" required group type="password" />
            </div>
            <div class="text-center mb-3 form-group">
              <mdb-btn
                type="submit"
                gradient="blue"
                class="btn-lg btn-primary btn-block z-depth-1a"
              >Register</mdb-btn>
            </div>
          </form>
        </mdb-card-body>
        <mdb-modal-footer class="mx-5 pt-3 mb-1">
          <p class="font-small grey-text d-flex justify-content-end">
            Already Registered?
            <a class="blue-text ml-1" @click="route">LogIn</a>
          </p>
        </mdb-modal-footer>
      </mdb-card>
    </mdb-col>
  </mdb-row>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      mobile: "",
      email: "",
      password: "",
    };
  },

  methods: {
    register() {
      let name = this.name;
      let mobile = this.mobile;
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("register", { name, mobile, email, password })
        .then(() => this.$router.push("/login"))
        .catch(() => {
          // console.log(err);
          console.log("email or phone already exists");
        });
    },

    route() {
      this.$router.push("/login");
    },
  },
};
</script>