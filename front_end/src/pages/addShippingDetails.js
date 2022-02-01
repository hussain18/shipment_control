import NavBar from '../components/navbar';
import { useState } from 'react';
import {
  InlineInput,
  SelectInput,
  PurchaseOrderSelectInput,
} from '../components/inputs';
import customersDataWithPurchaseOrders from '../components/dummyData/customersWithOrders.json';
import customersData from '../components/dummyData/customers.json';

const AddShippingDetailsView = (props) => {
  const [shippingDetailsInfo, setShippingDetailsInfo] = useState({
    address: '',
    city: '',
    pinCode: '',
    purchaseOrderId: null,
    customerId: '',
  });

  const handleChange = (event) => {
    let updatedShippingDetailsInfo = { ...shippingDetailsInfo };
    updatedShippingDetailsInfo[event.target.name] = event.target.value;
    setShippingDetailsInfo(updatedShippingDetailsInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit Data', shippingDetailsInfo); //test...
  };

  const getPurchaseOrders = () => {
    const customer = customersDataWithPurchaseOrders.filter(
      (customer) => customer._id === shippingDetailsInfo.customerId
    );

    return customer[0].purchaseOrder;
  };
  return (
    <>
      <NavBar addShippingDetails='active' />
      <div className='container form-container'>
        <div className='row row-cols-1 justify-content-center'>
          <form onSubmit={handleSubmit} className='form'>
            <h1 className='text-center fs-1 fw-bold mb-5'>
              Add Shipping Details
            </h1>
            <div className='row row-cols-1 g-3 align-items-center'>
              <InlineInput
                label='Address'
                name='address'
                required={true}
                placeholder='Enter the Address'
                value={shippingDetailsInfo.address}
                onChange={handleChange}
                type='text'
              />
              <InlineInput
                label='City'
                name='city'
                required={true}
                placeholder='Enter the City'
                value={shippingDetailsInfo.city}
                onChange={handleChange}
                type='text'
              />
              <InlineInput
                label='Pincode'
                name='pinCode'
                required={true}
                placeholder='Enter the Pincode'
                value={shippingDetailsInfo.pinCode}
                onChange={handleChange}
                type='text'
              />
              <SelectInput
                customers={customersData}
                label='CustomerId'
                name='customerId'
                required={true}
                placeholder='Choose a customer'
                value={shippingDetailsInfo.customerId}
                onChange={handleChange}
              />
              {shippingDetailsInfo.customerId && (
                <PurchaseOrderSelectInput
                  orders={getPurchaseOrders}
                  label='Product'
                  name='purchaseOrderId'
                  required={true}
                  placeholder='Choose a Product'
                  value={shippingDetailsInfo.purchaseOrderId}
                  onChange={handleChange}
                />
              )}
            </div>

            {/* Submit button */}
            <div className='row justify-content-center'>
              <input
                value='Add'
                type='submit'
                className='col-5 btn btn-primary mt-3 mb-3'
              />
            </div>
            <hr />
            <p className='text-center'>
              <span className='fw-bold'>Note:</span> Fields with red{' '}
              <span className='text-danger'>*</span> is required and must be
              filled
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddShippingDetailsView;
