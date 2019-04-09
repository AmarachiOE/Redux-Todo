import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

import "./index.css";
import App from "./App";

// const reducer = () => {
//   return {
//     todos: [
//         {
//             task: "Organize Garage",
//             id: 1528817077286,
//             completed: false
//           },
  
//           {
//             task: "Bake Cookies",
//             id: 1528817084358,
//             completed: false
//           }
//     ],
//     newTask: "",
//   };
// };

const store = createStore(rootReducer);
console.log("this is store:", store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
