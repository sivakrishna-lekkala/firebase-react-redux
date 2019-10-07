import React,{Component} from 'react'; 
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

//import the components
import NavList from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';


class App extends Component {   
  render() {
     return (
       <Router>
         <div className="App">  
           <NavList ></NavList>
           <Switch>
             <Route path="/" component={Dashboard} />
           </Switch>
         </div>
       </Router>

  );
}

}
 
export default App;
