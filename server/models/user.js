const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    user: { type: String, required: true },
    id: { type: String },
})

const userSchema2 = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    googleId: { type: String, required: true },
    id: { type: String },
    reviews: [
        {
            hostel: String,
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
var uss2 = mongoose.model('User2', userSchema2)
exports.uss = uss
exports.uss2 = uss2
