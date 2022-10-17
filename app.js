const app = Vue.createApp({
  data() {
    return {
      isLoading: false,
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      this.isLoading = true;
      try {
        const response = await fetch("https://randomuser.me/api");
        const data = await response.json();
        const {
          results: [res],
        } = data;
        this.firstName = res.name.first;
        this.lastName = res.name.last;
        this.email = res.email;
        this.gender = res.gender;
        this.picture = res.picture.large;
      } catch (error) {
      } finally {
        this.isLoading = false;
      }
    },
  },
});

app.mount("#app");
