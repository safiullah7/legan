import "./App.css";
import Footer from "./features/footer/Footer";
import Navbar from "./features/header/Navbar";
import Home from "./features/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WhitePaper from "./features/whitepaper/WhitePaper";
import Team from "./features/team/Team";
import Blog from "./features/blog/Blog";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/whitepaper">
            <WhitePaper />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
