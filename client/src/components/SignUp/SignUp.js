// import React, { Component } from "react";

// //from activity 19.18
// class Form extends Component {
//   // Setting the initial values of this.state.username and this.state.password
//   state = {
//     email: "",
//     password: "",
//     gender: "",
//     username: "",
//     password2: "",
//     year: "",
//     month: "",
//     day: ""
//   };

//   // handle any changes to the input fields
//   handleInputChange = event => {
//     // Pull the name and value properties off of the event.target (the element which triggered the event)
//     const { name, value } = event.target;

//     // Set the state for the appropriate input field
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, prevent the default event //and alert the username and password
//   handleFormSubmit = event => {
//     event.preventDefault();
//     alert(`Email: ${this.state.email}\nPassword: ${this.state.password}`);
//     this.setState({ email: "", password: "" });
//   };

//   render() {
//     return (
//       <form>
//         <p>Username: {this.state.username}</p>
//         <p>Password: {this.state.password}</p>
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           value={this.state.username}
//           onChange={this.handleInputChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={this.state.password}
//           onChange={this.handleInputChange}
//         />
//         <button onClick={this.handleFormSubmit}>Submit</button>
//       </form>
//     );
//   }
// }

// export default Form;