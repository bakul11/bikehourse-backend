const bikeDB = require("../Model/bikeModel");

//Post bike controller
exports.postBike = async (req, res, next) => {
    try {
        const bike = await bikeDB.create(req.body);
        //success post 
        res.status(201).json({
            message: 'Bike upload successfully done!',
            success: true,
            bike
        })
    } catch (error) {
        res.status(400).json({
            message: 'Bike upload fail please try aggain!',
            error: error.message
        })
    }
}


//Get ALl Bike 
exports.getAllBike = async (req, res, next) => {
    try {
        const bike = await bikeDB.find();
        //success post 
        res.status(200).send(bike)
    } catch (error) {
        res.status(404).json({
            message: 'bike not found!',
            error: error.message
        })
    }
}

//Get categoty Base Bike
exports.categotyBaseBike = async (req, res, next) => {
    try {
        const cat = req.params.catBike;
        const findBike = { brand: cat };
        const bike = await bikeDB.find(findBike);
        //success post 
        res.status(200).send(bike)
    } catch (error) {
        res.status(404).json({
            message: 'bike not found!',
            error: error.message
        })
    }
}
//Get showroom Base Bike
exports.showroomBaseBike = async (req, res, next) => {
    try {
        const cat = req.params.showroomId;
        const findBike = { showroom: cat };
        const bike = await bikeDB.find(findBike);
        //success post 
        res.status(200).send(bike)
    } catch (error) {
        res.status(404).json({
            message: 'bike not found!',
            error: error.message
        })
    }
}


//Get ALl Bike 
exports.getSingleBike = async (req, res, next) => {
    try {
        const { bikeId } = req.params;
        const bike = await bikeDB.findById(bikeId);
        //success post 
        res.status(200).send(bike)
    } catch (error) {
        res.status(404).json({
            message: 'bike not found!',
            error: error.message
        })
    }
}