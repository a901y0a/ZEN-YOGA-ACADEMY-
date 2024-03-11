

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import store, { persistor } from "./components/Redux/Store.js";
import './index.css';
// import store from './components/Redux/Store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>
);

