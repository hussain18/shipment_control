import NavBar from '../components/navbar';
import { useState } from 'react';
import { InlineInput, SelectInput } from '../components/inputs';
import customersData from '../components/dummyData/customers.json';

const AddPurchaseOrderView = (props) => {
  const [purchaseOrderInfo, setPurchaseOrderInfo] = useState({
    productName: '',
    quantity: '',
    pricing: '',
    mrp: '',
    customerId: '',
  });
  const [overPriced, setOverPriced] = useState(false);

  const handleChange = (event) => {
    let updatedPurchaseOrderInfo = { ...purchaseOrderInfo };
    updatedPurchaseOrderInfo[event.target.name] = event.target.value;
    setPurchaseOrderInfo(updatedPurchaseOrderInfo);

    if (event.target.name === 'pricing') {
      if (event.target.value > purchaseOrderInfo.mrp) setOverPriced(true);
      if (event.target.value <= purchaseOrderInfo.mrp && overPriced)
        setOverPriced(false);
    }

    if (event.target.name === 'mrp') {
      if (event.target.value < purchaseOrderInfo.pricing) setOverPriced(true);
      if (event.target.value >= purchaseOrderInfo.pricing && overPriced)
        setOverPriced(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (purchaseOrderInfo.pricing > purchaseOrderInfo.mrp)
      console.log('I cannot submit....'); //test...
    console.log('Submit Data', purchaseOrderInfo); //test...
  };

  return (
    <>
      <NavBar addPurchaseOrders='active' />
      <div className='container form-container'>
        <div className='row row-cols-1 justify-content-center'>
          <form onSubmit={handleSubmit} className='form'>
            <h1 className='text-center fs-1 fw-bold mb-5'>
              Add purchase Order
            </h1>
            <div className='row row-cols-1 g-3 align-items-center'>
              <InlineInput
                label='Product Name'
                name='productName'
                required={true}
                placeholder='Enter the Product Name'
                value={purchaseOrderInfo.productName}
                onChange={handleChange}
                type='text'
              />
              <InlineInput
                label='Quantity'
                name='quantity'
                required={true}
                placeholder='Enter the Quantity'
                value={purchaseOrderInfo.quantity}
                onChange={handleChange}
                type='number'
              />
              <InlineInput
                label='Pricing'
                name='pricing'
                required={true}
                placeholder='Enter the Pricing'
                value={purchaseOrderInfo.pricing}
                onChange={handleChange}
                type='number'
              />
              <InlineInput
                label='MRP'
                name='mrp'
                required={true}
                placeholder='Enter the MRP'
                value={purchaseOrderInfo.mrp}
                onChange={handleChange}
                type='number'
              />
              <SelectInput
                customers={customersData}
                label='CustomerId'
                name='customerId'
                required={true}
                placeholder='Choose a customer'
                value={purchaseOrderInfo.customerId}
                onChange={handleChange}
                type='text'
              />
            </div>

            {/* Submit button */}
            <div className='row justify-content-center'>
              <input
                value='Add'
                type='submit'
                disabled={overPriced}
                className='col-5 btn btn-primary mt-3 mb-3'
              />
            </div>
            <hr />
            <p className='text-center'>
              <span className='fw-bold'>Note:</span> Fields with red
              <span className='text-danger'>*</span> is required and must be
              filled
            </p>
            {overPriced && (
              <p className='text-center text-danger'>
                <span className='fw-bold'>Alert: </span>
                Pricing can't be greater than MRP
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPurchaseOrderView;
