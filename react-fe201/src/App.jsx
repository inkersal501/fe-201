// import React from "react";
// import { Nav, TEMP } from "./Nav";
// // import Form from "./Form";
// import ControlledForm from "./ControlledForm";
// import Counter from "./Counter";
// import Mount from "./Mount";
// import Update from "./Update";
// import StockData from "./StockData";
// import Details from "./Details";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { userId: 1, checked: false, name: "" };
//     console.log("App.js - constructor()");
//   }

//   // handleChecked(e) {
//   //   this.setState({
//   //     checked: e.target.checked,
//   //   });
//   // }
//   componentDidMount() {
//     console.log("App.js - componentDidMount()");
//   }
//   componentDidUpdate() {
//     console.log("App.js - componentDidUpdate()");
//   }

//   render() {
//     console.log("App.js - render()");
//     return (
//       <div>
//         <Nav brandName="React App" />
//         <div style={{ border: "3px solid black", padding: "5px" }}>
//           Name:{" "}
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={(e) => this.setState({ name: e.target.value })}
//           />
//           <Details name={this.state.name} />
//         </div>
//         {/* Show live stock data
//         <input
//           type="checkbox"
//           value={this.state.checked}
//           onClick={(e) => this.handleChecked(e)}
//         />
//         {this.state.checked && <StockData />} */}
//         {/* <input
//           type="number"
//           value={this.state.userId}
//           onChange={(e) => this.setState({ userId: e.target.value })}
//           min={1}
//         /> */}
//         {/* <Update userId={this.state.userId} /> */}
//         {/* <Mount /> */}
//         {/* <h1>{TEMP}</h1> */}
//         {/* <Counter diff={1} /> */}
//         {/* <Counter diff={10} /> */}
//         {/* <ControlledForm /> */}
//       </div>
//     );
//   }
// }

// export default App;

// // There could be two type import/export ->
// // Default or Named

// /**
//  * Default
//  * Every module can have a single default export
//  * In case of importing default export, you can import with anything name.
//  */

import { Greeting } from "./Greeting";
import { Nav } from "./Nav";

const App = () => {
  const count = 2;

  return (
    <div>
      <Nav brandName="Functional React" />
      <Greeting name="CrioDo" dept="IT" />
    </div>
  );
};

export default App;
