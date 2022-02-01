import NavBar from '../components/navbar';
import ListItemsView from '../components/list';

const CustomersView = (props) => {
  return (
    <>
      <NavBar />
      <div className='container mt-3'>
        <ListItemsView itemName='Customer name' itemNo={20} />
        <ListItemsView itemName='Customer name' itemNo={20} />
        <ListItemsView itemName='Customer name' itemNo={20} />
        <ListItemsView itemName='Customer name' itemNo={20} />
        <ListItemsView itemName='Customer name' itemNo={20} />
        <ListItemsView itemName='Customer name' itemNo={20} />
        <ListItemsView itemName='Customer name' itemNo={20} />
        <ListItemsView itemName='Customer name' itemNo={20} />
        <ListItemsView itemName='Customer name' itemNo={20} />
        <ListItemsView itemName='Customer name' itemNo={20} />
      </div>
    </>
  );
};

export default CustomersView;
