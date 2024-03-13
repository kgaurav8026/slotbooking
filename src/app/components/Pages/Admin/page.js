import Layout from '../../Layout/Layout';
import Navbar from '../../Elements/Navigation/AdminNavigation/page'

function Admin() {
  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <Navbar /> 
        <div style={{ marginLeft: '20px' }}> 
        </div>
      </div>
    </Layout>
  );
}

export default Admin;
