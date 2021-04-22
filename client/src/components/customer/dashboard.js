import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Main from './Main.js'
import MyAccount from './myAccount'
import Bookings from './bookings'
import Reviews from './reviews'
import NewBooking from './newBooking'
import Payment from './payment'

function Dashboard() {
    const history = useHistory()
    return (
        <div className='Dashboard'>
            <BrowserRouter history={history}>
                <Switch>
                    <Route path='/dashboard/bookings' component={Bookings} />
                    <Route path='/dashboard/reviews' component={Reviews} />
                    <Route path='/dashboard/account' component={MyAccount} />
                    <Route path='/dashboard/newBooking' component={NewBooking} />
                    <Route path='/dashboard/payment' component={Payment} />
                    <Route path='/dashboard' component={Main} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Dashboard
