const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

const UserModal = require('../models/user.js')

const secret = 'test'

const signin = async (req, res) => {
    const { email, password } = req.body

    try {
        const oldUser = await UserModal.uss.findOne({ email }).populate("currentHostel.hostel").populate("futureHostels.hostel").populate("oldHostels.hostel");

        if (!oldUser)
            return res.status(200).json({ message: "User doesn't exist!!" })

        if(!oldUser.password)
            return res.status(200).json({ message: "This user is registered via Google login.\n No password exists for this user.\n Please use Google login." })
        const isPasswordCorrect = await bcrypt.compare(
            password,
            oldUser.password,
        )

        if (!isPasswordCorrect)
            return res
                .status(200)
                .json({ message: 'Wrong Email or Password!!' })

        const token = jwt.sign(
            { email: oldUser.email, id: oldUser._id },
            secret,
            { expiresIn: '1h' },
        )

        res.status(200).json({ result: oldUser, token })
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

const signup = async (req, res) => {
    const { email, password, firstName, lastName, user, phone } = req.body
    try {
        const oldUser = await UserModal.uss.findOne({ email })

        if (oldUser)
            return res.status(200).json({ message: 'User already exists!!' })
        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await UserModal.uss.create({
            email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
            user,
            phone
        })

        const token = jwt.sign(
            { email: result.email, id: result._id },
            secret,
            { expiresIn: '1h' },
        )

        res.status(200).json({ result, token })
    } catch (error) {
        res.status(200).json({ message: 'Something went wrong' })

        console.log(error)
    }
}

const gSignin = async (req, res) => {
    const { email, name, googleId } = req.body

    try {
        let result = await UserModal.uss.findOne({ email })
        if (!result) {
            result = await UserModal.uss.create({ name, email, googleId });
        }
        else
        {
            await UserModal.uss.updateOne({email}, { $set: {googleId:googleId} } )
            result = await UserModal.uss.findOne({ email }).populate("currentHostel.hostel").populate("futureHostels.hostel").populate("oldHostels.hostel")
        }
        const token = jwt.sign(
            { email: result.email, id: result._id },
            secret,
            { expiresIn: '1h' },
        )
        res.status(200).json({ result: result, token })
    } catch (err) {
        res.status(200).json({ message: 'Something went wrong' })
    }
}

exports.signin = signin
exports.signup = signup
exports.gSignin = gSignin
