const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const UserModal = require('../models/user.js')
var jwt = require('jsonwebtoken')

const secret = 'test'

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
            await UserModal.uss2.updateOne(
                { _id: req.params.id },
                { $push: { 
                    currentStudents: {
                        startDate: st, endDate: en, bookingDate: to, student: localStorageId
                    }
                } },
            )
            await UserModal.uss.updateOne(
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
            await UserModal.uss2.updateOne(
                { _id: req.params.id },
                { $push: { 
                    futureStudents: {
                        startDate: st, endDate: en, bookingDate: to, student: localStorageId
                    }
                } },
            )
            await UserModal.uss.updateOne(
                { _id: localStorageId },
                { $push: { 
                    futureHostels: {
                        startDate: st, endDate: en, bookingDate: to, hostel: req.params.id
                    }
                } },
            )
        }
        let result = await UserModal.uss.findById(localStorageId).populate("currentHostel.hostel").populate("futureHostels.hostel").populate("oldHostels.hostel");
        const token = jwt.sign(
            { email: result.email, id: result._id },
            secret,
            { expiresIn: '1h' },
        );
        res.status(200).json({ result: result, token })
    } catch (err) {
        res.status(200).json({ message: 'Something went wrong' })
    }
})


module.exports = router
