new Vue({
    el: '#app',
    data() {
      return {
        user: {
          name: 'Olzhas Yergali',
          email: 'olzhasergali56@gmail.com',
          profilePicture: '/photo_2023-11-29_08-31-06.jpg', 
          isAdmin: false,
          birthdate: '2005-04-10',
        },
        editingProfile: false,
        editedUser: { ...this.user },
      };
    },
    computed: {
      age() {
        const birthdate = new Date(this.user.birthdate);
        const today = new Date();
        const age = today.getFullYear() - birthdate.getFullYear();
        return age;
      },
    },
    methods: {
      toggleEdit() {
        if (this.editingProfile) {
          // Save changes
          this.user = { ...this.editedUser };
        }
        this.editingProfile = !this.editingProfile;
      },
      handlePictureChange(event) {
      
        const file = event.target.files[0];
        this.editedUser.profilePicture = file.name;
      },
    },
    watch: {
      user() {
        console.log('User details modified!');
      },
    },
    created() {
      setTimeout(() => {
        this.user = {
          name: 'Olzhas Yergali',
          email: 'olzhasergali56@gmail.com',
          profilePicture: '/photo_2023-11-29_08-31-06.jpg',
          isAdmin: false,
          birthdate: '2005-04-10',
        };
        this.editedUser = { ...this.user };
      }, 1000);
    },
    mounted() {
      console.log('User profile dashboard mounted.');
    },
  });
  