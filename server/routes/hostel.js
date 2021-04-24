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
        const { startDate, endDate,todayDate,localStorageId } = req.body;
        if(todayDate.substring(0,10)==startDate.substring(0,10))
        {
            console.log("aa")
            const user = await UserModal.uss2.updateOne(
                { _id: req.params.id },
                { $push: { 
                    currentStudents: {
                        startDate, endDate, bookingDate: todayDate, student: localStorageId
                    }
                } },
            )
            console.log("ab")
            const user2 = await UserModal.uss.updateOne(
                { _id: localStorageId },
                { $push: { 
                    currentHostel: {
                        startDate, endDate, bookingDate: todayDate, hostel: req.params.id
                    }
                } },
            )
        }
        else
        {
            console.log("ac")
            const user = await UserModal.uss2.updateOne(
                { _id: req.params.id },
                { $push: { 
                    futureStudents: [{
                        startDate, endDate, bookingDate: todayDate, student: localStorageId
                    }]
                } },
            )
            console.log("ad")
            const user2 = await UserModal.uss.updateOne(
                { _id: localStorageId },
                { $push: { 
                    futureHostels: [{
                        startDate, endDate, bookingDate: todayDate, hostel: req.params.id
                    }]
                } },
            )
            console.log("all")
        }
        console.log("ae")
        res.send("You are successfully registered to this hostel!!");
    } catch (err) {
        console.log("af")
        res.json({ message: err.message, data: req.body, id: req.params.id })
    }
})


module.exports = router
