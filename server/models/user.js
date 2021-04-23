const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    password: { type: String },
    user: { type: String, default: 'Student' },
    googleId: { type: String },
    id: { type: String },
    currentHostel: {type: String, default:'Not registered'},
    tiffinService: {type: String, default:'Not registered'},
    credit: {type: String, default:'0'},
    daysLeft: {type: String, default:'0'},
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

const userSchema2 = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    owner: { type: String, required: true },
    image: { type: String, required: true },
})

var uss = mongoose.model('User', userSchema)
var uss2 = mongoose.model('hostels', userSchema2)

exports.uss = uss
