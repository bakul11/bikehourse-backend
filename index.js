const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


//MiddleWare 
const cors = require('cors');
app.use(cors())
app.use(express.json())

//Dot Env 
require('dotenv').config()

//import Database 
const conectDB = require('./Configration/ConnectDB');

//All Routes Import Here
const authRoute = require('./Routes/authRoute');
const bikeRoutes = require('./Routes/bikeRoutes');



//Bike Route 
app.use('/bike',bikeRoutes)

//Auth Routes 
app.use('/auth', authRoute);

app.get('/', (req, res) => {
    res.send('Server start success')
})


app.listen(port, () => {
    console.log(`Server started successfully done ${port}`);
    conectDB();
})