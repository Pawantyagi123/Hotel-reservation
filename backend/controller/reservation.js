import ErrorHandler from '../error/error.js';
import { Reservation } from '../models/reservationSchema.js';

export const sendReseravtion = async (req, res, next) => {
    const { firstName, lastName, email, phone, time,  reservationdate } = req.body;
    if (!firstName || !lastName || !email || !phone || !time || ! reservationdate) {
        return next(new ErrorHandler("please fill full reservation form", 400));
    }
    try {
        await Reservation.create({firstName, lastName, email, phone, time,  reservationdate});
        res.status(201).json({
            succes: true,
            message: "Resarvation sent successfully"
        })
    } catch (error) {
        if (error.name === "validationError") {
            const validationError = object.values(error.error).map((err) => err.message);
            return next(new ErrorHandler(validationError.join(","), 400));
        }
        return next(error);
    }
}