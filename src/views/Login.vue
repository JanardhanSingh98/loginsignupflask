<template>
  <section class="form-elegant">
    <mdb-row class="m-3 p-3 d-flex justify-content-center">
      <mdb-col md="6" sm="8" lg="4">
        <mdb-card>
          <mdb-card-body class="mx-4">
            <form @submit.prevent="login">
              <div class="text-center">
                <h3 class="dark-grey-text mb-5">
                  <strong>LogIn</strong>
                </h3>
              </div>
              <div class="grey-text form-group">
                <mdb-input v-model="email" label="Your email" group type="email" required />
                <mdb-input v-model="password" label="Your password" required group type="password" />
              </div>
              <div class="text-center mb-3 form-group">
                <mdb-btn
                  type="submit"
                  gradient="blue"
                  class="btn-lg btn-primary btn-block z-depth-1a"
                >LogIn</mdb-btn>
              </div>
            </form>
          </mdb-card-body>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-end">
              Not a member?
              <a class="blue-text ml-1" @click="route">Sign Up</a>
            </p>
          </mdb-modal-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    route() {
      this.$router.push("/signup");
    },

    login() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/profile"))
        .catch((err) => console.log(err));
    },
  },

  created: {},
};
</script>


