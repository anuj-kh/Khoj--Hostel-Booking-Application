import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Main from './Main.js'
import MyAccount from './myAccount'
import Bookings from './bookings'
import Reviews from './reviews'
import EditProfile from '../customer/editProfile'
import Hostel from './newBooking'


function Dashboard2() {
    const history = useHistory()
    return (
        <div className='Dashboard'>
            <BrowserRouter history={history}>
                <Switch>
                    <Route path='/dashboard/bookings' component={Bookings} />
                    <Route path='/dashboard/reviews' component={Reviews} />
                    <Route path='/dashboard/account' component={MyAccount} />
                    <Route path='/dashboard/newBooking' component={Hostel} />
                    <Route path='/dashboard/editProfile' component={EditProfile} />
                    <Route path='/dashboard' component={Main} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Dashboard2
