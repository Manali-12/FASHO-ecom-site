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
        <Switch>
          <Route path="/homepage" exact component={HomePage}></Route>
          <Route path="/" exact component={LoginPage} ></Route>
          <Route path="/register" exact component={Register} ></Route>
          <Route path="/products/:productsId" exact component={ProductInfo} ></Route>
          <Route><NotFound /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
