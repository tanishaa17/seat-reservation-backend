const express = require("express");
const BookingSchema = require("../Model/bookingSchema");
const bookingRouter = express.Router();

bookingRouter.post("/book-seats", async (req, res) => {
    try {
        const seats = req.body;
        // console.log(seats);
        if (!seats) return res.status(400).send({ message: "Please add the number of seats!", success: false });
        // if (seats > 7) return res.status(400).send({ message: "You can not book more than 7 seats!", success: false });
        else {
            const newBookedSeat = new BookingSchema(seats);
            await newBookedSeat.save();
            return res.status(200).send(`Booking done successfully`)
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send(`Error while booking seats ${error}`)
    }
})

module.exports = bookingRouter