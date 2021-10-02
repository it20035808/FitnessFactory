import './App.css';
import Header from './components/Header';
import AddSupplier from "./components/AddSupplier";
import AllSuppliers from './components/AllSuppliers';
import UpdateSupplier from './components/UpdateSupplier';
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Route path="/" exact component={AllSuppliers}/>
                <Route path="/add" extact component={AddSupplier}/>
                <Route path="/update/:id" extact component={UpdateSupplier}/>


            </div>
        </Router>
    );
}

export default App;
