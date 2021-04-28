const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const userRouter = require('./routes/user.js')
const userDashboard = require('./routes/dashboard.js')
const hostel = require('./routes/hostel.js')

const app = express()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
// Set EJS as templating engine
app.set('view engine', 'ejs')
app.use('/user', userRouter)
app.use('/dashboard', userDashboard)
app.use('/hostel', hostel)

const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => {
        if (process.env.NODE_ENV ==='production')
        {
            app.use(express.static('client/build'));
            const path=require('path')
            app.get("*",(req,res)=>{
                res.sendFile(path.resolve(__dirname,'client','build','index.html'))
            })
        }
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server Running on Port: http://localhost:${PORT}`),
        ),
    )
    .catch((error) => console.log(`${error} did not connect`))

mongoose.set('useFindAndModify', false)
