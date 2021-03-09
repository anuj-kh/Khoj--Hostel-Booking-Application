import './cus_dashboard.css';
import Sidebar from './Sidebar';
import Main from './Main';
import Profile from './Profile';
import Search from './Search';
import Account from './Account';
import Setting from './Setting';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function cus_dashboard() {
  return (
    <div className="cus_dashboard">
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/dashboard/overview' exact component={Main} />
          <Route path='/dashboard/profile' component={Profile} />
          <Route path='/dashboard/search' component={Search} />
          <Route path='/dashboard/account' component={Account} />
          <Route path='/dashboard/setting' component={Setting} />
        </Switch>
      </Router>
    </div>
  );
}

export default cus_dashboard;
