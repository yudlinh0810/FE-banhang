import HeaderAdmin from '../../../components/HeaderComponent/HeaderAdmin/HeaderAdmin';
import Manage from '../../../components/ManageComponent/Manage';
const AdminHome = (props) => {
  return (
    <>
      <HeaderAdmin />
      <div style={{ display: 'flex' }}>
        <Manage />
        <div style={{ fontSize: '24px' }}>Đây là trang Admin</div>
      </div>
    </>
  );
};

export default AdminHome;
