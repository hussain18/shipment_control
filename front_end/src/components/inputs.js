const RequiredEl = (props) => <span style={{ color: 'red' }}>*</span>;

const InlineInput = (props) => {
  const label = props.label || 'Password';
  const required = props.required || false;
  const placeholder = props.placeholder || '';
  const name = props.name;
  const type = props.type;
  const pattern = props.pattern;

  return (
    <>
      <div className='col'>
        <div className='row'>
          <div className='col-sm-4'>
            <label className='col-form-label'>
              {label}
              {required ? <RequiredEl /> : null}
            </label>
          </div>
          <div className='col-sm-8'>
            <input
              name={name}
              required={required}
              placeholder={placeholder}
              className='form-control'
              value={props.value}
              onChange={(event) => props.onChange(event)}
              type={type}
              pattern={pattern}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const SelectInput = (props) => {
  const label = props.label || 'Password';
  const required = props.required || false;
  const placeholder = props.placeholder || '';
  const name = props.name;
  const type = props.type;
  const pattern = props.pattern;

  return (
    <>
      <div className='col'>
        <div className='row'>
          <div className='col-sm-4'>
            <label className='col-form-label'>
              {label}
              {required ? <RequiredEl /> : null}
            </label>
          </div>
          <div className='col-sm-8'>
            <select
              name={name}
              required={required}
              placeholder={placeholder}
              className='form-control'
              value={props.value}
              onChange={(event) => props.onChange(event)}
              type={type}
              pattern={pattern}
            >
              <option selected>Choose a customer</option>
              {props.customers.map((customer) => (
                <option value={customer._id}>{customer.customerName}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export { InlineInput, SelectInput };
