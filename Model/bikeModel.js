const mongoose = require('mongoose')

const bikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    photo: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    showroom: {
        type: String,
        required: true,
        trim: true
    },
    bikeCC: {
        type: String,
        default: "150CC",
    },
    maxPower: {
        type: String,
        default: "8.4 HP @ 10,000 rpm",
    },
    maxTorque: {
        type: String,
        default: '14.2 Nm @ 7,500 rpm'
    },
    topSpeed: {
        type: String,
        default: '150kmph'
    },
    speedMeter: {
        type: String,
        default: 'Digital'
    },
    odoMeter: {
        type: String,
        default: 'Digital'
    },
    techoMeter: {
        type: String,
        default: 'Digital'
    },
    clock: {
        type: String,
        default: 'Digital'
    },
    gearDisplay: {
        type: String,
        default: 'yes'
    },
    bikeColor: {
        type: String,
        default: "red,blue,gray available"
    },
    setType: {
        type: String,
        default: 'yes'
    },
    usbPort: {
        type: String,
        default: 'yes'
    },
    speedMeter: {
        type: String,
        default: 'Digital'
    },
    fuelStm: {
        type: String,
        default: 'Fuel Injection'
    },
    ratio: {
        type: String,
        default: '11.6 : 1'
    },
    collingStm: {
        type: String,
        default: 'Liquid Cooled'
    },
    bikeLength: {
        type: String,
        default: '1950mm'
    },
    bikeWidth: {
        type: String,
        default: '785mm'
    },
    bikeOil: {
        type: String,
        default: '150kmpl'
    },
    bikeWeight: {
        type: String,
        default: '150kg'
    },
    bikeAbs: {
        type: String,
        default: 'Dual & Single Channel ABS available'
    },
    gears: {
        type: Number,
        default: '4'
    }
})

const bikeDB = mongoose.model('bikestore', bikeSchema);
module.exports = bikeDB;