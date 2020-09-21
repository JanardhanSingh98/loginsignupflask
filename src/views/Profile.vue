<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">PROFILE</h1>
      </div>
      <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Id</td>
            <td>{{id}}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{{name}}</td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td>{{mobile}}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{email}}</td>
          </tr>
          <tr>
            <td>Active status</td>
            <td>{{active}}</td>
          </tr>
          <tr>
            <td>Active Since</td>
            <td>{{activef}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import { bus } from "../main";
export default {
  data: () => ({
    id: null,
    name: null,
    mobile: null,
    email: null,
    active: null,
    activef: null,
  }),

  mounted() {
    let id = this.id;
    let name = this.name;
    let mobile = this.mobile;
    let email = this.email;
    let active = this.active;
    let activef = this.activef;
    this.$store
      .dispatch("profile", {
        id,
        name,
        mobile,
        email,
        active,
        activef,
      })
      .then((response) => {
        this.id = response.data["user_id"];
        this.name = response.data["user_name"];
        this.mobile = response.data["user_phone"];
        this.email = response.data["email"];
        this.active = response.data["active_status"];
        this.activef = response.data["active_since"];
      })
      .catch((err) => console.log(err));
  },

  methods: {},

  // const token = localStorage.usertoken;
  // // console.log(token);
  // this.axios
  //   .get("http://127.0.0.1:5000/user/profile", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then((response) => {
  //     // console.log(response);
  //     // console.log(response.data);
  //     this.id = response.data["user_id"];
  //     this.name = response.data["user_name"];
  //     this.mobile = response.data["user_phone"];
  //     this.email = response.data["email"];
  //     this.active = response.data["active_status"];
  //     this.activef = response.data["active_since"];
  //   })
  //   .catch((error) => {
  //     console.log(error + "auth problem");
  //   });
};
</script>