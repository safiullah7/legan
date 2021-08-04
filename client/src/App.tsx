import "./App.css";
import Footer from "./features/footer/Footer";
import Navbar from "./features/header/Navbar";
import Home from "./features/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WhitePaper from "./features/whitepaper/WhitePaper";
import Team from "./features/team/Team";
import Blog from "./features/blog/Blog";
import TeamMember from "./features/team/TeamMember";
import PrivacyPolicy from "./features/privacyPolicy/PrivacyPolicy";
import FAQs from "./features/FAQs/FAQs";

function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/whitepaper">
            <WhitePaper />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/team/:memberId">
            <TeamMember />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/privacypolicy">
            <PrivacyPolicy />
          </Route>
          <Route exact path="/faqs">
            <FAQs />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
