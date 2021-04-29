const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const UserModal = require('../models/user.js')
var jwt = require('jsonwebtoken')

const secret = 'test'
var multer = require('multer')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './client/public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: storage })

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: storage })
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
        const { st, en,to,localStorageId,flag,dues,days } = req.body;
        const cus=await UserModal.uss.findById(localStorageId);
        if(flag==true)
        {
            await UserModal.uss2.updateOne(
                { _id: req.params.id },
                { $push: { 
                    currentStudents: {
                        startDate: st, endDate: en, bookingDate: to, student: localStorageId, dues,totalPayment:dues, name: cus.name
                        }
                    }
             },
            )
            await UserModal.uss.findOneAndUpdate(
                { _id: localStorageId },
                {
                    $push: {
                        currentHostel: {
                            startDate: st,
                            endDate: en,
                            bookingDate: to,
                            hostel: req.params.id,
                            dues: dues,
                            totalPayment: dues,
                        },
                    },
                    $set: {
                        daysLeft: days,
                        dues: dues,
                    },
                },
            )
        } else {
            await UserModal.uss2.updateOne(
                { _id: req.params.id },
                { $push: { 
                    futureStudents: {
                        startDate: st, endDate: en, bookingDate: to, student: localStorageId, dues,totalPayment:dues, name: cus.name
                    }
                } },
            )
            await UserModal.uss.updateOne(
                { _id: localStorageId },
                {
                    $push: {
                        futureHostels: {
                            startDate: st,
                            endDate: en,
                            bookingDate: to,
                            hostel: req.params.id,
                            dues: dues,
                            totalPayment: dues,
                        },
                    },
                    $set: {
                        daysLeft: days,
                        dues: dues,
                    },
                },
            )
        }
        let result = await UserModal.uss
            .findById(localStorageId)
            .populate('currentHostel.hostel')
            .populate('futureHostels.hostel')
            .populate('oldHostels.hostel')
        const token = jwt.sign(
            { email: result.email, id: result._id },
            secret,
            { expiresIn: '1h' },
        )
        res.status(200).json({ result: result, token })
    } catch (err) {
        res.status(200).json({ message: 'Something went wrong' })
    }
})


router.patch('/register/:id',upload.single('img'), async (req, res) => {
    try {
        let i=0;
        const { hostel, address, cost } = req.body;
        const image=req.file.originalname
        const owner=await UserModal.uss.findById(req.params.id);
        
        const hos= await UserModal.uss2.create({
            name: hostel, address, source: image, price: cost, owner: owner.name, ownerEmail: owner.email
        });
        
        await UserModal.uss.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { 
                currentHostel: {
                    hostel: hos._id,
                }},
             },
        )

        let result = await UserModal.uss.findById(req.params.id).populate("currentHostel.hostel").populate("futureHostels.hostel").populate("oldHostels.hostel");
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

router.patch('/register2/:id', async (req, res) => {
    try {
        let i=0;
        const { hostel, address, image, cost, id } = req.body;
        const owner=await UserModal.uss.findById(req.params.id);
        
        const hos=await UserModal.uss2.findOneAndUpdate(
            { _id: id },
            { $set: { 
                    name: hostel, address, source: image, price: cost
                },
             },
        )

        let result = await UserModal.uss.findById(req.params.id).populate("currentHostel.hostel").populate("futureHostels.hostel").populate("oldHostels.hostel");
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
