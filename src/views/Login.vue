<template>
  <section class="form-elegant">
    <mdb-row class="m-3 p-3 d-flex justify-content-center">
      <mdb-col md="5">
        <mdb-card>
          <mdb-card-body class="mx-4">
            <div class="text-center">
              <h3 class="dark-grey-text mb-5">
                <strong>LogIn</strong>
              </h3>
            </div>
            <mdb-input label="Your email" type="email" />
            <mdb-input label="Your password" type="password" containerClass="mb-0" />
            <p class="font-small blue-text d-flex justify-content-end pb-3">Forgot Password?</p>
            <div class="text-center mb-3">
              <mdb-btn type="button" gradient="blue" rounded class="btn-block z-depth-1a">Sign in</mdb-btn>
            </div>
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
  </section>
</template>


<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>


