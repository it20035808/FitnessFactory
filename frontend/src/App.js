import './App.css';
import Header from './components/storeHeader';
import AddProduct from './components/AddProduct';
import AllProducts from './components/AllProducts';
import editProducts from './components/editProduct';
import productRead from './components/productRead';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={productRead} />
        <Route path="/add" exact component={AddProduct} />
        <Route path="/update/:id" exact component={editProducts} />

      </div>
    </Router>
  );
}

export default App;
