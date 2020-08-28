<template>
  <mdb-row class="m-2 p-2 d-flex justify-content-center">
    <mdb-col md="5" sm="8" lg="4">
      <mdb-card>
        <mdb-card-body class="mx-4">
          <form v-on:submit.prevent="register">
            <div class="text-center">
              <h3 class="dark-grey-text mb-5">
                <strong>SignUp</strong>
              </h3>
            </div>
            <div class="grey-text form-group">
              <mdb-input
                v-model="first_name"
                label="First Name"
                group
                type="text"
                validate
                required
                error="wrong"
                success="right"
              />
              <mdb-input
                v-model="last_name"
                label="Last Name"
                group
                type="text"
                validate
                required
                error="wrong"
                success="right"
              />
              <mdb-input
                v-model="email"
                label="Your email"
                group
                type="email"
                validate
                required
                error="wrong"
                success="right"
              />
              <mdb-input
                v-model="password"
                label="Your password"
                required
                group
                type="password"
                validate
              />
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
            Not a member?
            <a class="blue-text ml-1" to="/signup">Sign Up</a>
          </p>
        </mdb-modal-footer>
      </mdb-card>
    </mdb-col>
  </mdb-row>
</template>

<script>
import axios from "axios";
import router from "../router";
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
      axios
        .post("users/register", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          router.push({ name: "Login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>