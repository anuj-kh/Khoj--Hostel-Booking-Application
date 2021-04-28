const mongoose = require('mongoose')
require('mongoose-double')(mongoose)

var SchemaTypes = mongoose.Schema.Types

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, default: '' },
        password: { type: String },
        address: { type: String, default: '' },
        user: { type: String, default: 'Student' },
        googleId: { type: String },
        id: { type: String },
        img: { type: String,default:"user.png" },
        currentHostel: {
            hostel: { type: mongoose.Schema.Types.ObjectId, ref: 'hostels' },
            startDate: { type: String },
            endDate: { type: String },
            bookingDate: { type: String },
            dues: { type: SchemaTypes.Double },
            totalPayment: { type: SchemaTypes.Double },
        },
        oldHostels: {
            hostel: { type: mongoose.Schema.Types.ObjectId, ref: 'hostels' },
            startDate: { type: String },
            endDate: { type: String },
            bookingDate: { type: String },
            dues: { type: SchemaTypes.Double },
            totalPayment: { type: SchemaTypes.Double },
        },
        futureHostels: {
            hostel: { type: mongoose.Schema.Types.ObjectId, ref: 'hostels' },
            startDate: { type: String },
            endDate: { type: String },
            bookingDate: { type: String },
            dues: { type: SchemaTypes.Double },
            totalPayment: { type: SchemaTypes.Double },
        },
        reviews: {
            hostel: { type: String },
            comment: { type: String },
            date: { type: Date },
        },
        complaints: {
            hostel: { type: String },
            comment: { type: String },
            date: { type: Date },
        },
        credit: { type: SchemaTypes.Double, default: 300 },
        daysLeft: { type: SchemaTypes.Double, default: 0 },
        dues: { type: SchemaTypes.Double ,default:0},
    },
    {
        timestamps: true,
    },
)

const userSchema2 = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    owner: { type: String, required: true },
    ownerEmail: { type: String, required: true },
    source: { type: String, required: true },
    price: {type: Number, required: true },
    currentStudents: {
        student: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
        name: {type: String},
        startDate: {type:String},
        endDate: {type:String},
        bookingDate: {type:String},
        dues: { type: SchemaTypes.Double },
        totalPayment: { type: SchemaTypes.Double },
    },
    oldStudents: {
        student: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
        name: {type: String},
        startDate: {type:String},
        endDate: {type:String},
        bookingDate: {type:String},
        dues: { type: SchemaTypes.Double },
        totalPayment: { type: SchemaTypes.Double },
    },
    futureStudents: {
        student: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
        name: {type: String},
        startDate: {type:String},
        endDate: {type:String},
        bookingDate: {type:String},
        dues: { type: SchemaTypes.Double },
        totalPayment: { type: SchemaTypes.Double },
    },
    reviews: {
        student: { type: String },
        comment: { type: String },
        date: { type: Date },
    },
    complaints: {
        student: { type: String },
        comment: { type: String },
        date: { type: Date },
    },
})

var uss = mongoose.model('User', userSchema)
var uss2 = mongoose.model('hostels', userSchema2)

exports.uss = uss
exports.uss2 = uss2
