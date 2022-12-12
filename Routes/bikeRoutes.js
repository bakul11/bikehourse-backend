const { postBike, getAllBike, getSingleBike, categotyBaseBike, showroomBaseBike } = require('../Controller/bikeController');
const bikeRoutes = require('express').Router();

//Post Bike 
bikeRoutes.post('/postBike', postBike);


//Post Bike 
bikeRoutes.get('/getAllBike', getAllBike);


//Post Bike 
bikeRoutes.get('/getsingleBike/:bikeId', getSingleBike);

//Categoty by Bike 
bikeRoutes.get('/category/:catBike', categotyBaseBike);

//Showroom by Bike 
bikeRoutes.get('/showroom/:showroomId', showroomBaseBike);


module.exports = bikeRoutes;