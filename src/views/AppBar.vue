<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">LoginSignupFlask</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button size="sm" class="my-1 mx-1 my-sm-0" type="submit" to="/">Home</b-button>
            <b-button
              v-if="!isLoggedIn"
              size="sm"
              class="my-1 mx-1 my-sm-0"
              type="submit"
              to="/login"
            >Login</b-button>
            <b-button
              v-if="!isLoggedIn"
              size="sm"
              class="my-1 mx-1 my-sm-0"
              type="submit"
              to="/signup"
            >Signup</b-button>
            <b-button
              v-if="isLoggedIn"
              size="sm"
              class="my-1 mx-1 my-sm-0"
              type="submit"
              to="/profile"
            >Profile</b-button>
            <b-button
              v-if="isLoggedIn"
              size="sm"
              class="my-1 mx-1 my-sm-0"
              type="submit"
              to="/signup"
              @click="logout"
            >Logout</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: "",
      user: "",
    };
  },

  // created() {
  //   this.$http.interceptors.response.use(undefined, function (err) {
  //     return new Promise(function (resolve, reject) {
  //       if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
  //         this.$store.dispatch(logout);
  //       }
  //       throw err;
  //     });
  //   });
  // },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },

  mounted() {},
};
</script>