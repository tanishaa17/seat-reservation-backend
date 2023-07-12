const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    seats: {
        type: Number,
        required: true,
        min: [1, 'Minimum number of seats should be 1'],
        max: [7, 'You can not book more than 7 seats']
    }
}, {
    versionKey: false,
    timestamps: true
})
module.exports = mongoose.model("seat", bookingSchema)