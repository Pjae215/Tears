import axios from "axios";



// Export an object containing methods we'll use for accessing the random user API
export default {
  getUsersByEmail: function() {
    return new Promise((resolve, reject)=> {
      axios.get("https://randomuser.me/api/?gender=female&results=15").then((res)=> {
        const users = res.data.results;
        const results = users.map((user) => {
          return {
            displayName: user.login.username,
            age: user.dob.age,
            email: user.email,
            image: user.picture.large
          }
        })
        resolve(results);
      }).catch((err) => reject(err));
    })
  },
  // Return a Promise to simulate an async call
  getUsers: function() {
    return new Promise((resolve)=> {
      resolve();
    });
  }
};
