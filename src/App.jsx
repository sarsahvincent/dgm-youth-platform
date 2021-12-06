import React from "react";
import AppRouter from "./components/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import { Provider } from "react-redux";
import store from "./services/redux/store";
import './styles/App.css'

function App(props) {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </AuthContextProvider>
  );
}

export default App;
