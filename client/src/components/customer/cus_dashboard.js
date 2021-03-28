// import './cus_dashboard.css';
// import Sidebar from './Sidebar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './Main.js';
import MyAccount from './accounts';
import Bookings from './bookings';
import Reviews from './reviews';

function cus_dashboard() {
  return (
    <div className="cus_dashboard">
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Switch>
          <Route path='/dashboard/bookings' component={Bookings} />
          <Route path='/dashboard/reviews' component={Reviews} />
          <Route path='/dashboard/account' component={MyAccount} />
          <Route path='/dashboard' component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default cus_dashboard;
