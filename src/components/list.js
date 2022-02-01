const ListItemsView = (props) => {
  return (
    <>
      <div className='row mt-1'>
        <div className='col-md-3 col-sm-2'></div>
        <li className='col-md-6 col-sm-8 list-group-item d-flex justify-content-between align-items-center'>
          {props.itemName}
          <span className='badge bg-primary rounded-pill'>{props.itemNo}</span>
        </li>
        <div className='col-md-3 col-sm-2'></div>
      </div>
    </>
  );
};

export default ListItemsView;
