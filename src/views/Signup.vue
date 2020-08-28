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
              <mdb-input v-model="first_name" label="First Name" group type="text" required />
              <mdb-input v-model="last_name" label="Last Name" group type="text" required />
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
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    register() {
      this.axios
        .post("http://127.0.0.1:5000/users/register", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    route() {
      this.$router.push("/login");
    },
  },
};
</script>