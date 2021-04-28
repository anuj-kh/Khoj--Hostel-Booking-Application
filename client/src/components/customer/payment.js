import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import { PayPalButton } from 'react-paypal-button-v2'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'
let cl = 'green'
const Payment = () => {
    const [user, setUser] = useState({})
    const localStorageId = JSON.parse(localStorage.getItem('profile')).result
        ._id
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/dashboard/account/${localStorageId}`)

            setUser(res.data)
        }

        fetchUser()
    })
    const [due, setDue] = useState({ dues: 0 })
    const [error, setError] = useState('')

    return (
        <>
            <Navbar />
            <div
                style={{
                    display: 'flex',
                    position: 'relative',
                    alignItems: 'center',
                    margin: '30 0 30 0',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // margin: '20px',
                }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '50px',
                        // width: '40ch',
                        // height: '6ch',
                        fontSize: '20px',
                    }}>
                    <Avatar
                        alt={user.name}
                        style={{ height: 140, padding: '20px', width: 128 }}
                        src={`/uploads/${user.img}`}
                    />
                    <div>
                        <h2>{user.name}</h2>
                    </div>
                </div>
                <div>
                    <h3>Dues : {user.dues}</h3>
                </div>
                <div
                    style={{
                        display: 'flex',
                        // flexDirection: 'column',
                        justifyContent: 'center',
                        width: '100%',
                        margin: '40px',
                    }}>
                    <PayPalButton
                        amount={user.dues}
                        onSuccess={async (details, data) => {
                            alert(
                                'Transaction completed by ' +
                                    details.payer.name.given_name,
                            )
                            cl = 'green'

                            setDue({ dues: 0 })
                            console.log(due)
                            try {
                                const response = await axios.patch(
                                    `/dashboard/payment/${localStorageId}`,
                                    due,
                                )
                                const localStoragee = JSON.parse(localStorage.getItem('profile'))
                                localStoragee.result.dues=0;
                                localStorage.setItem('profile', JSON.stringify({ ...localStoragee }))
                            } catch (e) {
                                console.log(` Axios request failed: ${e}`)
                                cl = 'red'
                                setError(`${e}`)
                            }
                            setError('Payment succesful!!')
                        }}
                        // options={{
                        //     clientId:
                        //         'AXWKfCDIvRNyym5FJy-xsHTkOIzhkGiT-b_HBuMXlZfnIn5XHZiFUF6y5TySSEP2Hmm52MU1MaG_IEz3',
                        // }}
                    />
                </div>
                <div style={{ color: `${cl}` }}>{error}</div>
            </div>
        </>
    )
}
export default Payment
