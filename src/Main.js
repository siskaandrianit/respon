import React,{Component} from "react";
import { Route,NavLink,HashRouter } from "react-router-dom";
import Home from "./Home";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <center>
          <div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              
              
            </div>
          </div>
          </center>
          
          </HashRouter>
      );
    }
  }
   
  export default Main;