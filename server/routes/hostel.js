const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const UserModal = require('../models/user.js')

router.get(
    '/hostels',
    asyncHandler(async (req, res) => {
        const user = await UserModal.uss2.find({})
        if (user) {
            res.json(user)
        } else {
            res.status(404)
            throw new Error('User not Found')
        }
    }),
)

router.get(
    '/hostel/:id',
    asyncHandler(async (req, res) => {
        const user = await UserModal.uss2.findById(req.params.id)
        if (user) {
            res.json(user)
        } else {
            res.status(404)
            throw new Error('User not Found')
        }
    }),
)

router.patch('/book/:id', async (req, res) => {
    try {
        const { st, en,to,localStorageId,flag } = req.body;
        if(flag==true)
        {
            const user = await UserModal.uss2.updateOne(
                { _id: req.params.id },
                { $push: { 
                    currentStudents: {
                        startDate: st, endDate: en, bookingDate: to, student: localStorageId
                    }
                } },
            )
            const user2 = await UserModal.uss.updateOne(
                { _id: localStorageId },
                { $push: { 
                    currentHostel: {
                        startDate: st, endDate: en, bookingDate: to, hostel: req.params.id
                    }
                } },
            )
        }
        else
        {
            const user = await UserModal.uss2.updateOne(
                { _id: req.params.id },
                { $push: { 
                    futureStudents: {
                        startDate: st, endDate: en, bookingDate: to, student: localStorageId
                    }
                } },
            )
            const user2 = await UserModal.uss.updateOne(
                { _id: localStorageId },
                { $push: { 
                    futureHostels: {
                        startDate: st, endDate: en, bookingDate: to, hostel: req.params.id
                    }
                } },
            )
        }
        res.send("You are successfully registered to this hostel!!");
    } catch (err) {
        res.json({ message: err.message, data: req.body, id: req.params.id })
    }
})


module.exports = router
