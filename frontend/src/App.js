import './App.css';
import Header from './components/Header';
import AddCP from './components/AddCP';
import CPList from './components/CPList';
import bruce2 from '../src/bruce2.jpg';
import EditCP from './components/EditCP';
import ProgressCP from './components/ProgressCP';
import contactCP from './components/contactCP';

import {BrowserRouter as Router,Route} from "react-router-dom"

function App() {
  return ( 
    <Router>
      
       <div style={{ backgroundImage: `url(${bruce2})`,  backgroundPosition:'center', backgroundSize:'cover' , height:'1050px'}}>
         <Route path="/" exact component={Header}/>
        <Route path="/add" exact component={AddCP}/>
        <Route path="/read" exact component={CPList} />
        <Route path="/update/:id" exact component={EditCP}/>
        <Route path="/progress" exact component={ProgressCP}/>
        <Route path="/client" exact component={contactCP}/>
       
      </div>
    </Router>
  );
}

export default App;
