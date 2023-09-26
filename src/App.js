// import CakeContainer from "./components/CakeContainer";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import React from "react";
import EcommerceApp from "./ecommerceStore/EcommerceApp"
// import Calculator from "./componentsCalculator/Calculator";
function App() {
  return (
    // <Provider store={store}>
      <div>
        {/* <Calculator /> */}
        {/* <CakeContainer /> */}
        <EcommerceApp/>
      </div>
    // </Provider>
  );
}

export default App;
