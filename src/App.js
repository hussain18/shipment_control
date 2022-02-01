import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomersPage from './pages/customers';
import AddCustomerView from './pages/addCustomer';
import AddPurchaseOrderView from './pages/addPurchaseOrder';
import AddShippingDetailsView from './pages/addShippingDetails';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<CustomersPage />} />
          <Route path='/add-customer' element={<AddCustomerView />} />
          <Route
            path='/add-purchase-order'
            element={<AddPurchaseOrderView />}
          />
          <Route
            path='/add-shipping-details'
            element={<AddShippingDetailsView />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
