import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CustomersPage from './pages/customers';
import AddCustomerView from './pages/addCustomer';
import AddPurchaseOrderView from './pages/addPurchaseOrder';
import AddShippingDetailsView from './pages/addShippingDetails';
import NavBar from './components/navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={CustomersPage} />
          <Route path='/add-customer' component={AddCustomerView} />
          <Route path='/add-purchase-order' component={AddPurchaseOrderView} />
          <Route
            path='/add-shipping-details'
            component={AddShippingDetailsView}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
