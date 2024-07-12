export const Greeting = (props) => {
  console.log(props);

  return <h1>Hello, {props.name}</h1>;
};

// DUMB Component
// Functional component earlier didn't have functionality to maintain a local state before react v16
// Stateless component

// Class -> Smart Component
// Class can maintain state.
// Stateful component

// After v16 -> Everything changed -> Hooks got introduced
// useState() -> with help of useState hook, I can now maintain state in functional component
