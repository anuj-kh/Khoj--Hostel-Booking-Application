import './cus_dashboard.css';
import Sidebar from './Sidebar';
import Main from './Main';


function cus_dashboard() {
  return (
    <div className="cus_dashboard">
      <Sidebar />
      <Main />
    </div>
  );
}

export default cus_dashboard;
