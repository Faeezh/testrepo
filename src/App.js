
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Clients } from "./components/Pages/Clients"
import { Learner } from "./components/Pages/Learner";
import { Contact } from "./components/Pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
   <> 
      <Router>
        <Navbar />
      
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/Clients" component={Clients}/>
            <Route  path="/Learner" component={Learner}/>
            <Route  path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
