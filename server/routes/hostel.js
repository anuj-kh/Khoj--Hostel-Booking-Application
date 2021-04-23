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
            console.log(res)
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
            console.log(res)
        } else {
            res.status(404)
            throw new Error('User not Found')
        }
    }),
)


module.exports = router
