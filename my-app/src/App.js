// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";

// class App extends Component {
//   render() {
//     // const greeting = "Hi!,Tom";
//     // const dom = <h1 className="foo">{greeting}</h1>
//     // return dom;
//     // return <input type="text" onClick={()=>{console.log("I am clicked")}}/>;
//     // return <input type="text" onChange={()=>{console.log("I am clicked")}}/>;
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input
//           type="text"
//           onChange={() => {
//             console.log("I am clicked");
//           }}
//         />
//       </React.Fragment>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return React.createElement("div", null, "Hello,world!!");
//   }
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname" },
  ];
  return (
    <div>
      {profiles.map((profiles, index) => {
        return <User name={profiles.name} age={profiles.age} key={index} />;
      })}
    </div>
  );
};
const User = (props) => {
  return (
    <div>
      Hi , I am {props.name}, and {props.age} years old!
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  name: PropTypes.number.isRequired,
};
export default App;
