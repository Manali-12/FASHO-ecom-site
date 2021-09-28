import "../src/App.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/login" exact component={LoginPage} ></Route>
        <Route path="/register" exact component={Register} ></Route>
        <Route path="/products" exact component={ProductInfo} ></Route>
        <Route><NotFound /></Route>
      </Router>
    </div>
  );
}

export default App;
