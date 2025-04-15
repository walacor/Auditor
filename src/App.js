import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { AuthNavigation } from "./navigation";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AuthNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;