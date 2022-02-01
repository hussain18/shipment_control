import { useState } from 'react';
import NavBar from '../components/navbar';
import { InlineInput } from '../components/inputs';

const AddCustomerView = (props) => {
  const [customerInfo, setCustomerInfo] = useState({
    customerName: '',
    email: '',
    mobileNo: '',
    city: '',
  });

  const handleChange = (event) => {
    let updatedCustomerInfo = { ...customerInfo };
    updatedCustomerInfo[event.target.name] = event.target.value;
    setCustomerInfo(updatedCustomerInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit Data', customerInfo); //test...
  };

  return (
    <>
      <NavBar addCustomer='active' />
      <div className='container form-container'>
        <div className='row row-cols-1 justify-content-center'>
          <form onSubmit={handleSubmit} className='form'>
            <h1 className='text-center fs-1 fw-bold mb-5'>Add Customer</h1>
            <div className='row row-cols-1 g-3 align-items-center'>
              <InlineInput
                label='Customer Name'
                name='customerName'
                required={true}
                placeholder='Enter the customer name'
                value={customerInfo.customerName}
                onChange={handleChange}
                type='text'
              />
              <InlineInput
                label='Email ID'
                name='email'
                required={true}
                placeholder='Enter the Email ID'
                value={customerInfo.email}
                onChange={handleChange}
                type='email'
              />
              <InlineInput
                label='Mobile Number'
                name='mobileNo'
                required={true}
                placeholder='Enter the Mobile Number'
                value={customerInfo.mobileNo}
                onChange={handleChange}
                type='number'
              />
              <InlineInput
                label='City Name'
                name='city'
                required={true}
                placeholder='Enter the City Name'
                value={customerInfo.city}
                onChange={handleChange}
                type='text'
              />
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

export default AddCustomerView;
