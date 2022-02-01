function NavBar(props) {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          Home
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a
                className={`nav-link ${props.addCustomer}`}
                href='/add-customer'
              >
                Add Customer
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${props.addPurchaseOrders}`}
                href='/add-purchase-order'
              >
                Add Purchase Order
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${props.addShippingDetails}`}
                href='/add-shipping-details'
              >
                Add Shipping Details
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
