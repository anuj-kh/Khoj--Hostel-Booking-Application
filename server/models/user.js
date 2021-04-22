const mongoose = require('mongoose')

// const userSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     user: { type: String, required: true },
//     id: { type: String },
// })

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    user: { type: String, default: 'Student' },
    googleId: { type: String },
    id: { type: String },
    reviews: [
        {
            hostel: {
                type: String,
                default: 'Hostel 1',
            },
            comment: {
                type: String,
                default: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            },
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
})

var uss = mongoose.model('User', userSchema)

exports.uss = uss
