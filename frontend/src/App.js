import './App.css';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import Login from './components/Login';
import ManageUsers from './components/ManageUsers';

import Events from './components/Events';
import PostDetails from './components/PostDetails';
import CreateEvents from './components/CreateEvents';
import EditEvents from './components/EditPosts';
import Summary from './components/Summary';
import TrackerHome from './components/TrackerHome';
import CreateTracker from './components/CreateTracker';
import EditTracker from './components/EditTracker';
import TrackerDetails from './components/TrackerDetails';

import Store from './components/productRead';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

import Schedules from './components/Schedules';
import CreateSchedule from './components/CreateSchedule';
import ScheduleDetails from './components/ScheduleDetails';
import EditSchedule from './components/EditSchedule';
import ProgReport from './components/ProgReport';
import CreateProgReport from './components/CreateProgreport';
import ProgReportDetails from './components/ProgreportDetails';
import EditProgReport from './components/EditProgreport';

import Expenses from './components/Expenses';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import ExpenseDetails from './components/ExpenseDetails';
import Payments from './components/Payments';
import AddPayments from './components/AddPayment';
import EditPayments from './components/EditPayment';
import PaymentDetails from './components/PaymentDetails';

import Suppliers from './components/Suppliers';
import AddSupplier from './components/AddSupplier';
import UpdateSupplier from './components/UpdateSupplier';

import InventoryLogin from './components/Inventorylogin.component';
import main from "./components/main.component"
import Equipment from "./components/Equipment.component";
import EquipmentReport from "./components/EquipmentReport.component";
import EquipmentDetails from "./components/EquipmentDetails.component";
import EquipmentAdd from "./components/EquipmentAdd.component";
import EquipmentEdit from "./components/EquipmentEdit.component";
import EquipmentEditDates from "./components/EquipmentEditDates.component"

import Stock from "./components/Stock.component"
import StockReport from "./components/StockReport.component";
import StockDetails from "./components/StockDetails.component";
import StockAdd from "./components/StockAdd.component";
import StockEdit from "./components/StockEdit.component";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path='/createAccountPage' component={CreateAccount}/>
          <Route path='/homePage' component={Home}/>
          <Route path='/manageUsers' component={ManageUsers}/>

          <Route path='/events' component={Events}/>
          <Route path='/createEvents' component={CreateEvents}/>
          <Route path='/postDetails/:id' component={PostDetails}/>
          <Route path='/editEvents/:id' component={EditEvents}/>
          <Route path='/summary' component={Summary}/>
          <Route path='/trackerHome' component={TrackerHome}/>
          <Route path='/createTracker' component={CreateTracker}/>
          <Route path='/editTracker/:id' component={EditTracker}/>
          <Route path='/trackerDetails/:id' component={TrackerDetails}/>

          <Route path='/store' component={Store}/>
          <Route path='/addProduct' component={AddProduct}/>
          <Route path='/editProduct' component={EditProduct}/>

          <Route path='/schedules' component={Schedules}/>
          <Route path='/createSchedule' component={CreateSchedule}/>
          <Route path='/scheduleDetails/:id' component={ScheduleDetails}/>
          <Route path='/editSchedule/:id' component={EditSchedule}/>
          <Route path='/progReports' component={ProgReport}/>
          <Route path='/createProgReport' component={CreateProgReport}/>
          <Route path='/editProgreport/:id' component={EditProgReport}/>
          <Route path='/progreport/:id' component={ProgReportDetails}/>

          <Route path='/expenses' component={Expenses}/>
          <Route path='/addExpense' component={AddExpense}/>
          <Route path='/editExpense/:id' component={EditExpense}/>
          <Route path='/expenseDetails/:id' component={ExpenseDetails}/>
          <Route path='/payments' component={Payments}/>
          <Route path='/addPayments' component={AddPayments}/>
          <Route path='/editPayment/:id' component={EditPayments}/>
          <Route path='/paymentDetails/:id' component={PaymentDetails}/>

          <Route path='/suppliers' component={Suppliers}/>
          <Route path='/addSupplier' component={AddSupplier}/>
          <Route path='/updateSupplier/:id' component={UpdateSupplier}/>

          <Route path='/inventory' component={InventoryLogin}/>
            <Route path="/main" exact component={main} />
            <Route path="/equipment/" exact component={Equipment} />
            <Route path="/equipment/report" exact component={EquipmentReport} />
            <Route path="/equipment/details/:id" exact component={EquipmentDetails} />
            <Route path="/equipment/add" exact component={EquipmentAdd} />
            <Route path="/equipment/edit/:id" exact component={EquipmentEdit} />
            <Route path="/equipment/editdates/:id" exact component={EquipmentEditDates} />

            <Route path="/stock/" exact component={Stock} />
            <Route path="/stock/report" exact component={StockReport} />
            <Route path="/stock/details/:id" exact component={StockDetails} />
            <Route path="/stock/add" exact component={StockAdd} />
            <Route path="/stock/edit/:id" component={StockEdit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



      